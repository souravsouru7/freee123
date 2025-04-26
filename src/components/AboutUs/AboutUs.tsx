import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import wheelImage from '../../assets/images/pngwing.com.png';

const timeline = [
  {
    year: '1',
    icon: '🏁',
    title: 'Born to Race',
    description: 'From the first day, our passion was speed, precision, and the thrill of the track.'
  },
  {
    year: '2',
    icon: '🔬',
    title: 'Innovation Unleashed',
    description: 'We shattered conventions, introducing smart compounds and AI-driven tread designs.'
  },
  {
    year: '3',
    icon: '🏆',
    title: "Champions' Choice",
    description: 'Our tyres became the secret weapon for world-class teams and legendary drivers.'
  },
  {
    year: '4',
    icon: '🌱',
    title: 'Racing Green',
    description: 'We pioneered eco-performance, blending sustainability with unyielding grip.'
  },
  {
    year: '5',
    icon: '🤖',
    title: 'The Future Rolls In',
    description: 'Today, our AI-optimized GT-R series leads the next era of motorsport.'
  }
];

const values = [
  {
    icon: '🚀',
    title: 'Innovation',
    description: 'Pushing boundaries in tyre technology.'
  },
  {
    icon: '✨',
    title: 'Quality',
    description: 'Uncompromising standards in every tyre.'
  },
  {
    icon: '⚡',
    title: 'Performance',
    description: 'Engineered for ultimate driving experience.'
  }
];

const ParallaxCard = ({ children }: { children: React.ReactNode }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (y / rect.height) * 14;
    const rotateY = -(x / rect.width) * 14;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04,1.04,1.04)`;
    card.style.boxShadow = '0 8px 40px 0 #dc2626cc, 0 1.5px 8px 0 #fff2';
  };
  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
    card.style.boxShadow = '0 2px 16px 0 #dc26262a';
  };
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-200"
    >
      {children}
    </div>
  );
};

const AboutUs = () => {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-[#0a0a0a] to-[#DC2626] via-[#18181b] overflow-x-hidden">
      {/* Animated SVG Backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.svg className="absolute left-10 top-10" width="120" height="120" viewBox="0 0 60 60" animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}><rect x="10" y="10" width="40" height="40" rx="8" fill="#dc2626" opacity="0.18" /></motion.svg>
        <motion.svg className="absolute right-20 top-32" width="100" height="100" viewBox="0 0 60 60" animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}><circle cx="30" cy="30" r="24" fill="#fff" opacity="0.10" /></motion.svg>
        <motion.svg className="absolute left-1/2 bottom-10" width="90" height="90" viewBox="0 0 60 60" animate={{ y: [0, 15, 0], rotate: [0, 3, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}><polygon points="30,8 52,52 8,52" fill="#ef4444" opacity="0.13" /></motion.svg>
        <motion.svg className="absolute right-10 bottom-24" width="110" height="110" viewBox="0 0 60 60" animate={{ y: [0, -15, 0], rotate: [0, -3, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}><polygon points="30,5 36,24 56,24 39,36 45,55 30,43 15,55 21,36 4,24 24,24" fill="#fff" opacity="0.08" /></motion.svg>
      </div>

      {/* Hero/Intro Section */}
      <div className="relative z-10 max-w-6xl mx-auto pt-24 pb-16 px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col items-start justify-center text-left">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-[#DC2626] via-[#ef4444] to-[#fff] bg-clip-text text-transparent mb-4 drop-shadow-[0_2px_24px_#dc2626cc]">Driven by Performance</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="text-lg sm:text-xl text-gray-200 max-w-xl mb-8">We are a premium racing tyre company, blending innovation, quality, and ultimate control for the world's most demanding drivers.</motion.p>
        </div>
        <motion.div className="flex-1 flex items-center justify-center" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <motion.img src={wheelImage} alt="Tyre" className="w-[340px] h-[340px] object-contain drop-shadow-[0_0_60px_#dc2626cc] rounded-full bg-[radial-gradient(circle_at_60%_60%,#dc2626_0%,transparent_80%)] shadow-[0_0_100px_0_#dc2626a0,inset_0_0_60px_0_#dc262680]" animate={{ rotate: [0, 360] }} transition={{ repeat: Infinity, duration: 16, ease: 'linear' }} />
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        {/* Horizontal Stepper Timeline (Desktop) */}
        <div className="hidden md:flex flex-col items-center w-full">
          <div className="relative w-full flex items-center justify-between">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#dc2626] via-[#fff2] to-[#dc2626] opacity-70 z-0 rounded-full" style={{ transform: 'translateY(-50%)' }} />
            {timeline.map((item, idx) => (
              <motion.div
                key={item.year}
                className="relative flex flex-col items-center group w-1/5"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Icon in circle */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#DC2626] to-[#ef4444] flex items-center justify-center text-white text-3xl font-bold shadow-lg border-4 border-[#fff2] z-10 group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                  {item.icon}
                </div>
                {/* Card popup on hover */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 top-20 w-64 bg-white/10 backdrop-blur-2xl border border-[#dc2626]/30 rounded-2xl shadow-2xl p-5 text-center pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-300 z-20"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-lg font-bold text-white mb-1">{item.title}</div>
                  <div className="text-gray-200 text-sm">{item.description}</div>
                </motion.div>
                {/* Year below icon */}
                <div className="mt-4 text-[#dc2626] font-bold text-base drop-shadow">{item.year}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Our Core Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <ParallaxCard>
                <div className="bg-gradient-to-br from-[#18181b] to-[#0a0a0a] p-8 rounded-2xl border border-[#dc2626]/30 backdrop-blur-xl">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </ParallaxCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technology Showcase */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#18181b] to-[#0a0a0a] p-8 rounded-2xl border border-[#dc2626]/30 backdrop-blur-xl"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Cutting-Edge Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#dc2626] mb-4">AI-Optimized Tread Patterns</h3>
              <p className="text-gray-300">
                Our proprietary AI algorithms analyze millions of data points to create tread patterns that maximize grip and performance in any condition.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#dc2626] mb-4">Sustainable Materials</h3>
              <p className="text-gray-300">
                We're pioneering the use of eco-friendly compounds that maintain performance while reducing environmental impact.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs; 