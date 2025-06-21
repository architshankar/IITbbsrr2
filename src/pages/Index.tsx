// import { HeroSection } from '@/components/HeroSection';
// import  ProgramsSection  from '@/components/ProgramsSection';
// import { StatsSection } from '@/components/StatsSection';
// import WhyChooseUsSection, { WhyChooseUsItem } from '../components/WhyChooseUsSection';
// import  { Testimonial } from '../components/TestimonialsSection';

// const Index = () => {
//   return (
//     <div className="min-h-screen">
//       <HeroSection />
      
//       <ProgramsSection />
//       <StatsSection />
//     </div>
//   );
// };

// export default Index;

// Index.tsx
import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import ProgramsSection from '@/components/ProgramsSection';
import { StatsSection } from '@/components/StatsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import StackingCardsAnimation from '@/components/StackingCardsAnimation';
import { BookOpen, Users, Rocket, Award, Star , School  } from 'lucide-react';

const Index = () => {
  const whyChooseUs = [
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Learn from seasoned professionals who guide you through every step of your journey.',
    },
    {
      icon: BookOpen,
      title: 'Real-World Projects',
      description: 'Gain hands-on experience with real industry projects and build a portfolio that stands out.',
    },
    {
      icon: Award,
      title: 'Certified Programs',
      description: 'Complete the programs and get certified in your field to showcase your skills.',
    },
    {
      icon: School ,
      title: 'Flexible Learning',
      description: 'Do at your own pace with online programs designed to fit your schedule.',
    },
  ];

  const testimonials = [
    {
      rating: 5,
      text: 'This program helped me land my dream role in cybersecurity! The mentorship was incredibly personal and practical.',
      name: 'Arjun Mehta',
      program: 'Cybersecurity',
    },
    {
      rating: 4,
      text: 'I went from zero to deploying full-stack apps in just four months. Highly recommend for anyone serious about tech.',
      name: 'Sneha Kapoor',
      program: 'Full Stack Development',
    },
    {
      rating: 5,
      text: 'Thanks to the data science track, I cracked interviews at two startups and now work as an ML engineer.',
      name: 'Ravi Patel',
      program: 'Data Science',
    },
    {
      rating: 5,
      text: 'Excellent training, great support, and a solid foundation for data analytics roles. Loved the experience!',
      name: 'Nisha Reddy',
      program: 'Data Analysis',
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
    <div className="min-h-screen bg-gray-900 text-white">
      <HeroSection />
      <ProgramsSection />
      <StatsSection stats={statsData} />
      <StackingCardsAnimation />
      <WhyChooseUsSection whyChooseUs={whyChooseUs} />
      <TestimonialsSection testimonials={testimonials}/>
    </div>
  );
};

export default Index;
