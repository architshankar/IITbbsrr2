// src/components/ServiceCard.jsx (or place it within your HeroSection file)
import { motion } from 'framer-motion';
import { SiCyberdefenders, SiCodenewbie, SiDatabricks, SiSimpleanalytics } from 'react-icons/si';

// Map icons to program titles for easy lookup
const iconMap = {
  "Cybersecurity": <SiCyberdefenders className="w-12 h-12" />,
  "Full Stack Dev": <SiCodenewbie className="w-12 h-12" />,
  "Data Science": <SiDatabricks className="w-12 h-12" />,
  "Data Analysis": <SiSimpleanalytics className="w-12 h-12" />,
};

// Animation variants for each card
const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -60 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const ServiceCard = ({ title, color }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.05,
        y: -15,
        boxShadow: `0px 25px 40px ${color}30`, // e.g., #00ffff30
        transition: { duration: 0.3 },
      }}
      className="relative w-60 h-72 rounded-xl p-6 glass-effect flex flex-col justify-between transform-style-3d cursor-pointer"
      style={{ border: `1px solid ${color}80` }} // 80 for hex alpha transparency
    >
      {/* Top Section */}
      <div className="flex justify-between items-center font-mono text-xs uppercase" style={{ color }}>
        <span>{title}</span>
        <span>▣</span>
      </div>

      {/* Visual Element (Icon) */}
      <div className="flex-grow flex items-center justify-center text-gray-300">
        {iconMap[title] || <div className="w-12 h-12 bg-secondary/20 rounded-md" />}
      </div>
      
      {/* Bottom Section */}
      <div className="font-mono text-xs text-gray-400">
        INL-101
      </div>
    </motion.div>
  );
};


