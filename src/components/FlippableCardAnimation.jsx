// src/components/FlippableCardAnimation.jsx
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ServiceCard } from './ServiceCard';

// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    id: 'strategy',
    frontTitle: 'Strategy',
    color: '#D8BFD8', // Light purple
    backItems: ['Visual Research', 'Mitbewerber Analyse', 'Wireframes', 'Content Mapping', 'User Flow', 'Konzepte'],
  },
  {
    id: 'design',
    frontTitle: 'Design',
    color: '#FFD1DC', // Light pink
    backItems: ['Unternehmenswebsites', 'Marketing Websites', 'Design System', 'Animation', 'Design Support', 'Barrierefreies Design'],
  },
  {
    id: 'build',
    frontTitle: 'Build',
    color: '#FFDEAD', // Light yellow
    backItems: ['Webflow Entwicklung', 'Web Animation', 'Webflow CMS', 'Barrierefreie Entwicklung', 'Technisches SEO', 'Frontend Support'],
  },
];

export const FlippableCardAnimation = () => {
  const containerRef = useRef(null);
  // Create a ref for each card using an object
  const cardRefs = useRef({});

  useGSAP(
    () => {
      const cards = cardData.map(card => cardRefs.current[card.id]);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: '+=3000', // Give the animation 3000px of scroll distance
          // markers: true, // Uncomment for debugging
        },
      });
      
      // --- Animation Timeline ---
      
      // STAGE 1: Fan Out the Cards
      tl.to(
        cards[0], // Back card
        { x: '-20%', rotateY: -15, rotateZ: -5 },
        '<' // Start at the same time as the next animation
      )
      .to(
        cards[1], // Middle card
        { y: '-5%' },
        '<'
      )
      .to(
        cards[2], // Front card
        { x: '20%', rotateY: 15, rotateZ: 5 },
        '<'
      );
      
      // STAGE 2: Flatten and Align Side-by-Side
      tl.to(
        cards,
        {
          y: '5%', // Align vertically
          rotateY: 0,
          rotateZ: 0,
        },
        'align' // A label for this animation point
      )
      .to(
        cards[0],
        { x: '-110%' },
        'align'
      )
      .to(
        cards[1],
        { x: '0%' },
        'align'
      )
      .to(
        cards[2],
        { x: '110%' },
        'align'
      );
      
      // STAGE 3: Flip the Cards
      tl.to(cards.map(card => card.querySelector('.transform-style-3d')), {
        rotateY: -180,
        stagger: 0.15, // Flip them one after another
      });

    }, { scope: containerRef }
  );

  return (
    // This container provides the scroll height needed for the pinned animation
    <div className="min-h-[400vh] bg-[#F5F0E6]"> 
      <div ref={containerRef} className="h-screen w-full overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          {cardData.map((card) => (
            <ServiceCard 
              key={card.id} 
              card={card}
              ref={el => (cardRefs.current[card.id] = el)} // Assign ref to the object
            />
          ))}
        </div>
      </div>
    </div>
  );
};