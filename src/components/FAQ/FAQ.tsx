import { useState } from 'react';
import styles from './FAQ.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.98,
      rotateX: -5
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const answerVariants = {
    hidden: { 
      height: 0,
      opacity: 0,
      rotateX: -5,
      scale: 0.98
    },
    visible: {
      height: 'auto',
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.25,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: {
      height: 0,
      opacity: 0,
      rotateX: -5,
      scale: 0.98,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const plusVariants = {
    initial: { rotate: 0, scale: 1 },
    active: { 
      rotate: 45,
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    }
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
            delay: 0.2
          }}
          viewport={{ once: true }}
          className={styles.title}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div 
          className={styles.faqList}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={styles.faqItem}
              whileHover={{ 
                scale: 1.02,
                transition: { 
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}
            >
              <motion.button
                className={`${styles.faqQuestion} ${activeIndex === index ? styles.active : ''}`}
                onClick={() => toggleFAQ(index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{faq.question}</span>
                <motion.span
                  variants={plusVariants}
                  initial="initial"
                  animate={activeIndex === index ? "active" : "initial"}
                  className={styles.plusIcon}
                >
                  +
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    variants={answerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={styles.faqAnswer}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 