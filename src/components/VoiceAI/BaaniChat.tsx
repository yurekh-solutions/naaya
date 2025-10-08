import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GlassCard } from '@/components/ui/glass-card';
import AIAvatar from './AIAvatar';
import { 
  Mic, 
  MicOff, 
  Send, 
  X, 
  Volume2, 
  VolumeX,
  MessageCircle,
  Loader2,
  Languages,
  Zap,
  Sparkles
} from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  isVoice?: boolean;
  language?: string;
}

interface UserInfo {
  name?: string;
  location?: string;
  category?: string;
  requirements?: string[];
  preferredLanguage?: string;
}

interface EnhancedBaaniChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const BaaniChat: React.FC<EnhancedBaaniChatProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({ preferredLanguage: 'english' });
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState<'english' | 'hindi'>('english');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const synthesisRef = useRef<SpeechSynthesis | null>(null);
  const conversationHistory = useRef<Array<{role: string, content: string}>>([]);

  // Initialize speech recognition and synthesis
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = currentLanguage === 'hindi' ? 'hi-IN' : 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        handleUserMessage(transcript, true);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
        toast.error('Voice recognition error. Please try again.');
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    synthesisRef.current = window.speechSynthesis;

    // Initial greeting
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        const greeting = currentLanguage === 'hindi'
          ? "नमस्ते! मैं Bani हूं, आपकी AI procurement assistant। मैं NaayaConstruction के लिए काम करती हूं और आपकी construction materials की जरूरतों में मदद करने के लिए यहां हूं। आप मुझसे किसी भी material के बारे में पूछ सकते हैं - मुझे सब कुछ पता है! कैसे मदद कर सकती हूं?"
          : "Hello! I'm Bani, your AI procurement assistant at NaayaConstruction. I'm here to help you with all your construction material needs. Ask me anything - I know everything about procurement, pricing, suppliers, and materials! How can I assist you today?";
        addBotMessage(greeting);
        conversationHistory.current = [];
      }, 800);
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (synthesisRef.current) {
        synthesisRef.current.cancel();
      }
    };
  }, [isOpen, currentLanguage]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addBotMessage = (content: string) => {
    const message: Message = {
      id: Date.now().toString(),
      type: 'bot',
      content,
      timestamp: new Date(),
      language: currentLanguage
    };
    setMessages(prev => [...prev, message]);
    
    if (isVoiceEnabled) {
      speakMessage(content);
    }
  };

  const addUserMessage = (content: string, isVoice = false) => {
    const message: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date(),
      isVoice,
      language: currentLanguage
    };
    setMessages(prev => [...prev, message]);
  };

  const speakMessage = (text: string) => {
    if (!synthesisRef.current || !isVoiceEnabled) return;
    
    synthesisRef.current.cancel();
    setIsSpeaking(true);
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.85;
    utterance.pitch = 1.3;
    utterance.volume = 0.8;
    
    const voices = synthesisRef.current.getVoices();
    const preferredVoice = voices.find(voice => {
      const lang = currentLanguage === 'hindi' ? 'hi' : 'en';
      return voice.lang.includes(lang) && 
             (voice.name.toLowerCase().includes('female') || 
              voice.name.toLowerCase().includes('woman') ||
              voice.name.toLowerCase().includes('samantha') ||
              voice.name.toLowerCase().includes('zira') ||
              voice.name.toLowerCase().includes('aria'));
    });
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }
    
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    synthesisRef.current.speak(utterance);
  };

  const handleUserMessage = async (message: string, isVoice = false) => {
    addUserMessage(message, isVoice);
    setIsThinking(true);

    // Add to conversation history
    conversationHistory.current.push({
      role: 'user',
      content: message
    });

    try {
      // Call AI backend
      const { data, error } = await supabase.functions.invoke('baani-chat', {
        body: {
          messages: conversationHistory.current,
          userInfo: {
            ...userInfo,
            preferredLanguage: currentLanguage
          }
        }
      });

      if (error) throw error;

      if (data?.error) {
        if (data.retryable) {
          toast.error(data.error);
        } else {
          toast.error(data.error);
        }
        setIsThinking(false);
        return;
      }

      const aiResponse = data.message;
      
      // Add AI response to conversation history
      conversationHistory.current.push({
        role: 'assistant',
        content: aiResponse
      });

      // Keep only last 20 messages to manage context size
      if (conversationHistory.current.length > 20) {
        conversationHistory.current = conversationHistory.current.slice(-20);
      }

      setIsThinking(false);
      addBotMessage(aiResponse);

      // Extract user info from conversation
      extractUserInfo(message);

    } catch (error) {
      console.error('Chat error:', error);
      setIsThinking(false);
      
      const errorMessage = currentLanguage === 'hindi'
        ? "क्षमा करें, मुझे कुछ technical issue आ रही है। कृपया दोबारा try करें।"
        : "Sorry, I'm experiencing some technical difficulties. Please try again.";
      
      addBotMessage(errorMessage);
      toast.error('Failed to get response. Please try again.');
    }
  };

  const extractUserInfo = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    // Extract name
    const namePatterns = [
      /my name is (\w+)/i,
      /i am (\w+)/i,
      /i'm (\w+)/i,
      /call me (\w+)/i,
      /मेरा नाम (\w+)/i,
    ];
    
    for (const pattern of namePatterns) {
      const match = message.match(pattern);
      if (match && !userInfo.name) {
        setUserInfo(prev => ({ ...prev, name: match[1] }));
        break;
      }
    }

    // Extract location
    const commonCities = [
      'delhi', 'mumbai', 'bangalore', 'chennai', 'kolkata', 'hyderabad', 
      'pune', 'ahmedabad', 'jaipur', 'lucknow', 'kanpur', 'nagpur', 'indore'
    ];
    
    for (const city of commonCities) {
      if (lowerMessage.includes(city) && !userInfo.location) {
        setUserInfo(prev => ({ 
          ...prev, 
          location: city.charAt(0).toUpperCase() + city.slice(1) 
        }));
        break;
      }
    }
  };

  const startListening = () => {
    if (!recognitionRef.current) {
      toast.error('Voice recognition not supported in your browser');
      return;
    }
    
    setIsListening(true);
    recognitionRef.current.lang = currentLanguage === 'hindi' ? 'hi-IN' : 'en-US';
    recognitionRef.current.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
  };

  const toggleVoice = () => {
    setIsVoiceEnabled(!isVoiceEnabled);
    if (!isVoiceEnabled) {
      synthesisRef.current?.cancel();
      setIsSpeaking(false);
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      handleUserMessage(inputMessage);
      setInputMessage('');
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="w-full max-w-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <GlassCard className="h-[600px] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-primary/20 to-accent/20">
              <div className="flex items-center space-x-3">
                <AIAvatar 
                  size="md" 
                  isOnline={true}
                  isSpeaking={isSpeaking}
                  isThinking={isThinking}
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-bold text-foreground text-lg">Bani</h3>
                    <Sparkles className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">AI Procurement Expert</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentLanguage(currentLanguage === 'english' ? 'hindi' : 'english')}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Languages className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleVoice}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {isVoiceEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Status Bar */}
            <div className="px-4 py-3 border-b border-border bg-card/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    isThinking ? 'bg-yellow-500 animate-pulse' :
                    isSpeaking ? 'bg-blue-500 animate-pulse' : 
                    'bg-green-500'
                  }`} />
                  <span className="text-xs text-muted-foreground">
                    {isThinking ? 'Thinking...' : 
                     isSpeaking ? 'Speaking...' : 
                     'Online & Ready'}
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Languages className="h-3 w-3" />
                    <span>{currentLanguage === 'english' ? 'EN' : 'हि'}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Zap className="h-3 w-3 text-primary" />
                    <span>AI Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] ${
                    message.type === 'user' 
                      ? 'bg-primary text-primary-foreground rounded-l-2xl rounded-tr-2xl shadow-lg' 
                      : 'bg-card border border-border text-foreground rounded-r-2xl rounded-tl-2xl'
                  } p-4`}>
                    <div className="flex items-start space-x-2">
                      {message.type === 'bot' && (
                        <AIAvatar size="sm" isOnline={true} className="flex-shrink-0 mt-0.5" />
                      )}
                      {message.type === 'user' && message.isVoice && (
                        <Mic className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm whitespace-pre-line leading-relaxed">{message.content}</p>
                        <p className="text-xs opacity-70 mt-2">{formatTime(message.timestamp)}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Thinking indicator */}
              {isThinking && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-card border border-border rounded-r-2xl rounded-tl-2xl p-4">
                    <div className="flex items-center space-x-2">
                      <AIAvatar size="sm" isThinking={true} className="flex-shrink-0" />
                      <div className="flex space-x-1">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 bg-primary rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-card/5">
              <div className="flex items-center space-x-2">
                <div className="flex-1 relative">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder={currentLanguage === 'hindi' ? "अपना संदेश लिखें..." : "Type your message..."}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    disabled={isThinking}
                    className="pr-12 bg-background border-border"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isThinking}
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                  >
                    {isThinking ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={isListening ? stopListening : startListening}
                  disabled={isSpeaking || isThinking}
                  className={`w-12 h-10 ${
                    isListening 
                      ? 'bg-destructive/20 border-destructive/40 text-destructive' 
                      : 'hover:bg-primary/20 hover:border-primary/40'
                  }`}
                >
                  {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                </Button>
              </div>
              
              <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                <span>
                  {isListening 
                    ? 'Listening - Speak clearly' 
                    : `Powered by AI • ${currentLanguage === 'english' ? 'English' : 'हिंदी'}`}
                </span>
                <span className="flex items-center space-x-1">
                  <Sparkles className="h-3 w-3" />
                  <span>NaayaConstruction</span>
                </span>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BaaniChat;

