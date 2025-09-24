import React from "react";

interface RadialBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const RadialBackground: React.FC<RadialBackgroundProps> = ({ children, className = "" }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated Radial Background */}
      <div className="absolute inset-0 z-0">
        <svg
          viewBox="0 0 1440 800"
          className="absolute inset-0 w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Main background gradient */}
            <radialGradient id="mainGradient" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="hsl(280, 60%, 25%)" stopOpacity="0.8" />
              <stop offset="40%" stopColor="hsl(300, 50%, 20%)" stopOpacity="0.9" />
              <stop offset="80%" stopColor="hsl(240, 40%, 15%)" stopOpacity="0.95" />
              <stop offset="100%" stopColor="hsl(220, 30%, 8%)" stopOpacity="1" />
            </radialGradient>
            
            {/* Line gradients for different effects */}
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(280, 80%, 60%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(300, 70%, 50%)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(320, 60%, 40%)" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(260, 70%, 50%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(280, 80%, 60%)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(300, 70%, 50%)" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(240, 60%, 40%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(260, 70%, 50%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(280, 80%, 60%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Main background */}
          <rect width="100%" height="100%" fill="url(#mainGradient)" />
          
          {/* Central hub area */}
          <circle
            cx="720"
            cy="400"
            r="80"
            fill="hsl(280, 60%, 25%)"
            fillOpacity="0.8"
            className="animate-glow-pulse"
          />
          
          {/* Radiating lines - top quadrant */}
          {[...Array(12)].map((_, i) => {
            const angle = -90 + (i * 15); // Top quadrant spread
            const length = 600 + (i % 3) * 100;
            const centerX = 720;
            const centerY = 400;
            
            const endX = centerX + Math.cos((angle * Math.PI) / 180) * length;
            const endY = centerY + Math.sin((angle * Math.PI) / 180) * length;
            
            return (
              <line
                key={`top-${i}`}
                x1={centerX}
                y1={centerY}
                x2={endX}
                y2={endY}
                stroke="url(#lineGradient1)"
                strokeWidth={1.5}
                className="animate-pulse"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${4 + (i % 3)}s`,
                }}
              />
            );
          })}
          
          {/* Radiating lines - right quadrant */}
          {[...Array(12)].map((_, i) => {
            const angle = 0 + (i * 15); // Right quadrant spread
            const length = 600 + (i % 3) * 100;
            const centerX = 720;
            const centerY = 400;
            
            const endX = centerX + Math.cos((angle * Math.PI) / 180) * length;
            const endY = centerY + Math.sin((angle * Math.PI) / 180) * length;
            
            return (
              <line
                key={`right-${i}`}
                x1={centerX}
                y1={centerY}
                x2={endX}
                y2={endY}
                stroke="url(#lineGradient2)"
                strokeWidth={1.5}
                className="animate-pulse"
                style={{
                  animationDelay: `${i * 0.15}s`,
                  animationDuration: `${5 + (i % 3)}s`,
                }}
              />
            );
          })}
          
          {/* Radiating lines - bottom quadrant */}
          {[...Array(12)].map((_, i) => {
            const angle = 90 + (i * 15); // Bottom quadrant spread
            const length = 600 + (i % 3) * 100;
            const centerX = 720;
            const centerY = 400;
            
            const endX = centerX + Math.cos((angle * Math.PI) / 180) * length;
            const endY = centerY + Math.sin((angle * Math.PI) / 180) * length;
            
            return (
              <line
                key={`bottom-${i}`}
                x1={centerX}
                y1={centerY}
                x2={endX}
                y2={endY}
                stroke="url(#lineGradient3)"
                strokeWidth={1.5}
                className="animate-pulse"
                style={{
                  animationDelay: `${i * 0.25}s`,
                  animationDuration: `${6 + (i % 3)}s`,
                }}
              />
            );
          })}
          
          {/* Radiating lines - left quadrant */}
          {[...Array(12)].map((_, i) => {
            const angle = 180 + (i * 15); // Left quadrant spread
            const length = 600 + (i % 3) * 100;
            const centerX = 720;
            const centerY = 400;
            
            const endX = centerX + Math.cos((angle * Math.PI) / 180) * length;
            const endY = centerY + Math.sin((angle * Math.PI) / 180) * length;
            
            return (
              <line
                key={`left-${i}`}
                x1={centerX}
                y1={centerY}
                x2={endX}
                y2={endY}
                stroke="url(#lineGradient1)"
                strokeWidth={1.5}
                className="animate-pulse"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: `${3 + (i % 3)}s`,
                }}
              />
            );
          })}
          
          {/* Central bright core */}
          <circle
            cx="720"
            cy="400"
            r="40"
            fill="hsl(300, 80%, 70%)"
            fillOpacity="0.3"
            className="animate-glow-pulse"
          />
          
          {/* Outer glow ring */}
          <circle
            cx="720"
            cy="400"
            r="120"
            fill="none"
            stroke="hsl(280, 70%, 50%)"
            strokeWidth="2"
            strokeOpacity="0.2"
            className="animate-pulse"
            style={{ animationDuration: "3s" }}
          />
        </svg>
        
        {/* Floating light particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float-gentle"
              style={{
                width: `${1 + Math.random() * 3}px`,
                height: `${1 + Math.random() * 3}px`,
                background: `hsl(${280 + Math.random() * 40}, ${60 + Math.random() * 20}%, ${50 + Math.random() * 30}%)`,
                opacity: 0.2 + Math.random() * 0.4,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 8}s`
              }}
            />
          ))}
        </div>
        
        {/* Overlay gradient for depth */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(circle at 50% 50%, 
              hsl(300, 60%, 30%) 0%, 
              hsl(280, 50%, 20%) 30%, 
              hsl(260, 40%, 15%) 60%, 
              hsl(220, 30%, 8%) 100%)`
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

export default RadialBackground;