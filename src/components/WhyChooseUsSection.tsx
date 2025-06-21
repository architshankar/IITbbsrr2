// WhyChooseUsSection.tsx
import React from 'react';
import { LucideIcon, Users, Award, CheckCircle, Clock } from 'lucide-react';



import { Zap, Target, Rocket, Globe, Shield, Star } from 'lucide-react';
import ScrollAnimatedCards from './ScrollAnimatedCards';

export interface WhyChooseUsItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface WhyChooseUsSectionProps {
  whyChooseUs: WhyChooseUsItem[];
}

const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ whyChooseUs }) => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">INLIGHN TECH</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're committed to bridging the gap between academic learning and industry requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <item.icon size={24} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-primary-gradient text-white">
        <ScrollAnimatedCards />
      </div>
    </section>
  );
};

export default WhyChooseUsSection;