import { useEffect, useRef } from 'react';

export const SpotlightEffect = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        const { clientX, clientY } = e;
        spotlightRef.current.style.background = `radial-gradient(circle 400px at ${clientX}px ${clientY}px, 
          hsl(var(--primary) / 0.15) 0%, 
          hsl(var(--primary-glow) / 0.1) 25%, 
          transparent 50%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Interactive Spotlight */}
      <div
        ref={spotlightRef}
        className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle 400px at 50% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%)'
        }}
      />
      
      {/* Static Shimmering Spotlights */}
      <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
        {/* Main spotlight at top */}
        <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-primary-glow/30 via-primary/20 to-transparent rounded-full animate-pulse blur-3xl" />
        
        {/* Floating shimmer spots */}
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-radial from-primary/20 to-transparent rounded-full animate-float blur-2xl" />
        <div className="absolute top-40 right-1/4 w-24 h-24 bg-gradient-radial from-accent/15 to-transparent rounded-full animate-float blur-2xl" style={{ animationDelay: '1s' }} />
        <div className="absolute top-60 left-3/4 w-20 h-20 bg-gradient-radial from-primary-glow/25 to-transparent rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }} />
        
        {/* Animated shimmer rays */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-primary-glow/50 to-transparent animate-pulse" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 rotate-45 w-1 h-24 bg-gradient-to-b from-primary/40 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -rotate-45 w-1 h-24 bg-gradient-to-b from-primary/40 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </>
  );
};