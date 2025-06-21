// const FAQ = () => (
//   <section className="min-h-screen bg-navy-dark text-gray-300 px-6 py-20">
//     <div className="container mx-auto max-w-4xl">
//       <h1 className="text-4xl font-bold gradient-text mb-6">FAQ's</h1>
//       <p className="text-lg leading-relaxed">
//         Frequently asked questions about our programs and services.
//       </p>
//     </div>
//   </section>
// );
// export default FAQ;


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What makes Inlighn Tech different from other learning platforms?",
    answer:
      "Inlighn Tech offers a unique blend of interactive learning, real-world projects, and industry insights.",
  },
  {
    question: "How can I register for an internship?",
    answer:
      "Go to the Internships section and click on Apply Now.",
  },
  {
    question: "After filling out the registration form, whom should I contact?",
    answer:
      "Once you complete your registration, you will receive a WhatsApp group invitation for your batch, where further updates will be shared. You can also contact us via WhatsApp at 9368842663.",
  },
  {
    question: "What is the project submission deadline?",
    answer:
      "Deadlines vary by program, but you will be informed of the timeline via email or your internship dashboard.",
  },
  {
    question:
      "Is it mandatory to submit a project only from the available options on the portal?",
    answer:
      "No. While we provide recommended projects, you are free to submit your own project idea after approval from your mentor.",
  },
  {
    question: "How can I proceed with signing up at Inlighn Tech?",
    answer:
      "Visit our website, choose a program, and complete the sign-up and registration process. You will receive further instructions via email.",
  },
  {
    question:
      "Can I earn a certificate after completing an internship at Inlighn Tech?",
    answer:
      "Yes, on successful completion of the internship and project, you’ll receive an official certificate.",
  },
  {
    question: "Can I interact with internship mentors for guidance?",
    answer:
      "Yes, each participant is assigned a mentor and provided with access to communication channels for regular guidance and feedback.",
  },
  {
    question:
      "What is the difference between a completion letter and an experience letter?",
    answer:
      "A completion letter confirms your participation and project completion. An experience letter includes performance-based feedback and a detailed evaluation.",
  },
];

const FAQItem = ({ question, answer, isOpen, toggle }) => (
  <div
    onClick={toggle}
    className="border-b border-white/10 py-4 cursor-pointer select-none"
  >
    <div className="flex justify-between items-center">
      <h3 className="text-lg font-medium text-white">{question}</h3>
      <span className="text-secondary text-xl">{isOpen ? "−" : "+"}</span>
    </div>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-300 text-sm mt-2"
        >
          {answer}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="min-h-screen bg-navy-dark text-gray-300 px-6 py-20">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold gradient-text mb-6">FAQ's</h1>
        {/* <p className="text-lg leading-relaxed mb-10">
          Frequently asked questions about our programs and services.
        </p> */}

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
