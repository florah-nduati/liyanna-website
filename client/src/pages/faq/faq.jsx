import React from "react";
import "./faq.css";

const FAQs = () => {
  const faqs = [
    {
      question: "What is included in the tour packages?",
      answer:
        "Our packages include accommodation, transfers, and curated activities.",
    },
    {
      question: "Can I customize my tour?",
      answer:
        "Yes, we offer fully customizable itineraries to suit your preferences.",
    },
    {
      question: "Are there any hidden fees?",
      answer: "No, we provide transparent pricing with no hidden fees.",
    },
  ];

  return (
    <div className="faqs">
      <h1>FAQs</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
