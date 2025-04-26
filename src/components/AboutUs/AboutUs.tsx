import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  const stats = [
    { number: "2006", label: "Founded" },
    { number: "17+", label: "Years of Experience" },
    { number: "100%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Expert Support" }
  ];

  return (
    <motion.section 
      ref={containerRef}
      className="about-us"
      style={{ y, opacity }}
    >
      <div className="container">
        <h2>Our Story</h2>
        <div className="timeline">
          {timeline.map((item, index) => (
            <ParallaxCard key={index}>
              <div className="timeline-item">
                <span className="year">{item.year}</span>
                <span className="icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </ParallaxCard>
          ))}
        </div>

        <h2>Our Values</h2>
        <div className="values">
          {values.map((value, index) => (
            <ParallaxCard key={index}>
              <div className="value-item">
                <span className="icon">{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </ParallaxCard>
          ))}
        </div>

        <div className="relative z-10 w-screen min-h-screen flex items-center justify-between px-[6vw] gap-[6vw]">
          <div className="flex flex-col justify-center flex-1 min-w-[340px]">
            <motion.h1
              className="text-[4.2rem] font-black tracking-[-2px] text-white mb-2 leading-[1.1] [text-shadow:0_2px_20px_#dc262680]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              ABOUT
              <br />
              <motion.span 
                className="block text-[3.2rem] text-[#DC2626] font-black tracking-[-1px] mt-0.5 bg-gradient-to-r from-[#DC2626] to-[#ef4444] bg-clip-text text-transparent filter drop-shadow-[0_2px_8px_#dc262680]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                ALNSR ALDAHABI
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-white text-lg font-normal mb-8 tracking-[1.5px] [text-shadow:0_2px_12px_#dc2626a0] bg-gradient-to-r from-white to-[#DC2626] bg-clip-text text-transparent max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              Experience. Quality. Trust.
            </motion.p>

            <motion.p
              className="text-gray-300 text-base mb-8 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              Founded in 2006, ALNSR ALDAHABI TYRES TRADING has built a strong reputation based on our commitment to quality products, professional service, and customer satisfaction.
            </motion.p>

            <motion.p
              className="text-gray-300 text-base mb-8 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              Our journey started with a simple goal: to provide high-quality tires and vehicle outfits that meet the demanding needs of drivers and businesses in the UAE and beyond. Today, we proudly offer a comprehensive selection of trusted brands, along with expert advice to help you make the right choice for your vehicle.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-gradient-to-br from-[#18181b] to-[#0a0a0a] p-4 rounded-xl border border-[#dc2626]/30 backdrop-blur-xl hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-[#DC2626] mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Mission & Vision Cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <motion.div
                className="bg-gradient-to-br from-[#18181b] to-[#0a0a0a] p-8 rounded-2xl border border-[#dc2626]/30 backdrop-blur-xl hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-bold text-[#DC2626] mb-4">Our Commitment</h3>
                <p className="text-gray-300">
                  We are dedicated to providing the highest quality products and professional service to ensure complete customer satisfaction.
                </p>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-[#18181b] to-[#0a0a0a] p-8 rounded-2xl border border-[#dc2626]/30 backdrop-blur-xl hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-bold text-[#DC2626] mb-4">Our Expertise</h3>
                <p className="text-gray-300">
                  With years of experience, we offer expert advice and a comprehensive selection of trusted brands to meet your vehicle's needs.
                </p>
              </motion.div>
            </motion.div>
          </div>

          <div className="flex items-center justify-end flex-1 min-w-[340px]">
            <motion.div
              className="relative w-[440px] h-[440px] flex items-center justify-center transition-all duration-400 bg-[radial-gradient(circle_at_60%_60%,#dc2626_0%,transparent_80%)] rounded-full shadow-[0_0_100px_0_#dc2626a0,inset_0_0_60px_0_#dc262680] overflow-visible hover:scale-105"
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
            >
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
              <motion.div 
                className="absolute inset-0 border-4 border-[#DC2626] rounded-full opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="absolute inset-0 border-2 border-[#DC2626] rounded-full opacity-10"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, -180, -360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs; 