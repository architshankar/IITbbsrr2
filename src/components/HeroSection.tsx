// src/components/HeroSection.jsx (Updated)

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Hero3D } from "./Hero3D";

export const HeroSection = () => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const titleComponent = (
    <>
      
      <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
        Transform Your Career <br />
        <span className="text-blue-500">INLIGHN TECH</span>
      </motion.h1>
      <motion.p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
        Gain real-world experience with our immersive internship programs in Cybersecurity, Full Stack Development, Data Science, and Data Analysis
      </motion.p>
      <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a href="/#programs" className="p-3 px-8 rounded-full bg-blue-500 text-white font-bold text-lg">
          Explore Internships
        </a>
      </motion.div>
      <p className="text-gray-400 text-sm mt-2">Learn more</p>
    </>
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[80rem] flex items-center justify-center overflow-hidden p-2 md:p-20 bg-black"
    >
      <div className="absolute inset-0 z-0">
        <Hero3D className="w-full h-full" />
      </div>
      <div className="absolute inset-0 tech-grid opacity-20" />

      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <motion.div
          style={{
            translateY: translate,
          }}
          className="div max-w-5xl mx-auto text-center"
        >
          {titleComponent}
        </motion.div>
        <motion.div
          style={{
            rotateX: rotate,
            scale,
            boxShadow:
              "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
          }}
          className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
        >
          <div className="h-full w-full overflow-hidden rounded-2xl bg-zinc-900">
            <div className="flex items-center justify-between px-4 py-3 bg-gray-800/50 rounded-t-xl">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm">N</div>
                    <span className="text-gray-400 text-sm">Gain real Life experience</span>
                    <button className="text-blue-500 text-sm font-semibold">Connect domain</button>
                </div>
              
            </div>
            <div className="bg-zinc-900">
                <img
                  src="/lovable-uploads/f9c7bc08-c9b0-4807-9211-52bdf759d5a9.png"
                  alt="hero"
                  className="w-full h-full object-cover"
                />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

