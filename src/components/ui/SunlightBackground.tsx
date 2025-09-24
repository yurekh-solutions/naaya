import React from "react";

interface SunlightBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const SunlightBackground: React.FC<SunlightBackgroundProps> = ({ children, className = "" }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated Sunlight Background */}
      <div className="absolute inset-0 z-0">
        <svg
          viewBox="0 0 1440 800"
          className="absolute inset-0 w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Radial gradients for sunlight effect */}
            <radialGradient id="sunlightGradient1" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="hsl(30, 90%, 60%)" stopOpacity="0.6" />
              <stop offset="20%" stopColor="hsl(25, 95%, 65%)" stopOpacity="0.4" />
              <stop offset="40%" stopColor="hsl(15, 88%, 55%)" stopOpacity="0.3" />
              <stop offset="70%" stopColor="hsl(10, 85%, 45%)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(220, 25%, 12%)" stopOpacity="0.9" />
            </radialGradient>
            
            <radialGradient id="sunlightGradient2" cx="50%" cy="40%" r="80%">
              <stop offset="0%" stopColor="hsl(35, 85%, 70%)" stopOpacity="0.3" />
              <stop offset="30%" stopColor="hsl(20, 90%, 60%)" stopOpacity="0.2" />
              <stop offset="60%" stopColor="hsl(15, 88%, 55%)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="hsl(220, 25%, 8%)" stopOpacity="0.95" />
            </radialGradient>

            {/* Linear gradients for rays */}
            <linearGradient id="rayGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(30, 90%, 60%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(25, 95%, 65%)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(15, 88%, 55%)" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="rayGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(35, 85%, 70%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(20, 90%, 60%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(10, 85%, 45%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Background base */}
          <rect width="100%" height="100%" fill="url(#sunlightGradient1)" />
          
          {/* Animated rays emanating from center */}
          {[...Array(24)].map((_, i) => {
            const angle = (i * 15); // 24 rays at 15-degree intervals
            const length = 800 + (i % 3) * 200; // Varying ray lengths
            const centerX = 720; // Center point
            const centerY = 320;
            
            const endX = centerX + Math.cos((angle * Math.PI) / 180) * length;
            const endY = centerY + Math.sin((angle * Math.PI) / 180) * length;
            
            return (
              <line
                key={i}
                x1={centerX}
                y1={centerY}
                x2={endX}
                y2={endY}
                stroke={i % 2 === 0 ? "url(#rayGradient1)" : "url(#rayGradient2)"}
                strokeWidth={2 + (i % 4)}
                className="animate-pulse"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${4 + (i % 3)}s`,
                  transformOrigin: `${centerX}px ${centerY}px`
                }}
              />
            );
          })}
          
          {/* Secondary overlay for depth */}
          <rect width="100%" height="100%" fill="url(#sunlightGradient2)" />
          
          {/* Central bright spot */}
          <circle
            cx="720"
            cy="320"
            r="120"
            fill="hsl(30, 90%, 60%)"
            fillOpacity="0.2"
            className="animate-glow-pulse"
          />
          
          {/* Larger subtle glow */}
          <circle
            cx="720"
            cy="320"
            r="200"
            fill="hsl(25, 95%, 65%)"
            fillOpacity="0.1"
            className="animate-glow-pulse"
            style={{ animationDelay: "1s", animationDuration: "6s" }}
          />
        </svg>
        
        {/* Floating light particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float-gentle"
              style={{
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                background: `hsl(${25 + Math.random() * 15}, ${80 + Math.random() * 20}%, ${50 + Math.random() * 30}%)`,
                opacity: 0.3 + Math.random() * 0.4,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 6}s`
              }}
            />
          ))}
        </div>
        
        {/* Subtle animated gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `linear-gradient(135deg, 
              hsl(30, 90%, 60%) 0%, 
              hsl(25, 95%, 65%) 25%, 
              hsl(15, 88%, 55%) 50%, 
              hsl(10, 85%, 45%) 75%, 
              hsl(220, 25%, 12%) 100%)`
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SunlightBackground;