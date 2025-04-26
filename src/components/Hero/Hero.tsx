import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import React, { useRef, useEffect } from 'react';
import wheelImage from '../../assets/pngegg (79).png';

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

  const tyreScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);
  const tyreOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const tyreY = useTransform(scrollYProgress, [0, 0.5], [0, -120]);

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
            className="relative w-[440px] h-[440px] flex items-center justify-center transition-all duration-400 bg-[radial-gradient(circle_at_60%_60%,#dc2626_0%,transparent_80%)] rounded-full shadow-[0_0_100px_0_#dc2626a0,inset_0_0_60px_0_#dc262680] overflow-visible hover:scale-105"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
            style={{ scale: tyreScale, opacity: tyreOpacity, y: tyreY }}
          >
            {/* Animated Tyre Image */}
            <motion.img
              src={wheelImage}
              alt="Premium Performance Tyres"
              className="w-full h-full object-contain z-10 transition-transform duration-400 rounded-full"
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
                scale: 1.13
              }}
            />
          </motion.div>
        </div>

        <div className="flex flex-col justify-center flex-1 min-w-[340px]">
          <div className="w-full max-w-none mx-auto mb-8">
            <motion.div style={{ y: headlineY, opacity: headlineOpacity }}>
              <motion.h1
                className="text-[4.2rem] font-black tracking-[-2px] text-white mb-2 leading-[1.1] [text-shadow:0_2px_20px_#dc262680]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {splitText('ALNSR ALDAHABI')}
                <br />
                <motion.span 
                  className="block text-[3.2rem] text-[#DC2626] font-black tracking-[-1px] mt-0.5 bg-gradient-to-r from-[#DC2626] to-[#ef4444] bg-clip-text text-transparent filter drop-shadow-[0_2px_8px_#dc262680]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {splitText('TYRES TRADING')}
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.div
              className="text-white text-lg font-normal mb-5 tracking-[1.5px] [text-shadow:0_2px_12px_#dc2626a0] bg-gradient-to-r from-white to-[#DC2626] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              Your Trusted Partner in Quality Tires and Vehicle Outfits Since 2006
            </motion.div>

            <motion.div
              className="text-[#bbb] text-sm uppercase mt-8 mb-2 tracking-wider font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              LOCATION
            </motion.div>

            <motion.div
              className="text-[2.2rem] font-extrabold text-white mb-2 tracking-[1px] [text-shadow:0_2px_12px_#dc2626a0]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.6, type: 'spring' }}
            >
              DUBAI, UAE
            </motion.div>

            <motion.div
              className="text-[#DC2626] text-base font-semibold mb-5 tracking-[1px]"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 }}
            >
              Since 2006
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
            Located in the heart of Dubai, UAE, ALNSR ALDAHABI TYRES TRADING has been a leading name in the tire and
            outfit trading industry for nearly two decades. We specialize in a wide range of car tires, truck tires, and vehicle
            outfit products, serving both individual customers and businesses with excellence, reliability, and competitive
            pricing. Whether you are looking for premium tires for your personal car or durable solutions for your commercial fleet,
            we are here to keep you moving safely and smoothly.
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