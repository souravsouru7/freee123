import React from 'react';
import { motion } from 'framer-motion';

import img2 from '../../assets/images/—Pngtree—black tire with rim isolated_16660568.png';

import img4 from '../../assets/images/image_processing20220417-11036-1su0lt2.png';
import img5 from '../../assets/images/R.png';

const products = [

  {
    id: 2,
    name: 'EcoDrive Pro',
    image: img2,
    price: '$249',
    desc: 'Eco-friendly compound with extended durability and low rolling resistance.',
    rating: 4
  },

  {
    id: 4,
    name: 'Urban Stealth',
    image: img4,
    price: '$219',
    desc: 'Silent, smooth, and stylish. Perfect for city driving.',
    rating: 4
  },
  {
    id: 5,
    name: 'All-Terrain Max',
    image: img5,
    price: '$329',
    desc: 'Conquer any road. Rugged, reliable, and ready for adventure.',
    rating: 5
  },

];

const cardVariants = {
  offscreen: { opacity: 0, y: 60, scale: 0.95 },
  onscreen: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', bounce: 0.3, duration: 0.8 } }
};

const Star = ({ filled }: { filled: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill={filled ? '#FACC15' : 'none'} stroke="#FACC15" strokeWidth="1.5"><polygon points="10,2 12.5,7.5 18,8 13.5,12 15,18 10,15 5,18 6.5,12 2,8 7.5,7.5" /></svg>
);

const ProductSection = () => {
  const featured = products.find(p => p.featured);
  const others = products.filter(p => !p.featured);

  return (
    <section className="relative py-12 px-2 bg-gradient-to-br from-[#18181b] via-[#222] to-[#2a0909] min-h-[60vh] overflow-x-hidden">
      {/* Wavy SVG background */}
      <svg className="absolute top-0 left-0 w-full h-32 md:h-40 z-0" viewBox="0 0 1440 320"><path fill="#dc2626" fillOpacity="0.18" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-3 tracking-tight drop-shadow-[0_2px_24px_#dc2626cc]">
          Explore Our Tyre Collection
        </h2>
        <p className="text-center text-[#bbb] max-w-2xl mx-auto mb-8">
          Discover our range of high-performance tyres, engineered for every road and every driver. Find your perfect match below.
        </p>
        {/* Featured product */}
        {featured && (
          <motion.div
            className="relative bg-white/10 backdrop-blur-2xl border-2 border-[#ef4444] rounded-3xl shadow-2xl p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left mb-10 mx-auto max-w-3xl group overflow-visible"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 #dc2626cc', zIndex: 10 }}
            style={{ perspective: 1200 }}
          >
            <motion.div
              className="w-32 h-32 sm:w-44 sm:h-44 flex items-center justify-center mb-4 sm:mb-0 sm:mr-8 rounded-full bg-gradient-to-br from-[#dc2626]/20 to-[#fff1]/10 shadow-[0_4px_32px_#dc2626a0] group-hover:shadow-[0_8px_48px_#dc2626cc] transition-all duration-300"
              whileHover={{ rotate: 8, scale: 1.09 }}
              animate={{ y: [0, -10, 0], rotate: [0, 6, 0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.img
                src={featured.image}
                alt={featured.name}
                className="w-full h-full object-contain drop-shadow-[0_4px_24px_#dc2626a0] rounded-full"
                whileHover={{ rotate: 12, scale: 1.13 }}
                transition={{ type: 'spring', stiffness: 180, damping: 14 }}
              />
            </motion.div>
            <div className="flex-1 flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-gradient-to-r from-[#DC2626] to-[#ef4444] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg tracking-wider animate-pulse">FEATURED</span>
                <span className="text-lg font-bold text-white">{featured.name}</span>
              </div>
              <div className="flex gap-1 mb-2">{[...Array(5)].map((_, i) => <Star key={i} filled={i < featured.rating} />)}</div>
              <div className="text-[#bbb] text-base mb-2">{featured.desc}</div>
              <div className="text-2xl font-extrabold text-[#DC2626] mb-3">{featured.price}</div>
              <motion.button
                className="px-7 py-2.5 bg-gradient-to-r from-[#DC2626] to-[#ef4444] text-white font-bold rounded-full shadow-lg hover:bg-[#ef4444] transition-all duration-300 text-base tracking-wide"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
              >
                View Details
              </motion.button>
            </div>
          </motion.div>
        )}
        {/* Other products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
          {others.map((product) => (
            <motion.div
              key={product.id}
              className="relative bg-white/10 backdrop-blur-xl border border-[#dc2626]/30 rounded-2xl shadow-xl p-5 flex flex-col items-center text-center group overflow-visible transition-all duration-300 hover:shadow-[0_8px_32px_0_#dc2626cc]"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 #dc2626cc', zIndex: 2 }}
              style={{ perspective: 1000 }}
            >
              <motion.div
                className="w-24 h-24 flex items-center justify-center mb-4 rounded-full bg-gradient-to-br from-[#dc2626]/20 to-[#fff1]/10 shadow-[0_4px_16px_#dc2626a0] group-hover:shadow-[0_8px_32px_#dc2626cc] transition-all duration-300"
                whileHover={{ rotate: 8, scale: 1.09 }}
                animate={{ y: [0, -8, 0], rotate: [0, 6, 0, -6, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain drop-shadow-[0_4px_12px_#dc2626a0] rounded-full"
                  whileHover={{ rotate: 12, scale: 1.13 }}
                  transition={{ type: 'spring', stiffness: 180, damping: 14 }}
                />
              </motion.div>
              <div className="flex gap-1 mb-1 justify-center">{[...Array(5)].map((_, i) => <Star key={i} filled={i < product.rating} />)}</div>
              <div className="text-lg font-bold text-white mb-1 tracking-wide flex items-center justify-center gap-2">{product.name}</div>
              <div className="text-[#bbb] text-sm mb-2 min-h-[36px]">{product.desc}</div>
              <div className="text-xl font-extrabold text-[#DC2626] mb-2">{product.price}</div>
              <motion.button
                className="px-6 py-2 bg-gradient-to-r from-[#DC2626] to-[#ef4444] text-white font-bold rounded-full shadow-lg hover:bg-[#ef4444] transition-all duration-300 text-sm tracking-wide"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
              >
                View Details
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection; 