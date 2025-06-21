
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import  {StatsSection}  from '@/components/StatsSection';
import {  StatsSection } from '@/components/StatsSection';


const About = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and methodologies to prepare students for the future.',
      icon: '🚀',
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in education and professional development.',
      icon: '⭐',
    },
    {
      title: 'Collaboration',
      description: 'We foster teamwork and knowledge sharing among students and industry partners.',
      icon: '🤝',
    },
    {
      title: 'Impact',
      description: 'We measure our success by the positive change we create in our students\' careers.',
      icon: '💡',
    },
  ];

  const statsData = [
    {
      value: 5000,
      suffix: '+',
      label: 'Interns Enrolled',
      description: 'Active learners in our programs',
    },
    {
      value: 93,
      suffix: '%',
      label: 'Success Rate',
      description: 'Students who complete programs',
    },
    {
      value: 30,
      suffix: '+',
      label: 'Top Instructors',
      description: 'Instructors with years of experience',
    },
    {
      value: 9000,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Projects completed by students',
    },
  ];


  return (
    <div className="pt-20">
      {/* Hero Section */}
      {/* <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Inlighn Tech</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We are pioneers in bridging the gap between academic learning and industry expertise, 
              empowering the next generation of tech professionals through innovative education.
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/Green-Corporate-Financial-Roadmap-Presentation-3.png"
                alt="Internship Roadmap"
                className="w-full rounded-xl shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                We Provide <span className="gradient-text">Best Industry Services</span> For You.
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                At <span className="text-secondary font-semibold">INLIGHN TECH</span>, we believe that the future of education lies in bridging the gap between academic learning and industry needs.
                Founded with a passion for providing meaningful and immersive learning experiences, we offer internship programs that equip students and young professionals with practical skills in
                <span className="text-secondary"> Cyber Security</span>,
                <span className="text-secondary"> Full Stack Development</span>,
                <span className="text-secondary"> Data Science</span>, and
                <span className="text-secondary"> Project Management</span>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To empower students and young professionals by providing immersive, real-world learning experiences through tailored internship programs. We aim to equip our participants with the practical skills and confidence they need to succeed in the fast-evolving tech industry.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We partner with industry leaders to ensure our curriculum stays current with market demands,
                giving our students a competitive edge in their career journey.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Inlighn Tech?</h3>
              <ul className="space-y-4">
                {[
                  'Industry-aligned curriculum',
                  'Hands-on project experience',
                  'Expert mentorship',
                  'Career placement support',
                  'Cutting-edge technology stack',
                  'Collaborative learning environment',
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-4" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      <StatsSection stats={statsData} />
      {/* Values Section */}
      <section className="py-20 bg-navy-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass-effect border-white/20 hover-glow h-full text-center">
                  <CardHeader>
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <CardTitle className="text-xl text-white">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
