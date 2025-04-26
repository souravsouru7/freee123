import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import React, { useRef, useEffect } from 'react';
import wheelImage from '../../assets/images/pngwing.com.png';

const splitText = (text: string) => text.split('').map((char, i) => (
  <motion.span
    key={i}
    initial={{ y: 60, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.1 + i * 0.04, type: 'spring', stiffness: 200 }}
    className="inline-block will-change-transform will-change-opacity"
  >
    {char === ' ' ? '\u00A0' : char}
  </motion.span>
));

const Hero = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
    
    card.style.transform = `perspective(1000px) rotateY(${-x / 20}deg) rotateX(${y / 20}deg)`;
    wheel.style.transform = `perspective(1000px) rotateY(${-x / 15}deg) rotateX(${y / 15}deg)`;
    
    document.querySelectorAll('.hero__3d-shape').forEach((el, i) => {
      (el as HTMLElement).style.transform = `translate3d(${-x / (20 + i * 5)}px, ${y / (25 + i * 5)}px, ${i * 10}px) scale(${1 + i * 0.05})`;
    });
  };

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    if (wheelRef.current) wheelRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
  };

  return (
    <motion.section 
      ref={containerRef}
      style={{ y, opacity }}
      className="min-h-screen w-screen relative overflow-hidden flex items-center justify-center bg-transparent"
    >
      {/* 3D Background Shapes */}
      <div className="absolute inset-0 z-0">
        <motion.svg 
          className="hero__3d-shape hero__3d-cube absolute" 
          viewBox="0 0 60 60"
          animate={{
            y: [0, 20, 0],
            rotate: [0, 5, 0]
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
          className="hero__3d-shape hero__3d-sphere absolute" 
          viewBox="0 0 60 60"
          animate={{
            y: [0, -20, 0],
            rotate: [0, -5, 0]
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
          className="hero__3d-shape hero__3d-poly absolute" 
          viewBox="0 0 60 60"
          animate={{
            y: [0, 15, 0],
            rotate: [0, 3, 0]
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
          className="hero__3d-shape hero__3d-star absolute" 
          viewBox="0 0 60 60"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -3, 0]
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
          className="hero__3d-shape hero__3d-ring absolute" 
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
        className="hero__decor hero__decor--circle absolute" 
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
        className="hero__decor hero__decor--triangle absolute" 
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

      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0a0a0a] to-[#DC2626] bg-[length:400%_400%] animate-[gradientMove_15s_ease-in-out_infinite] opacity-85 mix-blend-overlay"></div>

      <div className="relative z-10 w-screen min-h-screen flex items-center justify-between px-[6vw] gap-[6vw]" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <div className="flex items-center justify-end flex-1 min-w-[340px]">
          <motion.div
            ref={wheelRef}
            className="relative w-[440px] h-[440px] flex items-center justify-center filter drop-shadow-[0_0_80px_#dc2626cc] transition-all duration-400 bg-[radial-gradient(circle_at_60%_60%,#dc2626_0%,transparent_80%)] rounded-full shadow-[0_0_100px_0_#dc2626a0,inset_0_0_60px_0_#dc262680] overflow-visible hover:drop-shadow-[0_0_100px_#dc2626ee] hover:scale-105"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
          >
            <motion.img
              src={wheelImage}
              alt="Premium Performance Tyres"
              className="w-full h-full object-contain z-10 filter drop-shadow-[0_0_40px_#fff3] transition-transform duration-400 hover:scale-110"
              animate={controls}
            />
            <motion.div 
              className="absolute top-6 left-6 bg-gradient-to-r from-[#DC2626] to-[#ef4444] text-white text-lg font-bold px-6 py-2.5 rounded-full shadow-[0_4px_20px_0_#dc2626cc,inset_0_2px_4px_0_#fff3] tracking-wider z-20 animate-[badgePop_1.2s_cubic-bezier(.68,-0.55,.27,1.55)] origin-center transition-all duration-300 hover:scale-110 hover:rotate-[-5deg] hover:shadow-[0_8px_30px_0_#dc2626cc,inset_0_2px_6px_0_#fff4]"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              NEW 2024
            </motion.div>
          </motion.div>
        </div>

        <div className="flex flex-col justify-center flex-1 min-w-[340px]">
          <div className="w-full max-w-none mx-auto mb-8">
            <motion.h1 
              className="text-[4.2rem] font-black tracking-[-2px] text-white mb-2 leading-[1.1] [text-shadow:0_2px_20px_#dc262680]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {splitText('ULTIMATE')}
              <br />
              <motion.span 
                className="block text-[3.2rem] text-[#DC2626] font-black tracking-[-1px] mt-0.5 bg-gradient-to-r from-[#DC2626] to-[#ef4444] bg-clip-text text-transparent filter drop-shadow-[0_2px_8px_#dc262680]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {splitText('PERFORMANCE')}
              </motion.span>
            </motion.h1>

            <motion.div
              className="text-white text-lg font-normal mb-5 tracking-[1.5px] [text-shadow:0_2px_12px_#dc2626a0] bg-gradient-to-r from-white to-[#DC2626] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              The next generation of racing tyres
            </motion.div>

            <motion.div
              className="text-[#bbb] text-sm uppercase mt-8 mb-2 tracking-wider font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              DURABILITY
            </motion.div>

            <motion.div
              className="text-[2.2rem] font-extrabold text-white mb-2 tracking-[1px] [text-shadow:0_2px_12px_#dc2626a0]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.6, type: 'spring' }}
            >
              50,000 MILES
            </motion.div>

            <motion.div
              className="text-[#DC2626] text-base font-semibold mb-5 tracking-[1px]"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 }}
            >
              Extended Life Span
            </motion.div>

            <div className="flex gap-6 mt-10">
              <motion.button
                className="relative overflow-hidden px-8 py-3 bg-[#DC2626] text-white font-bold rounded-full transition-all duration-400 hover:scale-110 hover:shadow-[0_0_30px_#DC2626,0_0_60px_#DC2626]"
                whileHover={{ scale: 1.12, boxShadow: '0 0 30px #DC2626, 0 0 60px #DC2626' }}
                whileTap={{ scale: 0.95 }}
              >
                SHOP NOW
              </motion.button>

              <motion.button
                className="relative overflow-hidden px-8 py-3 bg-transparent text-white font-bold rounded-full border-2 border-white transition-all duration-400 hover:scale-110 hover:shadow-[0_0_30px_#fff,0_0_60px_#fff]"
                whileHover={{ scale: 1.12, boxShadow: '0 0 30px #fff, 0 0 60px #fff' }}
                whileTap={{ scale: 0.95 }}
              >
                LEARN MORE
              </motion.button>
            </div>
          </div>

          <motion.p
            className="text-white text-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0 }}
          >
            Experience the pinnacle of tyre technology with our GT-R series. Engineered for
            maximum performance, designed for ultimate control, and crafted for the most
            demanding driving conditions. Whether you're on the track or the street, our tyres
            deliver unmatched grip and durability.
          </motion.p>

          <motion.div
            className="flex items-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
          >
            <div className="flex gap-2">
              <motion.span 
                className="w-2 h-2 rounded-full bg-white/30"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.span>
              <motion.span 
                className="w-2 h-2 rounded-full bg-white"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              ></motion.span>
              <motion.span 
                className="w-2 h-2 rounded-full bg-white/30"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              ></motion.span>
            </div>
            <span className="text-white text-sm tracking-wider">SCROLL TO EXPLORE</span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero; 