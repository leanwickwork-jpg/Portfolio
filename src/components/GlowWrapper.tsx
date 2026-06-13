import React, { useRef, useState, useEffect } from 'react';

interface GlowWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  glowSize?: number;
  glowOpacity?: number;
  enableTilt?: boolean;
  tiltMax?: number;
}

export default function GlowWrapper({
  children,
  className = '',
  glowColor = 'rgba(59, 130, 246, 0.15)', // Blue accent glow by default
  glowSize = 400,
  glowOpacity = 1,
  enableTilt = true,
  tiltMax = 3, // Very subtle, professional tilt
  ...props
}: GlowWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg)');
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Disable on touch screens to ensure optimal scroll performance and usability
    const checkMediaQuery = () => {
      setIsMobile('ontouchstart' in window || window.innerWidth < 768);
    };
    checkMediaQuery();
    window.addEventListener('resize', checkMediaQuery);
    return () => window.removeEventListener('resize', checkMediaQuery);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCoords({ x, y });

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      // Calculate rotation based on cursor distance from center
      const rotateX = ((centerY - y) / centerY) * tiltMax;
      const rotateY = ((x - centerX) / centerX) * tiltMax;
      setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`);
    }
  };

  const handleMouseEnter = () => {
    if (isMobile) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: !isMobile ? transform : undefined,
        transition: !isHovered ? 'transform 0.5s ease-out, box-shadow 0.5s ease-out' : 'transform 0.1s ease-out, box-shadow 0.1s ease-out',
        willChange: 'transform',
      }}
      {...props}
    >
      {/* Background radial tracking glow */}
      {!isMobile && isHovered && (
        <div
          className="absolute pointer-events-none z-0 rounded-inherit transition-opacity duration-300"
          style={{
            inset: -1,
            opacity: glowOpacity,
            background: `radial-gradient(${glowSize}px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
          }}
        />
      )}
      
      {/* Structural Inner content */}
      <div className="relative z-10 w-full h-full rounded-inherit">
        {children}
      </div>
    </div>
  );
}
