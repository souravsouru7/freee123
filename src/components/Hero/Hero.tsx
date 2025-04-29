import { motion, useAnimation, useScroll, useTransform, useMotionValue, useVelocity } from 'framer-motion';
import React, { useRef, useEffect } from 'react';
import wheelImage from '/assets/pngegg (79).png';
import logoImage from '../../assets/Alnsr Aldahabi Tyre Trading Logo- White.png';
import styles from './Hero.module.scss';

const Hero = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseVelocityX = useVelocity(mouseX);

  const tyreScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);
  const tyreOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const tyreY = useTransform(scrollYProgress, [0, 0.5], [0, -120]);
  const tyreRotate = useTransform(mouseVelocityX, [-1000, 0, 1000], [-30, 0, 30]);

  const headlineY = useTransform(scrollYProgress, [0, 0.4], [0, -80]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  useEffect(() => {
    controls.start({
      rotateY: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    });
  }, [controls]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = cardRef.current;
    const wheel = wheelRef.current;
    if (!card || !wheel) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    mouseX.set(x);
    mouseY.set(y);

    const rotateX = y / 20;
    const rotateY = -x / 20;
    
    card.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateZ(20px)`;
    wheel.style.transform = `perspective(1000px) rotateY(${rotateY * 1.5}deg) rotateX(${rotateX * 1.5}deg) translateZ(30px)`;
    
    document.querySelectorAll('.hero__3d-shape').forEach((el, i) => {
      const depth = i * 10;
      const scale = 1 + i * 0.05;
      (el as HTMLElement).style.transform = `translate3d(${-x / (20 + i * 5)}px, ${y / (25 + i * 5)}px, ${depth}px) scale(${scale})`;
    });
  };

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0)';
    if (wheelRef.current) wheelRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0)';
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.section 
      ref={containerRef}
      className={styles.hero__container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Tire image as background */}
      <div className={styles.hero__background_image}>
        <img src={wheelImage} alt="ALNSR ALDAHABI TYRES" className={styles.hero__background_wheel} />
        <div className={styles.hero__background_overlay}></div>
      </div>
      {/* Content wrapper */}
      <div className={styles.hero__content_wrapper}>
        <div className={styles.hero__text_content}>
          {/* Mobile-only logo at the very top */}
          <div className={styles.hero__logo_mobile}>
            <img src={logoImage} alt="ALNSR ALDAHABI TYRES" className={styles.hero__logo} />
          </div>
          {/* 3D Background Shapes */}
          <div className={styles.hero__3d_shapes}>
            <motion.svg 
              className={`${styles.hero__3d_shape} ${styles.hero__3d_cube}`}
              viewBox="0 0 60 60"
              animate={{
                y: [0, 20, 0],
                rotate: [0, 5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <rect x="10" y="10" width="40" height="40" rx="8" fill="#dc2626" opacity="0.18" />
            </motion.svg>
            <motion.svg 
              className={`${styles.hero__3d_shape} ${styles.hero__3d_sphere}`}
              viewBox="0 0 60 60"
              animate={{
                y: [0, -20, 0],
                rotate: [0, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <circle cx="30" cy="30" r="24" fill="#fff" opacity="0.10" />
            </motion.svg>
            <motion.svg 
              className={`${styles.hero__3d_shape} ${styles.hero__3d_poly}`}
              viewBox="0 0 60 60"
              animate={{
                y: [0, 15, 0],
                rotate: [0, 3, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <polygon points="30,8 52,52 8,52" fill="#ef4444" opacity="0.13" />
            </motion.svg>
            <motion.svg 
              className={`${styles.hero__3d_shape} ${styles.hero__3d_star}`}
              viewBox="0 0 60 60"
              animate={{
                y: [0, -15, 0],
                rotate: [0, -3, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <polygon points="30,5 36,24 56,24 39,36 45,55 30,43 15,55 21,36 4,24 24,24" fill="#fff" opacity="0.08" />
            </motion.svg>
            <motion.svg 
              className={`${styles.hero__3d_shape} ${styles.hero__3d_ring}`}
              viewBox="0 0 60 60"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <circle cx="30" cy="30" r="26" stroke="#dc2626" strokeWidth="4" fill="none" opacity="0.10" />
            </motion.svg>
          </div>

          {/* Floating SVG shapes */}
          <motion.svg 
            className={`${styles.hero__decor} ${styles.hero__decor_circle}`}
            viewBox="0 0 60 60"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <circle cx="30" cy="30" r="28" stroke="#fff" strokeWidth="3" fill="none" />
          </motion.svg>
          
          <motion.svg 
            className={`${styles.hero__decor} ${styles.hero__decor_triangle}`}
            viewBox="0 0 48 48"
            animate={{
              rotate: [0, -360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <polygon points="24,4 44,44 4,44" fill="#DC2626" />
          </motion.svg>

          <div className={styles.hero__gradient}></div>

          <motion.div 
            className={styles.hero__content} 
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.hero__wheel_container}>
              <motion.div
                ref={wheelRef}
                className={styles.hero__wheel}
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
                style={{ 
                  scale: tyreScale, 
                  opacity: tyreOpacity, 
                  y: tyreY,
                  rotate: tyreRotate
                }}
              >
                <motion.img
                  src={wheelImage}
                  alt="ALNSR ALDAHABI TYRES"
                  className={styles.hero__wheel_image}
                  animate={{
                    rotateZ: [0, 360],
                    rotateX: [0, 15, 0, -15, 0],
                    y: [0, -30, 0, 30, 0],
                    scale: [1, 1.08, 1]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 12,
                    ease: 'easeInOut',
                    repeatType: 'loop'
                  }}
                  whileHover={{
                    scale: 1.13,
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
            </div>

            <div className={styles.hero__text_container}>
              <div className={styles.hero__text_wrapper}>
                <motion.div style={{ y: headlineY, opacity: headlineOpacity }}>
                  <motion.div
                    className={styles.hero__logo_container + ' ' + styles.hero__logo_desktop}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <img 
                      src={logoImage} 
                      alt="ALNSR ALDAHABI TYRES" 
                      className={styles.hero__logo}
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  className={styles.hero__description}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  Your Trusted Partner in Quality Tires and Vehicle Outfits Since 2006
                </motion.div>

                <motion.div
                  className={styles.hero__location_label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  LOCATION
                </motion.div>

                <motion.div
                  className={styles.hero__location}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.6, type: 'spring', stiffness: 100 }}
                >
                  UAE
                </motion.div>

                <motion.div
                  className={styles.hero__year}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8 }}
                >
                  Since 2006
                </motion.div>

                <div className={styles.hero__buttons}>
                  <motion.button
                    className={`${styles.hero__button} ${styles.hero__button_primary}`}
                    whileHover={{ scale: 1.12, boxShadow: '0 0 30px #DC2626, 0 0 60px #DC2626' }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    onClick={() => {
                      const contactSection = document.getElementById('contact-us');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    GET QUOTE
                  </motion.button>

                  <motion.button
                    className={`${styles.hero__button} ${styles.hero__button_secondary}`}
                    whileHover={{ scale: 1.12, boxShadow: '0 0 30px #fff, 0 0 60px #fff' }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    onClick={() => {
                      const aboutSection = document.getElementById('about');
                      if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    LEARN MORE
                  </motion.button>
                </div>
              </div>

              <motion.p
                className={styles.hero__paragraph}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0 }}
              >
                Located in the heart of Dubai, UAE, ALNSR ALDAHABI TYRES TRADING has been a leading name in the tire and
                outfit trading industry for nearly two decades.
                 We specialize in a wide range of car tires, truck tires, and vehicle
                outfit products, serving both individual customers and businesses with excellence, reliability, and competitive
                pricing. Whether you are looking for premium tires for your personal car or durable solutions for your commercial fleet,
                we are here to keep you moving safely and smoothly.
              </motion.p>

              <motion.div
                className={styles.hero__scroll_indicator}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 }}
              >
                <div className={styles.hero__dots_container}>
                  <motion.span 
                    className={styles.hero__dot}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.span>
                  <motion.span 
                    className={`${styles.hero__dot} ${styles.hero__dot_active}`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  ></motion.span>
                  <motion.span 
                    className={styles.hero__dot}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  ></motion.span>
                </div>
                <span className={styles.hero__scroll_text}>SCROLL TO EXPLORE</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero; 