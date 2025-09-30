import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mic, MessageCircle, Zap, Languages } from 'lucide-react';
import AIAvatar from './AIAvatar';
import EnhancedBaaniChat from './EnhancedBaaniChat';

const VoiceAIButton: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds for new users
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = () => {
    setIsChatOpen(true);
    setShowTooltip(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        {/* Main AI Button */}
        <motion.div
          className="relative"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 300 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <Button
            onClick={handleButtonClick}
            className="h-16 w-16 rounded-full bg-gradient-ai hover:scale-110 shadow-ai-glow hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <div className="relative z-10">
              <AIAvatar 
                size="md" 
                isOnline={true} 
                className="transform group-hover:scale-110 transition-transform duration-300" 
              />
            </div>
            
            {/* Animated background rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white/30"
              animate={isHovered ? { 
                scale: [1, 1.3, 1], 
                opacity: [0.7, 0.3, 0.7] 
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-white/20"
              animate={isHovered ? { 
                scale: [1, 1.5, 1], 
                opacity: [0.5, 0.1, 0.5] 
              } : {}}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            />
          </Button>

          {/* Floating action buttons when hovered */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute bottom-full right-0 mb-4 flex flex-col space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ scale: 0, x: 20 }}
                  animate={{ scale: 1, x: 0 }}
                  exit={{ scale: 0, x: 20 }}
                  transition={{ delay: 0.1 }}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleButtonClick}
                    className="glass-morphism border-white/30 text-white hover:bg-white/20 whitespace-nowrap"
                  >
                    <Mic className="h-4 w-4 mr-2" />
                    Voice Chat
                  </Button>
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0, x: 20 }}
                  animate={{ scale: 1, x: 0 }}
                  exit={{ scale: 0, x: 20 }}
                  transition={{ delay: 0.2 }}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleButtonClick}
                    className="glass-morphism border-white/30 text-white hover:bg-white/20 whitespace-nowrap"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Text Chat
                  </Button>
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0, x: 20 }}
                  animate={{ scale: 1, x: 0 }}
                  exit={{ scale: 0, x: 20 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleButtonClick}
                  >
                    <Languages className="h-4 w-4 mr-2" />
                    मल्टी-लैंग्वेज
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Enhanced floating tooltip */}
          <AnimatePresence>
            {showTooltip && !isChatOpen && (
              <motion.div
                className="absolute bottom-full right-full mr-4 mb-2"
                initial={{ opacity: 0, x: 20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 20, y: 10 }}
                transition={{ duration: 0.5 }}
              >
                <div className="glass-card p-4 max-w-xs shadow-ai-glow border border-white/20">
                  <div className="flex items-start space-x-3">
                    <AIAvatar size="sm" isOnline={true} />
                  
                  </div>
                  
                  {/* Arrow pointing to button */}
                  </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Status indicators */}
          <div className="absolute -top-1 -left-1 flex space-x-1">
            <motion.div
              className="w-3 h-3 bg-green-500 rounded-full border border-white/30"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="w-2 h-2 bg-blue-500 rounded-full border border-white/30"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            />
          </div>

          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-ai opacity-30"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.3, 0, 0.3]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Quick stats */}
      
      </div>
      
      <EnhancedBaaniChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default VoiceAIButton;