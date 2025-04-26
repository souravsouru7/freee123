import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import wheelImage from '../../assets/images/pngwing.com.png';

const timeline = [
  {
    year: '1985',
    icon: '🏁',
    title: 'The First Lap',
    description: 'Our journey began with a single vision: to redefine speed and safety on the track.'
  },
  {
    year: '1992',
    icon: '🔬',
    title: 'The Breakthrough',
    description: "Developed the world's first adaptive racing tyre, setting new records."
  },
  {
    year: '2001',
    icon: '🏆',
    title: 'Racing Legends',
    description: 'Our tyres powered championship-winning teams across Europe.'
  },
  {
    year: '2015',
    icon: '🌱',
    title: 'Green Revolution',
    description: 'Introduced eco-friendly compounds, blending performance with sustainability.'
  },
  {
    year: '2024',
    icon: '🤖',
    title: 'Beyond the Horizon',
    description: 'Launching AI-optimized tyres for the next generation of motorsport.'
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
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-8">
        {/* Premium Vertical Timeline (Desktop) */}
        <div className="hidden md:flex flex-col items-center relative mb-20">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-1 bg-gradient-to-b from-[#dc2626] via-[#fff2] to-[#dc2626] opacity-70 z-0" />
          {timeline.map((item, idx) => (
            <div key={item.year} className="relative w-full flex items-center mb-16 last:mb-0 min-h-[120px]">
              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  initial={{ boxShadow: '0 0 0px #dc2626' }}
                  animate={{ boxShadow: ['0 0 0px #dc2626', '0 0 32px 12px #dc2626cc', '0 0 0px #dc2626'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#DC2626] to-[#ef4444] border-4 border-white/40 flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                >
                  {item.icon}
                </motion.div>
              </div>
              {/* Card with pointer triangle */}
              <div className={`flex-1 flex ${idx % 2 === 0 ? 'justify-end pr-16' : 'justify-start pl-16'}`}> 
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 40px 0 #dc2626cc, 0 1.5px 16px 0 #fff3' }}
                  className="relative bg-gradient-to-br from-[#18181b]/80 via-[#222]/80 to-[#2a0909]/80 border border-[#dc2626]/40 shadow-2xl p-7 rounded-2xl max-w-md w-full backdrop-blur-xl transition-all duration-300 hover:bg-[#18181b]/90 hover:border-[#ef4444]"
                >
                  {/* Triangle pointer */}
                  <div className={`absolute top-6 ${idx % 2 === 0 ? '-right-4' : '-left-4'} w-0 h-0 border-y-8 border-y-transparent ${idx % 2 === 0 ? 'border-l-8 border-l-[#18181b]/80' : 'border-r-8 border-r-[#18181b]/80'}`}></div>
                  <div className="text-xl font-semibold text-white mb-1 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#dc2626] animate-pulse" />
                    {item.title}
                  </div>
                  <div className="text-gray-300 text-base">{item.description}</div>
                </motion.div>
              </div>
              <div className="flex-1" />
            </div>
          ))}
        </div>
        {/* Mobile Timeline (vertical) */}
        <div className="md:hidden flex flex-col gap-10 mb-20">
          {timeline.map((item, idx) => (
            <ParallaxCard key={item.year}>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: idx * 0.15 }} viewport={{ once: true }} className="flex items-center gap-4 bg-black/60 rounded-2xl border border-[#dc2626]/30 shadow-2xl p-4 backdrop-blur-xl hover:shadow-[0_8px_40px_0_#dc2626cc] transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#DC2626] to-[#ef4444] flex items-center justify-center text-3xl font-bold shadow-lg border-4 border-[#fff2]">{item.icon}</div>
                <div className="flex-1">
                  <div className="text-lg font-semibold text-white mb-1">{item.title}</div>
                  <div className="text-gray-300 text-sm">{item.description}</div>
                </div>
              </motion.div>
            </ParallaxCard>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-5xl mx-auto px-4 pb-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-10 tracking-wide">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <ParallaxCard key={value.title}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.15 }} viewport={{ once: true }} className="bg-gradient-to-br from-[#18181b] via-[#222] to-[#2a0909] border border-[#dc2626]/30 shadow-[0_4px_40px_0_#dc2626cc,0_1.5px_8px_0_#fff2] backdrop-blur-xl p-10 rounded-2xl flex flex-col items-center text-center hover:scale-105 hover:shadow-[0_8px_40px_0_#dc2626cc,0_1.5px_16px_0_#fff3] transition-all duration-300">
                <div className="text-5xl mb-4 drop-shadow-[0_2px_12px_#dc2626a0]">{value.icon}</div>
                <div className="text-xl font-bold text-white mb-2 tracking-wide">{value.title}</div>
                <div className="text-gray-300 text-base font-medium">{value.description}</div>
              </motion.div>
            </ParallaxCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 