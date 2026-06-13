import { useEffect, useState, useRef } from 'react';

interface TextScrambleProps {
  text: string;
  duration?: number;
  delay?: number;
  scrambleSpeed?: number;
  className?: string;
  triggerOnHover?: boolean;
}

export default function TextScramble({
  text,
  duration = 0.8,
  delay = 0,
  scrambleSpeed = 30,
  className = '',
  triggerOnHover = true,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const isAnimating = useRef(false);
  const hoverTriggered = useRef(false);

  const chars = 'A_X+-\\/*[]{}•_@#$%^&012XYZ';

  const doScramble = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    let frame = 0;
    const totalFrames = Math.floor((duration * 1000) / scrambleSpeed);
    const textLength = text.length;

    const interval = setInterval(() => {
      frame++;
      
      const progress = frame / totalFrames;
      // Calculate how many characters we should resolve
      const resolvedCharsCount = Math.floor(textLength * progress);

      const generated = text
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index < resolvedCharsCount) {
            return text[index];
          }
          // Mix scrambled characters
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      setDisplayText(generated);

      if (frame >= totalFrames) {
        clearInterval(interval);
        setDisplayText(text);
        isAnimating.current = false;
      }
    }, scrambleSpeed);
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (delay > 0) {
      timeout = setTimeout(() => {
        doScramble();
      }, delay * 1000);
    } else {
      doScramble();
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [text]);

  const handleMouseEnter = () => {
    if (triggerOnHover && !isAnimating.current) {
      doScramble();
    }
  };

  return (
    <span 
      className={`inline-block font-mono select-none cursor-default transition-all ${className}`} 
      onMouseEnter={handleMouseEnter}
    >
      {displayText}
    </span>
  );
}
