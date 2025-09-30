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
  User,
  MapPin,
  Package,
  CheckCircle,
  Languages,
  Zap,
  TrendingUp,
  Clock,
  Shield
} from 'lucide-react';
import { toast } from 'sonner';
import { 
  greetingResponses, 
  askNameResponses, 
  askLocationResponses, 
  categoryResponses,
  materialDetailsResponses,
  completionResponses,
  helpTopics,
  procurementKnowledge,
  type MultilingualResponse
} from '@/data/multilingualResponses';

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
  const [conversationStage, setConversationStage] = useState('greeting');
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState<'english' | 'hindi'>('english');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const synthesisRef = useRef<SpeechSynthesis | null>(null);

  const languages = [
    { code: 'english', name: 'English' },
    { code: 'hindi', name: 'हिंदी' },
    { code: 'tamil', name: 'தமிழ்' },
    { code: 'telugu', name: 'తెలుగు' },
    { code: 'bengali', name: 'বাংলা' },
    { code: 'gujarati', name: 'ગુજરાતી' },
    { code: 'marathi', name: 'मराठी' },
    { code: 'punjabi', name: 'ਪੰਜਾਬੀ' },
    { code: 'kannada', name: 'ಕನ್ನಡ' },
    { code: 'malayalam', name: 'മലയാളം' },
    { code: 'urdu', name: 'اردو' },
    { code: 'odia', name: 'ଓଡ଼ିଆ' },
    { code: 'assamese', name: 'অসমীয়া' },
    { code: 'nepali', name: 'नेपाली' },
    { code: 'spanish', name: 'Español' },
    { code: 'french', name: 'Français' },
    { code: 'german', name: 'Deutsch' },
    { code: 'portuguese', name: 'Português' },
    { code: 'italian', name: 'Italiano' },
    { code: 'russian', name: 'Русский' },
    { code: 'chinese', name: '中文' },
    { code: 'japanese', name: '日本語' },
    { code: 'korean', name: '한국어' },
    { code: 'arabic', name: 'العربية' },
    { code: 'turkish', name: 'Türkçe' },
    { code: 'persian', name: 'فارسی' },
    { code: 'dutch', name: 'Nederlands' },
    { code: 'swedish', name: 'Svenska' },
    { code: 'norwegian', name: 'Norsk' },
    { code: 'danish', name: 'Dansk' },
    { code: 'finnish', name: 'Suomi' },
    { code: 'polish', name: 'Polski' },
    { code: 'czech', name: 'Čeština' },
    { code: 'hungarian', name: 'Magyar' },
    { code: 'romanian', name: 'Română' },
    { code: 'bulgarian', name: 'Български' },
    { code: 'ukrainian', name: 'Українська' },
    { code: 'vietnamese', name: 'Tiếng Việt' },
    { code: 'thai', name: 'ไทย' },
    { code: 'indonesian', name: 'Bahasa Indonesia' },
    { code: 'malay', name: 'Bahasa Melayu' },
    { code: 'filipino', name: 'Filipino' },
    { code: 'swahili', name: 'Kiswahili' }
  ];

  // Enhanced material categories with comprehensive specifications
  const materialCategories = [
    { 
      id: 'tmt_steel', 
      name: 'TMT Steel & Reinforcement',
      icon: '🏗️',
      description: 'All grades Fe415-Fe650, 6-40mm sizes'
    },
    { 
      id: 'mild_steel', 
      name: 'Mild Steel & Structural',
      icon: '⚔️',
      description: 'MS Plates, Angles, Channels, Beams'
    },
    { 
      id: 'stainless_steel', 
      name: 'Stainless Steel Products',
      icon: '✨',
      description: 'SS304, SS316, Sheets, Pipes, Fittings'
    },
    { 
      id: 'cement', 
      name: 'Cement & Concrete',
      icon: '🧱',
      description: 'OPC43/53, PPC, PSC, White Cement'
    },
    { 
      id: 'aggregates', 
      name: 'Aggregates & Sand',
      icon: '🪨',
      description: 'River Sand, M-Sand, Stone Chips'
    },
    { 
      id: 'bricks', 
      name: 'Bricks & Blocks',
      icon: '🏠',
      description: 'Clay, Fly Ash, AAC, Concrete Blocks'
    },
    { 
      id: 'electrical_materials', 
      name: 'Electrical Materials',
      icon: '⚡',
      description: 'Cables, Wires, MCBs, Switches'
    },
    { 
      id: 'plumbing_materials', 
      name: 'Plumbing Supplies',
      icon: '🚿',
      description: 'PVC, CPVC, GI Pipes, Fittings'
    },
    { 
      id: 'paints_finishes', 
      name: 'Paints & Finishes',
      icon: '🎨',
      description: 'Emulsion, Enamel, Primer, Putty'
    },
    { 
      id: 'hardware_tools', 
      name: 'Hardware & Tools',
      icon: '🔧',
      description: 'Hand Tools, Power Tools, Fasteners'
    }
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

    // Enhanced greeting with context
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        const greeting = getRandomResponse(greetingResponses);
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

  const getRandomResponse = (responses: MultilingualResponse[]): string => {
    const response = responses[Math.floor(Math.random() * responses.length)];
    return response[currentLanguage] || response.english;
  };

  const addBotMessage = (content: string) => {
    setIsThinking(true);
    
    setTimeout(() => {
      const message: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content,
        timestamp: new Date(),
        language: currentLanguage
      };
      setMessages(prev => [...prev, message]);
      setIsThinking(false);
      
      if (isVoiceEnabled) {
        speakMessage(content);
      }
    }, 1000 + Math.random() * 1000); // Variable thinking time
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
    utterance.pitch = 1.3; // Higher pitch for female voice
    utterance.volume = 0.8;
    
    // Set language-specific female voice
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
      // Fallback to any voice with higher pitch for female sound
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

  const handleUserMessage = (message: string, isVoice = false) => {
    addUserMessage(message, isVoice);
    
    setTimeout(() => {
      processAdvancedMessage(message);
    }, 500);
  };

  const processAdvancedMessage = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    // Detect language preference
    if (lowerMessage.includes('hindi') || lowerMessage.includes('हिंदी')) {
      setCurrentLanguage('hindi');
      setUserInfo(prev => ({ ...prev, preferredLanguage: 'hindi' }));
    }

    switch (conversationStage) {
      case 'greeting':
        handleGreetingStage(lowerMessage);
        break;
      case 'askName':
        handleNameStage(message);
        break;
      case 'askLocation':
        handleLocationStage(message);
        break;
      case 'askCategory':
        handleCategoryStage(lowerMessage);
        break;
      case 'materialDetails':
        handleMaterialDetailsStage(message);
        break;
      case 'completion':
        handleCompletionStage(lowerMessage);
        break;
      default:
        handleGeneralInquiry(lowerMessage);
    }
  };

  const handleGreetingStage = (message: string) => {
    if (message.includes('hello') || message.includes('hi') || message.includes('नमस्ते') || 
        message.includes('yes') || message.includes('help') || message.includes('material')) {
      setConversationStage('askName');
      const response = getRandomResponse(askNameResponses);
      addBotMessage(response);
    } else {
      const fallback = currentLanguage === 'hindi' 
        ? "मैं आपकी construction materials की procurement में मदद करने के लिए यहां हूं। आइए शुरू करते हैं! आपका नाम क्या है?"
        : "I'm here to help you with construction material procurement. Let's get started! What's your name?";
      addBotMessage(fallback);
      setConversationStage('askName');
    }
  };

  const handleNameStage = (message: string) => {
    const name = extractName(message);
    setUserInfo(prev => ({ ...prev, name }));
    setConversationStage('askLocation');
    
    const response = getRandomResponse(askLocationResponses).replace('{name}', name);
    addBotMessage(response);
  };

  const handleLocationStage = (message: string) => {
    const location = extractLocation(message);
    setUserInfo(prev => ({ ...prev, location }));
    setConversationStage('askCategory');
    
    const response = getRandomResponse(categoryResponses)
      .replace('{name}', userInfo.name || 'there')
      .replace('{location}', location);
    addBotMessage(response);
  };

  const handleCategoryStage = (message: string) => {
    const category = extractCategory(message);
    setUserInfo(prev => ({ ...prev, category }));
    setConversationStage('materialDetails');
    
    if (materialDetailsResponses[category]) {
      const details = materialDetailsResponses[category][currentLanguage];
      addBotMessage(details);
    } else {
      const genericResponse = currentLanguage === 'hindi'
        ? `बेहतरीन! ${category} के लिए आपकी specific requirements क्या हैं? कृपया बताएं:\n- कितनी quantity चाहिए\n- कौन से specifications\n- Budget की बात\n- Delivery timeline`
        : `Excellent choice! What are your specific requirements for ${category}? Please tell me:\n- Quantity needed\n- Specifications required\n- Budget considerations\n- Delivery timeline`;
      addBotMessage(genericResponse);
    }
  };

  const handleMaterialDetailsStage = (message: string) => {
    const requirements = [message.trim()];
    setUserInfo(prev => ({ ...prev, requirements }));
    setConversationStage('completion');
    
    // Provide current market insights
    const marketInsight = generateMarketInsight(userInfo.category!, userInfo.location!);
    addBotMessage(marketInsight);
    
    setTimeout(() => {
      const completion = getRandomResponse(completionResponses)
        .replace('{name}', userInfo.name || '')
        .replace('{category}', userInfo.category || '')
        .replace('{location}', userInfo.location || '');
      addBotMessage(completion);
      
      toast.success('Query submitted successfully! Our expert team will contact you soon.');
    }, 2000);
  };

  const handleCompletionStage = (message: string) => {
    if (message.includes('yes') || message.includes('more') || message.includes('और')) {
      setConversationStage('askCategory');
      const moreHelp = currentLanguage === 'hindi'
        ? "बिल्कुल! मैं और भी materials के साथ आपकी मदद कर सकती हूं। कौन सी category देखना चाहते हैं?"
        : "Absolutely! I can help you with more materials. Which category would you like to explore?";
      addBotMessage(moreHelp);
    } else {
      const thanks = currentLanguage === 'hindi'
        ? "धन्यवाद! कभी भी construction materials की जरूरत हो तो मुझसे संपर्क करें। आपका दिन शुभ हो!"
        : "Thank you! Feel free to reach out anytime for your construction material needs. Have a great day!";
      addBotMessage(thanks);
    }
  };

  const handleGeneralInquiry = (message: string) => {
    // Handle specific queries about pricing, availability, etc.
    if (message.includes('price') || message.includes('cost') || message.includes('rate') || message.includes('कीमत')) {
      providePricingInfo();
    } else if (message.includes('quality') || message.includes('certificate') || message.includes('गुणवत्ता')) {
      provideQualityInfo();
    } else {
      const generalHelp = currentLanguage === 'hindi'
        ? "मैं आपकी इन सभी चीजों में मदद कर सकती हूं:\n• Material pricing और availability\n• Quality certificates\n• Supplier verification\n• Delivery scheduling\n• Technical specifications\n\nआप किस बारे में जानना चाहते हैं?"
        : "I can help you with:\n• Material pricing and availability\n• Quality certificates\n• Supplier verification\n• Delivery scheduling\n• Technical specifications\n\nWhat would you like to know about?";
      addBotMessage(generalHelp);
    }
  };

  const generateMarketInsight = (category: string, location: string): string => {
    const insights = {
      english: `📊 Current Market Update for ${category} in ${location}:\n\n🔸 Prices are stable this week\n🔸 Good availability from top suppliers\n🔸 Delivery: 2-5 days typical\n🔸 Quality certifications verified\n🔸 Best rates available through bulk orders`,
      hindi: `📊 ${location} में ${category} के लिए वर्तमान बाजार अपडेट:\n\n🔸 इस सप्ताह कीमतें स्थिर हैं\n🔸 Top suppliers से अच्छी उपलब्धता\n🔸 Delivery: आमतौर पर 2-5 दिन\n🔸 Quality certifications verified\n🔸 Bulk orders के द्वारा बेहतरीन rates उपलब्ध`
    };
    return insights[currentLanguage];
  };

  const providePricingInfo = () => {
    const pricing = currentLanguage === 'hindi'
      ? "💰 Current Pricing Information:\n\n🔸 TMT Steel: ₹55,000-60,000 per MT\n🔸 Cement OPC43: ₹380-420 per bag\n🔸 Cement OPC53: ₹400-440 per bag\n🔸 River Sand: ₹800-1200 per brass\n\nNOTE: Prices vary by location और quantity. Exact quotes के लिए requirements बताएं।"
      : "💰 Current Pricing Information:\n\n🔸 TMT Steel: ₹55,000-60,000 per MT\n🔸 Cement OPC43: ₹380-420 per bag\n🔸 Cement OPC53: ₹400-440 per bag\n🔸 River Sand: ₹800-1200 per brass\n\nNOTE: Prices vary by location and quantity. Share your requirements for exact quotes.";
    addBotMessage(pricing);
  };

  const provideQualityInfo = () => {
    const quality = currentLanguage === 'hindi'
      ? "🛡️ Quality Assurance:\n\n✅ सभी materials ISI certified\n✅ Third-party testing reports\n✅ Manufacturer warranties\n✅ Quality guarantee\n✅ Return policy उपलब्ध\n\nहमारे सभी suppliers verified हैं और high-quality materials provide करते हैं।"
      : "🛡️ Quality Assurance:\n\n✅ All materials ISI certified\n✅ Third-party testing reports\n✅ Manufacturer warranties\n✅ Quality guarantee\n✅ Return policy available\n\nAll our suppliers are verified and provide high-quality materials.";
    addBotMessage(quality);
  };

  // Utility functions for extracting information
  const extractName = (message: string): string => {
    const namePatterns = [
      /my name is (\w+)/i,
      /i am (\w+)/i,
      /i'm (\w+)/i,
      /call me (\w+)/i,
      /मेरा नाम (\w+)/i,
      /मैं (\w+)/i
    ];
    
    for (const pattern of namePatterns) {
      const match = message.match(pattern);
      if (match) return match[1];
    }
    
    const words = message.trim().split(' ');
    return words[0] || 'Friend';
  };

  const extractLocation = (message: string): string => {
    const commonCities = [
      'delhi', 'mumbai', 'bangalore', 'chennai', 'kolkata', 'hyderabad', 
      'pune', 'ahmedabad', 'jaipur', 'lucknow', 'kanpur', 'nagpur', 'indore',
      'thane', 'bhopal', 'visakhapatnam', 'pimpri', 'patna', 'vadodara', 'ghaziabad'
    ];
    const lowerMessage = message.toLowerCase();
    
    for (const city of commonCities) {
      if (lowerMessage.includes(city)) {
        return city.charAt(0).toUpperCase() + city.slice(1);
      }
    }
    
    return message.trim() || 'India';
  };

  const extractCategory = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('tmt') || (lowerMessage.includes('steel') && !lowerMessage.includes('stainless') && !lowerMessage.includes('mild'))) return 'tmt_steel';
    if (lowerMessage.includes('mild steel') || lowerMessage.includes('ms plate') || lowerMessage.includes('angle') || lowerMessage.includes('channel')) return 'mild_steel';
    if (lowerMessage.includes('stainless steel') || lowerMessage.includes('ss304') || lowerMessage.includes('ss316')) return 'stainless_steel';
    if (lowerMessage.includes('cement') || lowerMessage.includes('concrete') || lowerMessage.includes('opc')) return 'cement';
    if (lowerMessage.includes('sand') || lowerMessage.includes('aggregate') || lowerMessage.includes('stone chips')) return 'aggregates';
    if (lowerMessage.includes('brick') || lowerMessage.includes('block') || lowerMessage.includes('aac')) return 'bricks';
    if (lowerMessage.includes('electrical') || lowerMessage.includes('cable') || lowerMessage.includes('wire') || lowerMessage.includes('mcb')) return 'electrical_materials';
    if (lowerMessage.includes('plumbing') || lowerMessage.includes('pipe') || lowerMessage.includes('pvc') || lowerMessage.includes('cpvc')) return 'plumbing_materials';
    if (lowerMessage.includes('paint') || lowerMessage.includes('emulsion') || lowerMessage.includes('enamel') || lowerMessage.includes('primer')) return 'paints_finishes';
    if (lowerMessage.includes('tool') || lowerMessage.includes('hardware') || lowerMessage.includes('fastener')) return 'hardware_tools';
    
    return 'general';
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
          <GlassCard variant="premium" className="h-[600px] flex flex-col overflow-hidden ">
            {/* Enhanced Header */}
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

            {/* Enhanced Status Bar */}
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
                <div className="text-xs text-muted-foreground mb-2">
                  <span className="font-medium">Quick Actions:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {materialCategories.slice(0, 3).map((category) => (
                    <Button
                      key={category.id}
                      variant="outline"
                      size="sm"
                      onClick={() => handleUserMessage(`I need ${category.name}`)}
                      className="text-xs glass-morphism border-white/20 hover:bg-white/10"
                    >
                      {category.icon} {category.name.split(' ')[0]}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Enhanced Input */}
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
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <Shield className="h-3 w-3" />
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BaaniChat;