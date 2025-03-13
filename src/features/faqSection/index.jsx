import React, { useState } from "react";
import "./styles.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    <div className="faq-container">
      <h2 className="faq-title">FAQ</h2>
      {faqs.map((faq, index) => (
        <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            <span className="faq-text">{faq.question}</span>
            <span className={`faq-icon ${openIndex === index ? "rotate" : ""}`}>&#9660;</span>
          </button>
          <div className="faq-answer">{faq.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
