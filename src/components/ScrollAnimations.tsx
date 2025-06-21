import React, { useEffect, useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInUp' | 'rotateIn';
  delay?: number;
  className?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0,
  className = '' 
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  const animationClasses = {
    fadeInUp: 'opacity-0 translate-y-8 transition-all duration-700 ease-out',
    fadeInLeft: 'opacity-0 -translate-x-8 transition-all duration-700 ease-out',
    fadeInRight: 'opacity-0 translate-x-8 transition-all duration-700 ease-out',
    scaleIn: 'opacity-0 scale-90 transition-all duration-700 ease-out',
    slideInUp: 'opacity-0 translate-y-12 transition-all duration-800 ease-out',
    rotateIn: 'opacity-0 rotate-12 scale-95 transition-all duration-700 ease-out'
  };

  return (
    <div
      ref={elementRef}
      className={`${animationClasses[animation]} ${className}`}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;