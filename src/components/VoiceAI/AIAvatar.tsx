import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import robot from "@/assets/robot.jpeg";

interface AIAvatarProps {
  isOnline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const AIAvatar: React.FC<AIAvatarProps> = ({
  isOnline = true,
  size = 'md',
  className
}) => {
  const sizeClasses = {
    sm: 'w-14 h-14',
    md: 'w-20 h-20',
    lg: 'w-28 h-28',
    xl: 'w-36 h-36'
  };

  return (
    <motion.div
      className={cn(
        'relative flex items-center justify-center aspect-square',
        sizeClasses[size],
        className
      )}
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      {/* Outer Glow with orange aura */}
      <motion.div
        className={cn(
          'rounded-full shadow-ai-glow bg-gradient-to-br from-orange-500/40 to-orange-700/20 p-[5px] flex items-center justify-center'
        )}
        whileHover={{ scale: 1.08, rotate: 1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* White circular background for the avatar */}
        <div className="rounded-full bg-white flex items-center justify-center overflow-hidden aspect-square">
          <img
            src={robot}
            alt="Bani AI Assistant"
            className="w-[90%] h-[90%] object-contain transition-transform duration-700 hover:scale-110"
            style={{
              filter:
                'drop-shadow(0 4px 10px rgba(255,120,0,0.45)) drop-shadow(0 0 15px rgba(255,150,0,0.25))',
              objectPosition: 'center top' // ensures head visible
            }}
          />
        </div>
      </motion.div>

      {/* Online Status */}
     
    </motion.div>
  );
};

export default AIAvatar;
