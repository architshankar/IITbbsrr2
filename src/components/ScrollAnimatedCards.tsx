
import React, { useEffect, useRef, useState } from 'react';
import { Rocket, Target, Globe, Shield, Zap, Star } from 'lucide-react';

interface CardData {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    title: 'About INLIGHN TECH',
    description: 'At INLIGHN TECH, we believe that the future of education lies in bridging the gap between academic learning and industry needs. Founded with a passion for providing meaningful and immersive learning experiences, we offer internship programs that equip students and young professionals with practical skills in Full Stack Development, Data Science, and Project Management.',
    icon: <Zap className="w-8 h-8" />,
    gradient: 'from-[#68E2E7] to-[#046DFC]',
  },
  {
    id: 2,
    title: 'Our Mission',
    description: 'To empower students and young professionals by providing immersive, real-world learning experiences through tailored internship programs. We aim to equip our participants with the practical skills and confidence they need to succeed in the fast-evolving tech industry.',
    icon: <Target className="w-8 h-8" />,
    gradient: 'from-[#046DFC] to-[#68E2E7]',
  },
  {
    id: 3,
    title: 'Our Vision',
    description: 'Our vision is to establish a global network of skilled professionals who are well-equipped to tackle the challenges of the future. We strive to create a community of like-minded individuals who share a common goal of driving innovation and progress in the tech industry.',
    icon: <Rocket className="w-8 h-8" />,
    gradient: 'from-[#68E2E7] via-[#046DFC] to-[#121A2F]',
  },
  
];

const ScrollAnimatedCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [cardOffsets, setCardOffsets] = useState<number[]>([]);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;

    const scrollStart = containerTop - viewportHeight;
    const scrollEnd = containerTop + containerHeight - viewportHeight;
    const scrollRange = scrollEnd - scrollStart;

    const scrollProgress = Math.max(0, Math.min(1, (scrollY - scrollStart) / scrollRange));

    const newOffsets = cardData.map((_, index) => {
      const delay = index * 0.08;
      const progress = Math.max(0, Math.min(1, (scrollProgress - delay) / (1 - delay)));
      return progress;
    });

    setCardOffsets(newOffsets);
  }, [scrollY]);

  const getCardTransform = (index: number, offset: number) => {
    const isMobile = windowWidth < 768;
    const isTablet = windowWidth >= 768 && windowWidth < 1024;
    const isDesktop = windowWidth >= 1024;

    // Responsive card dimensions
    const cardWidth = isMobile ? 280 : isTablet ? 300 : 320;
    const cardHeight = isMobile ? 180 : 200;
    const gridGap = isMobile ? 16 : isTablet ? 20 : 24;

    // Cards per row
    const cardsPerRow = isMobile ? 1 : isTablet ? 2 : 3;

    // Initial position - stacked on right side (responsive)
    let initialX = 0;
    if (isMobile) {
      initialX = windowWidth - 50; // Just off-screen right
    } else if (isTablet) {
      initialX = windowWidth - 100;
    } else {
      initialX = windowWidth - 150;
    }
    
    const initialY = isMobile ? 120 : isTablet ? 100 : 100;

    // Grid calculations
    const row = Math.floor(index / cardsPerRow);
    const col = index % cardsPerRow;

    const totalGridWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * gridGap);
    
    // Container width for centering
    const containerPadding = isMobile ? 24 : isTablet ? 48 : 64;
    const availableWidth = windowWidth - (containerPadding * 2);
    
    // Center the grid with slight right offset
    const rightOffset = isMobile ? 0 : isTablet ? 20 : 40;
    const gridStartX = Math.max(containerPadding, (availableWidth - totalGridWidth) / 2 + rightOffset);
    
    // Final position
    const finalX = gridStartX + (col * (cardWidth + gridGap));
    const finalY = isMobile ? 300 : isTablet ? 400 : 500;
    const finalYWithRow = finalY + (row * (cardHeight + gridGap));

    // Smooth easing
    const easeProgress = offset * offset * (3 - 2 * offset);
    const currentX = initialX + (finalX - initialX) * easeProgress;
    const currentY = initialY + (finalYWithRow - initialY) * easeProgress;

    return {
      transform: `translate(${currentX}px, ${currentY}px)`,
      opacity: Math.max(0.3, offset),
      scale: 0.7 + (0.3 * offset),
      width: cardWidth,
      height: cardHeight,
    };
  };

  return (
    <section className="min-h-[150vh] sm:min-h-[180vh] lg:min-h-[200vh] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative bg-gradient-to-br from-[#121A2F] to-[#1A1A1A] text-white overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto h-full relative">
        {/* Text Section */}
        <div className="absolute top-8 sm:top-12 lg:top-20 left-0 z-10 max-w-full sm:max-w-2xl pr-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#68E2E7] to-[#046DFC] bg-clip-text text-transparent leading-tight">
            WHO WE ARE
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#F5F5F5] leading-relaxed">
            We are a team of experienced developers and designers who are passionate about creating innovative solutions that help businesses grow and succeed. Our mission is to provide our clients with the best possible experience, and we are committed to delivering results that exceed their expectations.
          </p>
        </div>

        {/* Card Container */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          {cardData.map((card, index) => {
            const offset = cardOffsets[index] || 0;
            const style = getCardTransform(index, offset);

            return (
              <div
                key={card.id}
                className="absolute"
                style={{
                  transform: style.transform,
                  opacity: style.opacity,
                  scale: style.scale,
                  transition: 'all 0.1s ease-out',
                  transformOrigin: 'center center',
                  width: `${style.width}px`,
                  height: `${style.height}px`,
                }}
              >
                <div className={`bg-gradient-to-br ${card.gradient} p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-xl backdrop-blur-sm border border-white/20 hover:scale-105 transition-all duration-300 group h-full`}>
                  <div className="flex items-start space-x-3 sm:space-x-4 h-full">
                    <div className="p-2 sm:p-3 bg-white/25 rounded-lg sm:rounded-xl group-hover:bg-white/35 transition-colors duration-300 flex-shrink-0">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white">
                        {card.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 text-[#FFFFFF] leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-[#F5F5F5] text-xs sm:text-sm leading-relaxed line-clamp-3 opacity-95">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScrollAnimatedCards;