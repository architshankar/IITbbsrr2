
// import { motion, useInView } from 'framer-motion';
// import { useRef, useEffect, useState } from 'react';

// const AnimatedCounter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   useEffect(() => {
//     if (isInView) {
//       let startTime: number;
//       const startValue = 0;
      
//       const animateCount = (timestamp: number) => {
//         if (!startTime) startTime = timestamp;
//         const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
//         setCount(Math.floor(progress * (end - startValue) + startValue));
        
//         if (progress < 1) {
//           requestAnimationFrame(animateCount);
//         }
//       };
      
//       requestAnimationFrame(animateCount);
//     }
//   }, [isInView, end, duration]);

//   return <span ref={ref}>{count}</span>;
// };

// export const StatsSection = () => {
//   const stats = [
//     {
//       value: 5000,
//       suffix: '+',
//       label: 'Interns Enrolled',
//       description: 'Active learners in our programs',
//     },
//     {
//       value: 93,
//       suffix: '%',
//       label: 'Success Rate',
//       description: 'Students who complete programs',
//     },
//     {
//       value: 30,
//       suffix: '+',
//       label: 'Top Instructors',
//       description: 'Instructors with years of experience',
//     },
//     {
//       value: 9000,
//       suffix: '+',
//       label: 'Projects Completed',
//       description: 'Projects completed by students',
//     },
//   ];

//   return (
//     <section className="py-20 bg-navy-dark">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Our <span className="gradient-text">Impact</span>
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Numbers that speak to our commitment to excellence in tech education
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="text-center glass-effect p-8 rounded-xl hover-glow"
//             >
//               <div className="text-5xl md:text-6xl font-bold gradient-text mb-4">
//                 <AnimatedCounter end={stat.value} />
//                 {stat.suffix}
//               </div>
//               <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
//               <p className="text-gray-300 text-sm">{stat.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const AnimatedCounter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const startValue = 0;

      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

        setCount(Math.floor(progress * (end - startValue) + startValue));

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };

      requestAnimationFrame(animateCount);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

// 👇 Now accepts `stats` as a prop
export const StatsSection = ({ stats }: { stats: Array<{ value: number, suffix: string, label: string, description: string }> }) => {
  return (
    <section className="py-20 bg-navy-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak to our commitment to excellence in tech education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center glass-effect p-8 rounded-xl hover-glow"
            >
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-4">
                <AnimatedCounter end={stat.value} />
                {stat.suffix}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
              <p className="text-gray-300 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
