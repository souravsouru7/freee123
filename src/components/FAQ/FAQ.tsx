import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.scss';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-us');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqItems: FAQItem[] = [
    {
      question: "What types of tires do you offer?",
      answer: "We provide a wide selection of car tires, SUV tires, and truck tires from leading global brands. Whether you need high-performance, off-road, or heavy-duty tires, we have the right fit for your needs."
    },
    {
      question: "Do you sell vehicle outfits and accessories?",
      answer: "Yes! Along with tires, we offer a variety of vehicle outfits and accessories to upgrade both the look and functionality of your car or truck."
    },
    {
      question: "Can you help me choose the right tires for my vehicle?",
      answer: "Of course! Our experienced team will help you select the ideal tires based on your vehicle type, driving style, and budget to ensure maximum performance and safety."
    },
    {
      question: "Do your tires come with a warranty?",
      answer: "Yes, most of our tires come with a manufacturer-backed warranty. Specific warranty details depend on the brand and model, and our team will explain everything clearly when you make your purchase."
    },
    {
      question: "Do you offer installation or fitting services?",
      answer: "We specialize in tire trading and outfit supply. However, we can recommend trusted partners nearby for professional installation services to get you safely back on the road."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      {/* Background Elements */}
      <div className="background-elements">
        <div className="gradient-bg"></div>
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#DC2626] opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#DC2626] opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="faq-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="faq-header"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="faq-badge"
          >
            FAQ
          </motion.span>
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our products and services</p>
        </motion.div>

        <div className="faq-grid">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="faq-item"
            >
              <div className="faq-card"></div>
              <div className="faq-card-hover"></div>
              <div className="faq-content">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="faq-button"
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="faq-icon"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.span
                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        +
                      </motion.span>
                    </motion.div>
                    <h3>{item.question}</h3>
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="faq-answer"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="faq-cta"
        >
          <p>Still have questions? We're here to help!</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button"
            onClick={scrollToContact}
          >
            <span className="relative z-10">Contact Support</span>
            <motion.div
              className="button-gradient"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 