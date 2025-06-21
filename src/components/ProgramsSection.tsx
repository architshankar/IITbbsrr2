
// import { motion } from 'framer-motion';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Link } from 'react-router-dom';

// export const ProgramsSection = () => {
//   const programs = [
//     {
//       title: 'Cybersecurity',
//       description: 'Master the art of digital protection with hands-on experience in threat detection, ethical hacking, and security architecture.',
//       icon: '🛡️',
//       color: 'from-red-500 to-orange-500',
//       features: ['Ethical Hacking', 'Network Security', 'Incident Response', 'Risk Assessment'],
//     },
//     {
//       title: 'Full Stack Development',
//       description: 'Build modern web applications from front-end to back-end with the latest technologies and frameworks.',
//       icon: '💻',
//       color: 'from-blue-500 to-purple-500',
//       features: ['React/Next.js', 'Node.js', 'Database Design', 'API Development'],
//     },
//     {
//       title: 'Data Science',
//       description: 'Unlock insights from complex datasets using machine learning, statistics, and advanced analytics.',
//       icon: '📊',
//       color: 'from-green-500 to-teal-500',
//       features: ['Machine Learning', 'Python/R', 'Data Visualization', 'Statistical Analysis'],
//     },
//     {
//       title: 'Data Analysis',
//       description: 'Transform raw data into actionable business insights through advanced analytical techniques.',
//       icon: '📈',
//       color: 'from-yellow-500 to-red-500',
//       features: ['SQL', 'Excel/PowerBI', 'Business Intelligence', 'Data Mining'],
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-section">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Our <span className="gradient-text">Programs</span>
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Choose from our cutting-edge internship programs designed to prepare you for the future of technology
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {programs.map((program, index) => (
//             <motion.div
//               key={program.title}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ scale: 1.05, y: -10 }}
//               className="group"
//             >
//               <Card className="glass-effect border-white/20 hover-glow h-full">
//                 <CardHeader className="text-center">
//                   <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${program.color} flex items-center justify-center text-2xl`}>
//                     {program.icon}
//                   </div>
//                   <CardTitle className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
//                     {program.title}
//                   </CardTitle>
//                   <CardDescription className="text-gray-300">
//                     {program.description}
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-2 mb-6">
//                     {program.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center text-sm text-gray-300">
//                         <span className="w-2 h-2 bg-secondary rounded-full mr-3" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                   <Link to="/programs">
//                     <Button className="w-full bg-gradient-primary hover:bg-primary-dark text-white">
//                       Learn More
//                     </Button>
//                   </Link>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };



import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Code, BarChart3, Database } from 'lucide-react';
import ScrollAnimation from './ScrollAnimations';
import FloatingElements from './FloatingElements';

const programs = [
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Master the art of digital defense with hands-on experience in ethical hacking, network security, and threat analysis.',
    duration: '12 weeks',
    projects: '8+',
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: Code,
    title: 'Full Stack Development',
    description: 'Build complete web applications from frontend to backend using modern frameworks and technologies.',
    duration: '16 weeks',
    projects: '12+',
    color: 'from-blue-500 to-purple-500'
  },
  {
    icon: BarChart3,
    title: 'Data Science',
    description: 'Unlock insights from data using machine learning, statistical analysis, and predictive modeling.',
    duration: '14 weeks',
    projects: '10+',
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: Database,
    title: 'Data Analysis',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization techniques.',
    duration: '10 weeks',
    projects: '6+',
    color: 'from-yellow-500 to-orange-500'
  }
];

const ProgramsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your <span className="bg-gradient-tech bg-clip-text text-transparent">Path</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive internship programs designed to launch your career in the most in-demand tech fields.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <ScrollAnimation 
              key={program.title}
              animation="slideInUp"
              delay={index * 150}
            >
              <div className="group bg-gradient-to-br from-navy-800/50 to-charcoal-800/50 backdrop-blur-sm rounded-2xl p-8 hover-lift border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{program.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{program.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-400 mb-6">
                  <span>Duration: {program.duration}</span>
                  <span>Projects: {program.projects}</span>
                </div>
                <Link
                  to="/programs"
                  className="inline-flex items-center text-cyan-400 hover:text-white font-medium group-hover:translate-x-1 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
