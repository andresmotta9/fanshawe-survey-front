import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaAngleDown } from "react-icons/fa";
import "./styles.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const faqs = [
    {
      question: "How does FanSurvey help me choose an IT program?",
      answer: "FanSurvey provides recommendations based on your preferences and interests in IT fields.",
    },
    {
      question: "Is this survey free to use?",
      answer: "Yes! FanSurvey is completely free to help students make informed decisions about their IT education.",
    },
    {
      question: "How long does the survey take?",
      answer: "The survey typically takes about 5-10 minutes to complete.",
    },
    {
      question: "What if I’m interested in multiple programs?",
      answer: "You can explore multiple options and receive recommendations for different IT programs.",
    },
  ];

  return (
    <div className="faq-container" ref={ref}>
      <h2 className="faq-title">FAQ</h2>
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          className={`faq-item ${openIndex === index ? "open" : ""}`}
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          animate={controls}
          variants={{
            visible: { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { duration: 0.6, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] } 
            },
          }}
        >
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            <span className="faq-text">{faq.question}</span>
            <span className="faq-icon">
              <FaAngleDown />
            </span>
          </button>
          {openIndex === index && <motion.div className="faq-answer">{faq.answer}</motion.div>}
        </motion.div>
      ))}
    </div>
  );
};

export default FAQ;
