import React from 'react';

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400/10 to-tech-blue-600/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-tech-blue-600/10 to-cyan-400/10 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-cyan-400/10 to-tech-blue-600/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-40 w-24 h-24 bg-gradient-to-r from-tech-blue-600/10 to-cyan-400/10 rounded-lg rotate-12 animate-float" style={{ animationDelay: '3s' }}></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-radial from-cyan-400/5 to-transparent rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-radial from-tech-blue-600/5 to-transparent rounded-full animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Particle grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-8 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingElements;