import React from 'react';
import { Shield, Code, BarChart3, Database, Clock, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingElements from '../components/FloatingElements';
import ScrollAnimation from '../components/ScrollAnimations';
import { motion } from 'framer-motion';


const Programs = () => {
  const programs = [
    {
      id: 'cybersecurity',
      icon: Shield,
      title: 'Cybersecurity Internship',
      subtitle: 'Become a Digital Guardian',
      description: 'Master the art of digital defense through hands-on experience with real-world security challenges, ethical hacking, and threat analysis.',
      duration: '12 weeks',
      level: 'Beginner to Advanced',
      projects: '8+ Real Projects',
      color: 'from-red-500 to-orange-500',
      bgColor: 'from-red-500/10 to-orange-500/10',
      skills: [
        'Ethical Hacking & Penetration Testing',
        'Network Security & Firewall Management',
        'Incident Response & Forensics',
        'Security Risk Assessment',
        'Compliance & Governance',
        'Cryptography & Encryption'
      ],
      outcomes: [
        'CompTIA Security+ Certification Prep',
        'Real-world Security Assessment Projects',
        'Job placement assistance',
        'Industry mentor assignment'
      ],
      careerPaths: [
        'Cybersecurity Analyst',
        'Security Consultant',
        'Penetration Tester',
        'Security Architect'
      ]
    },
    {
      id: 'fullstack',
      icon: Code,
      title: 'Full Stack Development',
      subtitle: 'Build Complete Applications',
      description: 'Create end-to-end web applications using modern frameworks, databases, and cloud technologies. From concept to deployment.',
      duration: '16 weeks',
      level: 'Beginner to Advanced',
      projects: '12+ Full Applications',
      color: 'from-blue-500 to-purple-500',
      bgColor: 'from-blue-500/10 to-purple-500/10',
      skills: [
        'React, Vue.js, Angular Development',
        'Node.js, Python, Java Backend',
        'Database Design & Management',
        'API Development & Integration',
        'Cloud Deployment (AWS, Azure)',
        'DevOps & CI/CD Pipelines'
      ],
      outcomes: [
        'Portfolio of 12+ Live Applications',
        'GitHub Profile Enhancement',
        'Technical Interview Preparation',
        'Direct employer connections'
      ],
      careerPaths: [
        'Frontend Developer',
        'Backend Developer',
        'Full Stack Engineer',
        'DevOps Engineer'
      ]
    },
    {
      id: 'datascience',
      icon: BarChart3,
      title: 'Data Science Internship',
      subtitle: 'Unlock Data Insights',
      description: 'Transform raw data into actionable insights using machine learning, statistical analysis, and advanced visualization techniques.',
      duration: '14 weeks',
      level: 'Intermediate to Advanced',
      projects: '10+ ML Projects',
      color: 'from-green-500 to-teal-500',
      bgColor: 'from-green-500/10 to-teal-500/10',
      skills: [
        'Python, R, SQL Programming',
        'Machine Learning & AI',
        'Statistical Analysis & Modeling',
        'Data Visualization (Tableau, PowerBI)',
        'Big Data Technologies (Spark, Hadoop)',
        'MLOps & Model Deployment'
      ],
      outcomes: [
        'Kaggle Competition Participation',
        'Published Research Projects',
        'Industry Dataset Experience',
        'ML Model Production Deployment'
      ],
      careerPaths: [
        'Data Scientist',
        'ML Engineer',
        'Research Analyst',
        'AI Specialist'
      ]
    },
    {
      id: 'dataanalysis',
      icon: Database,
      title: 'Data Analysis Program',
      subtitle: 'Master Data Analytics',
      description: 'Learn to extract meaningful insights from complex datasets using advanced analytics tools and business intelligence platforms.',
      duration: '10 weeks',
      level: 'Beginner to Intermediate',
      projects: '6+ Analysis Projects',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-500/10 to-orange-500/10',
      skills: [
        'Excel Advanced Functions & VBA',
        'SQL Database Querying',
        'Python for Data Analysis',
        'Tableau & Power BI Mastery',
        'Statistical Methods',
        'Business Intelligence Tools'
      ],
      outcomes: [
        'Professional Analytics Portfolio',
        'Tableau Desktop Certification',
        'Business Case Studies',
        'Client Presentation Skills'
      ],
      careerPaths: [
        'Data Analyst',
        'Business Analyst',
        'Market Research Analyst',
        'Operations Analyst'
      ]
    }
  ];

  const features = [
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Learn from industry professionals currently working at top tech companies.'
    },
    {
      icon: Award,
      title: 'Industry Certification',
      description: 'Earn recognized certifications that employers value and trust.'
    },
    {
      icon: CheckCircle,
      title: 'Job Placement',
      description: '95% job placement rate with our extensive network of partner companies.'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Part-time and full-time options to fit your current commitments.'
    }
  ];

  return (
    <div className="relative pt-16">
      <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="relative pt-16"
  >
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Our <span className="bg-gradient-tech bg-clip-text text-transparent">Programs</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Choose from our comprehensive internship programs designed to transform your career. 
            Each program combines hands-on projects, industry mentorship, and job placement support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <ScrollAnimation
                key={feature.title}
                animation="fadeInUp"
                delay={index * 100}
              >
                <div
                  className="bg-gradient-to-br from-navy-800/30 to-charcoal-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                >
                  <feature.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {programs.map((program, index) => (
            <ScrollAnimation
              key={program.id}
              animation="fadeInUp"
              delay={index * 200}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Program Details */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center`}>
                      <program.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">{program.title}</h2>
                      <p className="text-cyan-400 font-medium">{program.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">{program.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-gradient-to-br from-navy-800/50 to-charcoal-800/50 rounded-lg p-4 text-center">
                      <Clock className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                      <div className="text-white font-semibold text-sm">{program.duration}</div>
                    </div>
                    <div className="bg-gradient-to-br from-navy-800/50 to-charcoal-800/50 rounded-lg p-4 text-center">
                      <Users className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                      <div className="text-white font-semibold text-sm">{program.level}</div>
                    </div>
                    <div className="bg-gradient-to-br from-navy-800/50 to-charcoal-800/50 rounded-lg p-4 text-center">
                      <Award className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                      <div className="text-white font-semibold text-sm">{program.projects}</div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-white font-semibold mb-3">Skills You'll Master:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {program.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-3">Program Outcomes:</h3>
                      <div className="space-y-2">
                        {program.outcomes.map((outcome, outcomeIndex) => (
                          <div key={outcomeIndex} className="flex items-center space-x-2">
                            <ArrowRight className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link
                      to="/contact"
                      className="bg-gradient-tech text-white px-8 py-3 rounded-lg font-semibold hover:shadow-2xl hover:shadow-cyan-400/25 transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center space-x-2"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                {/* Program Visual */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className={`relative bg-gradient-to-br ${program.bgColor} rounded-2xl p-8 border border-gray-700/50`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-tech-blue-600/5 rounded-2xl"></div>
                    <div className="relative z-10">
                      <h3 className="text-white font-semibold mb-6">Career Paths:</h3>
                      <div className="space-y-4">
                        {program.careerPaths.map((path, pathIndex) => (
                          <div
                            key={pathIndex}
                            className="bg-gradient-to-r from-navy-800/50 to-charcoal-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/30"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-white font-medium">{path}</span>
                              <div className="text-cyan-400 text-sm">High Demand</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 p-6 bg-gradient-to-r from-cyan-600/10 to-tech-blue-600/10 rounded-lg border border-cyan-400/20">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white mb-2">95%</div>
                          <div className="text-cyan-400 text-sm">Job Placement Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-navy-800/30 to-charcoal-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Application Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our programs in four simple steps. We make it easy to start your tech career transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Apply Online', description: 'Submit your application and tell us about your goals.' },
              { step: '02', title: 'Interview', description: 'Meet with our team to discuss your fit for the program.' },
              { step: '03', title: 'Enrollment', description: 'Complete enrollment and get access to pre-course materials.' },
              { step: '04', title: 'Start Learning', description: 'Begin your intensive learning journey with expert mentors.' }
            ].map((item, index) => (
              <ScrollAnimation
                key={item.step}
                animation="fadeInUp"
                delay={index * 150}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-tech rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                  {index < 3 && (
                    <ArrowRight className="w-6 h-6 text-cyan-400 mx-auto mt-6 hidden md:block" />
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Don't wait to start your journey in tech. Our next cohort begins soon, and spots are limited. 
            Apply today and take the first step toward your dream career.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-tech text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-400/25 transform hover:-translate-y-1 transition-all duration-300"
            >
              Apply to All Programs
            </Link>
            <Link
              to="/about"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
    </div>
  );
};

export default Programs;
