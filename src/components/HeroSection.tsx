

// src/components/HeroSection.jsx (Updated)

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Hero3D } from './Hero3D';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import {ServiceCard}  from './ServiceCard'; 
// <-- Import the new card component

// --- NEW: Demo data for the cards ---
const cardData = [
  { title: "Cybersecurity", color: "#00ffff" }, // Cyan
  { title: "Full Stack Dev", color: "#f06292" }, // Pink
  { title: "Data Science", color: "#4db6ac" },   // Teal
  { title: "Data Analysis", color: "#ffb74d" },  // Orange
];

// --- NEW: Animation variants for the card container ---
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This will animate children one by one
      delayChildren: 0.8,   // Start after the main hero text has animated in
    },
  },
};


export const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.9, 0.2]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Hero3D className="w-full h-full" />
      </div>

      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 tech-grid opacity-20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pb-40 md:pb-48">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-12" // Reduced margin-bottom to make space
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">Transform Your Career</span>
            <br />
            INLIGHN TECH
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Gain real-world experience with our immersive internship programs in{' '}
            <span className="text-secondary font-semibold">Cybersecurity</span>,{' '}
            <span className="text-secondary font-semibold">Full Stack Development</span>,{' '}
            <span className="text-secondary font-semibold">Data Science</span>, and{' '}
            <span className="text-secondary font-semibold">Data Analysis</span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center" 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/programs">
              <Button
                size="lg"
                className="bg-gradient-primary hover:bg-primary-dark text-white px-8 py-4 text-lg font-semibold hover-glow animate-pulse-glow"
              >
                Explore Internships
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary hover:text-navy px-8 py-4 text-lg font-semibold glass-effect"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* --- NEW: 3D Card Grid Section --- */}
        

      </div>

      {/* Floating Stats Section (kept as is) */}
      <motion.div
        className="absolute bottom-12 md:bottom-16 left-0 right-0 w-full overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        style={{ opacity }}
      >
        
      </motion.div>

      <motion.div
        className="absolute bottom-12 md:bottom-16 left-0 right-0 w-full overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        style={{ opacity }}
      >
        <motion.div
          className="flex gap-4 md:gap-6 justify-start items-center px-4 md:px-6 w-max"
          style={{ x }}
        >
          <div className="glass-effect px-4 md:px-6 py-3 md:py-4 rounded-lg whitespace-nowrap min-w-[160px] md:min-w-[180px] text-center flex-shrink-0">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold gradient-text mb-1">500+</div>
            <div className="text-xs md:text-sm text-gray-300">Students Enrolled</div>
          </div>
          <div className="glass-effect px-4 md:px-6 py-3 md:py-4 rounded-lg whitespace-nowrap min-w-[160px] md:min-w-[180px] text-center flex-shrink-0">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold gradient-text mb-1">95%</div>
            <div className="text-xs md:text-sm text-gray-300">Success Rate</div>
          </div>
          <div className="glass-effect px-4 md:px-6 py-3 md:py-4 rounded-lg whitespace-nowrap min-w-[160px] md:min-w-[180px] text-center flex-shrink-0">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold gradient-text mb-1">50+</div>
            <div className="text-xs md:text-sm text-gray-300">Industry Partners</div>
          </div>
          <div className="glass-effect px-4 md:px-6 py-3 md:py-4 rounded-lg whitespace-nowrap min-w-[160px] md:min-w-[180px] text-center flex-shrink-0">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold gradient-text mb-1">4</div>
            <div className="text-xs md:text-sm text-gray-300">Core Programs</div>
          </div>
          <div className="glass-effect px-4 md:px-6 py-3 md:py-4 rounded-lg whitespace-nowrap min-w-[160px] md:min-w-[180px] text-center flex-shrink-0">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold gradient-text mb-1">24/7</div>
            <div className="text-xs md:text-sm text-gray-300">Support Available</div>
          </div>
          <div className="glass-effect px-4 md:px-6 py-3 md:py-4 rounded-lg whitespace-nowrap min-w-[160px] md:min-w-[180px] text-center flex-shrink-0">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold gradient-text mb-1">100%</div>
            <div className="text-xs md:text-sm text-gray-300">Placement Assistance</div>
          </div>
        </motion.div>
      </motion.div>
      

      
    </section>
  );
};

