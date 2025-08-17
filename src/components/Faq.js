import React, { useState } from 'react';
import './Faq.css'

const faqs = [
  {
    question: "How long will it take to get a new website?",
    answer: "Typically, it takes 4-6 weeks depending on the complexity and requirements of your website."
  },
  {
    question: "How much does a new website cost?",
    answer: "The cost varies based on features, design, and functionality. We provide custom quotes tailored to your needs."
  },
  {
    question: "Why do I need a well designed website?",
    answer: "A well-designed website builds trust, improves user experience, and helps convert visitors into customers."
  },
  {
    question: "What is responsive web design?",
    answer: "Responsive design ensures your website looks great and works well on all devices, from phones to desktops."
  },
  {
    question: "How else can you help me grow my website?",
    answer: "We offer SEO, content creation, and digital marketing services to boost your online presence."
  },
  {
    question: "What are your payment steps?",
    answer: "We usually require a deposit upfront, with the remaining balance paid upon project completion."
  },
  {
    question: "Do you offer domain registration and website hosting services?",
    answer: "Yes, we can assist you with domain registration and recommend reliable hosting providers."
  },
  {
    question: "Can you help my current site look more professional?",
    answer: "Absolutely! We offer redesign and improvement services to upgrade your existing website."
  },
  {
    question: "Do I own my website?",
    answer: "Yes, once the project is complete and paid for, the website and its content belong to you."
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-secondry-stuble jumbotron">
      <div className='faq-section'>

        <h2 className="faq-title">Frequently Asked Question</h2>
      <ul className="faq-list">
        {faqs.map(({ question, answer }, index) => (
          <li key={index} className="faq-item">
            <button
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleIndex(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              {question}
              <span className="arrow">{activeIndex === index ? '▲' : '▼'}</span>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`faq-answer ${activeIndex === index ? 'show' : ''}`}
              role="region"
              aria-hidden={activeIndex !== index}
            >
              {answer}
            </div>
          </li>
        ))}
      </ul>

      </div>
      
    </section>
  );
}

export default FAQ;
