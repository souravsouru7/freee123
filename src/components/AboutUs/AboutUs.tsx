import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import wheelImage from '../../assets/pngwing.com (1).png';
import './AboutUs.scss';

interface AboutUsProps {
  id?: string;
}

const AboutUs = ({ id }: AboutUsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  const stats = [
    { number: "2007", label: "Founded" },
    { number: "18+", label: "Years of Experience" },
    { number: "100%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Expert Support" }
  ];

  return (
    <motion.section 
      ref={containerRef}
      className="about-us"
      id={id}
      style={{ y, opacity }}
    >
      <div className="about-us__background" />
      
      <div className="about-us__content">
        <div className="about-us__left">
          <motion.h1
            className="about-us__title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ABOUT
            <br />
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              ALNSR ALDAHABI
            </motion.span>
          </motion.h1>

          <motion.p
            className="about-us__subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            Experience. Quality. Trust.
          </motion.p>

          <motion.p
            className="about-us__description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            Founded in 2006, ALNSR ALDAHABI TYRES TRADING has built a strong reputation based on our commitment to quality products, professional service, and customer satisfaction.
          </motion.p>

          <motion.p
            className="about-us__description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            Our journey started with a simple goal: to provide high-quality tires and vehicle outfits that meet the demanding needs of drivers and businesses in the UAE and beyond. Today, we proudly offer a comprehensive selection of trusted brands, along with expert advice to help you make the right choice for your vehicle.
          </motion.p>

          <motion.div
            className="about-us__stats"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="about-us__stats-item"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.1 }}
              >
                <div className="number">{stat.number}</div>
                <div className="label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="about-us__cards"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="about-us__cards-item"
              whileHover={{ scale: 1.05 }}
            >
              <h3>Our Commitment</h3>
              <p>
                We are dedicated to providing the highest quality products and professional service to ensure complete customer satisfaction.
              </p>
            </motion.div>
            <motion.div
              className="about-us__cards-item"
              whileHover={{ scale: 1.05 }}
            >
              <h3>Our Expertise</h3>
              <p>
                With years of experience, we offer expert advice and a comprehensive selection of trusted brands to meet your vehicle's needs.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="about-us__right">
          <motion.div
            className="about-us__wheel"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
          >
            <motion.img
              src={wheelImage}
              alt="Premium Performance Tyres"
              animate={{
                rotateZ: [0, 360],
                scale: [1, 1.08, 1]
              }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: 'easeInOut',
                repeatType: 'loop'
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs; 