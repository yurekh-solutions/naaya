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
      {/* Outer Glow with orange-reddish aura */}
      <motion.div
        className={cn(
          'rounded-full p-[5px] flex items-center justify-center',
          'bg-gradient-to-br from-orange-500/40 via-red-500/30 to-orange-700/20',
          'shadow-[0_0_20px_rgba(255,100,50,0.4),0_0_40px_rgba(255,80,0,0.3),0_0_60px_rgba(255,60,0,0.2)]'
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
                'drop-shadow(0 4px 10px rgba(255,120,0,0.45)) drop-shadow(0 0 15px rgba(255,80,0,0.25)) drop-shadow(0 0 25px rgba(255,60,0,0.2))',
              objectPosition: 'center top'
            }}
          />
        </div>
      </motion.div>

      {/* Optional: Online Status */}
     
    </motion.div>
  );
};

export default AIAvatar;
