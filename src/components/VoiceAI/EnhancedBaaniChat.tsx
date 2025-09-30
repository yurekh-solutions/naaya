import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GlassCard } from '@/components/ui/glass-card';
import AIAvatar from './AIAvatar';
import { supabase } from '@/integrations/supabase/client';
import { 
  Mic, 
  MicOff, 
  Send, 
  X, 
  Volume2, 
  VolumeX,
  Languages,
  Sparkles,
  Zap
} from 'lucide-react';
import { toast } from 'sonner';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  isVoice?: boolean;
  language?: string;
}

interface EnhancedBaaniChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnhancedBaaniChat: React.FC<EnhancedBaaniChatProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState<'english' | 'hindi'>('english');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const synthesisRef = useRef<SpeechSynthesis | null>(null);

  // Quick action suggestions
  const quickActions = [
    "What is NaayaConstruction?",
    "TMT steel prices in Delhi",
    "Need cement suppliers",
    "Tell me about your services"
  ];

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
          ? "नमस्ते! मैं Bani हूं, NaayaConstruction की AI assistant। मैं आपकी construction materials procurement में मदद कर सकती हूं। आप मुझसे कुछ भी पूछ सकते हैं! 😊"
          : "Hello! I'm Bani, your AI assistant from NaayaConstruction. I can help you with construction material procurement. Ask me anything! 😊";
        addBotMessage(greeting);
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
    } else {
      const fallbackVoice = voices.find(voice => 
        currentLanguage === 'hindi' 
          ? voice.lang.includes('hi')
          : voice.lang.includes('en')
      );
      if (fallbackVoice) utterance.voice = fallbackVoice;
    }
    
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    synthesisRef.current.speak(utterance);
  };

  const handleUserMessage = async (message: string, isVoice = false) => {
    addUserMessage(message, isVoice);
    setIsThinking(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('bani-chat', {
        body: { 
          messages: [
            ...messages.map(m => ({
              role: m.type === 'user' ? 'user' : 'assistant',
              content: m.content
            })),
            { role: 'user', content: message }
          ],
          language: currentLanguage
        }
      });

      setIsThinking(false);

      if (error) {
        console.error('AI Error:', error);
        const errorMsg = currentLanguage === 'hindi'
          ? "क्षमा करें, मुझे कुछ समस्या हो रही है। कृपया फिर से कोशिश करें।"
          : "Sorry, I'm having some trouble. Please try again.";
        addBotMessage(errorMsg);
        toast.error('Connection error');
        return;
      }

      if (data?.message) {
        addBotMessage(data.message);
      } else {
        throw new Error('No response from AI');
      }
    } catch (error) {
      setIsThinking(false);
      console.error('Chat error:', error);
      const errorMsg = currentLanguage === 'hindi'
        ? "क्षमा करें, कुछ गलत हो गया। कृपया बाद में कोशिश करें।"
        : "Sorry, something went wrong. Please try again later.";
      addBotMessage(errorMsg);
      toast.error('Failed to get response');
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
          <GlassCard variant="premium" className="h-[600px] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-ai">
              <div className="flex items-center space-x-3">
                <AIAvatar 
                  size="md" 
                  isOnline={true}
                  isSpeaking={isSpeaking}
                  isThinking={isThinking}
                />
                <div>
                  <h3 className="font-bold text-white text-lg">Bani AI Assistant</h3>
                  <p className="text-sm text-white/80">NaayaConstruction Procurement Expert</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentLanguage(currentLanguage === 'english' ? 'hindi' : 'english')}
                  className="text-white/80 hover:text-white hover:bg-white/10"
                >
                  <Languages className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleVoice}
                  className="text-white/80 hover:text-white hover:bg-white/10"
                >
                  {isVoiceEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="text-white/80 hover:text-white hover:bg-white/10"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Status Bar */}
            <div className="px-4 py-3 border-b border-white/5 bg-card/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    isThinking ? 'bg-yellow-500 animate-pulse' :
                    isSpeaking ? 'bg-blue-500 animate-pulse' : 
                    'bg-green-500'
                  }`} />
                  <span className="text-xs text-muted-foreground">
                    {isThinking ? 'Bani is thinking...' : 
                     isSpeaking ? 'Bani is speaking...' : 
                     'Connected - Ready to help'}
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Languages className="h-3 w-3" />
                    <span>{currentLanguage === 'english' ? 'EN' : 'हि'}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Zap className="h-3 w-3" />
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
                      ? 'bg-gradient-primary text-white rounded-l-2xl rounded-tr-2xl shadow-lg' 
                      : 'bg-card border border-white/10 text-foreground rounded-r-2xl rounded-tl-2xl'
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
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-xs opacity-70">{formatTime(message.timestamp)}</p>
                          {message.language && (
                            <span className="text-xs opacity-60">
                              {message.language === 'hindi' ? 'हि' : 'EN'}
                            </span>
                          )}
                        </div>
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
                  <div className="bg-card border border-white/10 rounded-r-2xl rounded-tl-2xl p-4">
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

            {/* Quick Actions */}
            {messages.length <= 2 && (
              <div className="px-4 py-3 border-t border-white/5 bg-card/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground font-medium">Try asking:</span>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Sparkles className="h-3 w-3" />
                    <span>AI Powered</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((action, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      size="sm"
                      onClick={() => handleUserMessage(action)}
                      className="text-xs glass-morphism border-white/20 hover:bg-white/10"
                    >
                      {action}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-card/5">
              <div className="flex items-center space-x-2">
                <div className="flex-1 relative">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder={currentLanguage === 'hindi' ? "अपना संदेश लिखें..." : "Type your message..."}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="pr-12 glass-morphism border-white/20 bg-white/5 text-foreground placeholder:text-muted-foreground"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()}
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-primary/20"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={isListening ? stopListening : startListening}
                  disabled={isSpeaking}
                  className={`w-12 h-10 glass-morphism border-white/20 ${
                    isListening 
                      ? 'bg-red-500/20 border-red-500/40 text-red-400' 
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
                    : `Bani AI • ${currentLanguage === 'english' ? 'English' : 'हिंदी'} Mode`}
                </span>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EnhancedBaaniChat;
