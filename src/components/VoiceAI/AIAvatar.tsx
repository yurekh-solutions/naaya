import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import baniRobotAvatar from '@/assets/bani-avatar.png';
import robot from "@/assets/robot.jpeg"
interface AIAvatarProps {
  isOnline?: boolean;
  isSpeaking?: boolean;
  isThinking?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const AIAvatar: React.FC<AIAvatarProps> = ({
  isOnline = true,
  isSpeaking = false,
  isThinking = false,
  size = 'md',
  className
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };



  return (
    <div className={cn('relative', className)}>
      <motion.div
        className={cn(
          sizeClasses[size],
          'rounded-full overflow-hidden bg-gradient-ai p-2 shadow-ai-glow',
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={robot}
          alt="Bani AI Assistant"
          className="w-full h-full object-cover rounded-full"
        />
        
        {/* Pulse ring for online status */}
     
      </motion.div>

      {/* Status indicator */}
    

      {/* Speaking waves animation */}
      
    </div>
  );
};

export default AIAvatar;