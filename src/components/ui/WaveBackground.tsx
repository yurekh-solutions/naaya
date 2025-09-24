import React from "react";

interface WaveBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const WaveBackground: React.FC<WaveBackgroundProps> = ({ children, className = "" }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated Wave Background */}
      <div className="absolute inset-0 z-0">
        <svg
          viewBox="0 0 1440 800"
          className="absolute inset-0 w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(15, 88%, 55%)" stopOpacity="0.3" />
              <stop offset="25%" stopColor="hsl(25, 95%, 65%)" stopOpacity="0.4" />
              <stop offset="50%" stopColor="hsl(30, 90%, 60%)" stopOpacity="0.35" />
              <stop offset="75%" stopColor="hsl(10, 85%, 45%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(15, 88%, 55%)" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(220, 25%, 12%)" stopOpacity="0.8" />
              <stop offset="30%" stopColor="hsl(15, 88%, 55%)" stopOpacity="0.4" />
              <stop offset="70%" stopColor="hsl(30, 90%, 60%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(220, 25%, 8%)" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="waveGradient3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(220, 25%, 8%)" stopOpacity="0.95" />
              <stop offset="40%" stopColor="hsl(25, 95%, 65%)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(10, 85%, 45%)" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          
          {/* Wave Layer 1 */}
          <path
            d="M0,400 C320,300 420,500 800,400 C1120,300 1300,500 1440,400 L1440,800 L0,800 Z"
            fill="url(#waveGradient1)"
            className="animate-wave"
            style={{ animationDelay: '0s', animationDuration: '8s' }}
          />
          
          {/* Wave Layer 2 */}
          <path
            d="M0,500 C240,400 480,600 720,500 C960,400 1200,600 1440,500 L1440,800 L0,800 Z"
            fill="url(#waveGradient2)"
            className="animate-wave"
            style={{ animationDelay: '-2s', animationDuration: '12s' }}
          />
          
          {/* Wave Layer 3 */}
          <path
            d="M0,600 C360,500 580,700 900,600 C1220,500 1350,700 1440,600 L1440,800 L0,800 Z"
            fill="url(#waveGradient3)"
            className="animate-wave"
            style={{ animationDelay: '-4s', animationDuration: '10s' }}
          />
        </svg>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float-gentle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default WaveBackground;