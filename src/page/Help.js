import React, { useState } from "react";
import "./Help.css";

const faqs = [
  {
    question: "How do I start a quiz?",
    answer: "Go to the Dashboard, click on the Quiz section, and choose a module to start.",
  },
 
  
  {
    question: "What should I do if I forget my password?",
    answer: "Click on 'Forgot Password' on the login page and follow the instructions.",
  },
  {
    question: "How can I report a bug or suggestion?",
    answer: "Use the contact form at the bottom of this page to reach us.",
  },
];

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="help-container">
      <h1 className="help-title">🆘 Help & FAQ</h1>
      <p className="help-subtitle">Find answers to common questions or contact us below.</p>

      <div className="faq-list">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`faq-item ${openIndex === idx ? "open" : ""}`}
            onClick={() => toggleFAQ(idx)}
          >
            <h3>{faq.question}</h3>
            {openIndex === idx && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>

      <div className="contact-section">
        <h2>Need More Help?</h2>
        <p>Email us at: <a href="mailto:support@cyberapp.com">support@cyberapp.com</a></p>
        <p>Or call: +91-123-456-7890</p>
      </div>
    </div>
  );
};

export default Help;
