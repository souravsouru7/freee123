import { useState } from 'react';
import styles from './FAQ.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

const QuestionIcon = ({ open }: { open: boolean }) => (
  <motion.span
    className={`${styles.icon} ${open ? 'open' : ''}`}
    initial={{ rotate: 0 }}
    animate={{ rotate: open ? 180 : 0, scale: open ? 1.1 : 1 }}
    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
  >
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="11" stroke="none" fill="currentColor" opacity="0.18" />
      <path d="M12 7v6" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
      <circle cx="12" cy="16.2" r="1.2" fill="#fff" />
    </svg>
  </motion.span>
);

const HeadlineIcon = () => (
  <span className={styles.headlineIcon}>
    <svg viewBox="0 0 64 64" fill="none">
      <ellipse cx="32" cy="32" rx="30" ry="30" fill="#DC2626" opacity="0.18" />
      <path d="M32 16c-5.5 0-10 4.5-10 10h6c0-2.2 1.8-4 4-4s4 1.8 4 4c0 4-6 3.8-6 10h6c0-3.2 6-3.5 6-10 0-5.5-4.5-10-10-10z" fill="#DC2626"/>
      <circle cx="32" cy="48" r="3" fill="#DC2626" />
    </svg>
  </span>
);

const HeadlineBg = () => (
  <span className={styles.headlineBg}>
    <svg viewBox="0 0 220 110" fill="none">
      <path d="M0,80 Q60,20 110,80 T220,80 Q180,110 110,100 Q40,90 0,80" fill="#ef4444" opacity="0.13"/>
    </svg>
  </span>
);

const PlusIcon = ({ open }: { open: boolean }) => (
  <motion.span
    className={styles.plusIcon}
    initial={{ rotate: 0 }}
    animate={{ rotate: open ? 45 : 0 }}
    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    aria-label={open ? 'Collapse' : 'Expand'}
    role="img"
  >
    {open ? '–' : '+'}
  </motion.span>
);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98, rotateX: -5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const answerVariants = {
    hidden: { height: 0, opacity: 0, y: 20 },
    visible: {
      height: 'auto',
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] }
    },
    exit: {
      height: 0,
      opacity: 0,
      y: 20,
      transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.faqHeader}>
        <HeadlineBg />
        <HeadlineIcon />
        <div className={styles.title}>Frequently Asked Questions</div>
        <div className={styles.divider}></div>
        <div className={styles.subtitle}>Find quick answers to common queries about our products and services.</div>
      </div>
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
            whileHover={{ scale: 1.03, rotateX: 2 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              className={`${styles.faqQuestion} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
            >
              <PlusIcon open={activeIndex === index} />
              <span className={styles.questionText}>{faq.question}</span>
            </button>
            <AnimatePresence initial={false}>
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
    </section>
  );
};

export default FAQ; 