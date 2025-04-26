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
    rating: 4,
    featured: true
  },
  {
    id: 4,
    name: 'Urban Stealth',
    image: img4,
    price: '$219',
    desc: 'Silent, smooth, and stylish. Perfect for city driving.',
    rating: 4,
    featured: false
  },
  {
    id: 5,
    name: 'All-Terrain Max',
    image: img5,
    price: '$329',
    desc: 'Conquer any road. Rugged, reliable, and ready for adventure.',
    rating: 5,
    featured: false
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
    <section className="relative py-6 px-1 bg-gradient-to-br from-[#18181b] via-[#222] to-[#2a0909] min-h-[40vh] overflow-x-hidden">
      {/* Wavy SVG background */}
      <svg className="absolute top-0 left-0 w-full h-16 md:h-20 z-0" viewBox="0 0 1440 320"><path fill="#dc2626" fillOpacity="0.18" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-lg sm:text-xl font-extrabold text-center text-white mb-1 tracking-tight drop-shadow-[0_2px_24px_#dc2626cc]">
          Explore Our Tyre Collection
        </h2>
        <p className="text-center text-[#bbb] max-w-md mx-auto mb-3 text-xs">
          Discover our range of high-performance tyres, engineered for every road and every driver.
        </p>
        {/* Featured product */}
        {featured && (
          <motion.div
            className="relative bg-white/10 backdrop-blur-2xl border-2 border-[#ef4444] rounded-xl shadow-md p-2 sm:p-3 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left mb-4 mx-auto max-w-md group overflow-visible"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.02, boxShadow: '0 4px 16px 0 #dc2626cc', zIndex: 10 }}
            style={{ perspective: 1200 }}
          >
            <motion.div
              className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-2 sm:mb-0 sm:mr-2 rounded-full bg-gradient-to-br from-[#dc2626]/20 to-[#fff1]/10 shadow-[0_2px_8px_#dc2626a0] group-hover:shadow-[0_4px_16px_#dc2626cc] transition-all duration-300"
              whileHover={{ rotate: 8, scale: 1.09 }}
              animate={{ y: [0, -4, 0], rotate: [0, 6, 0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.img
                src={featured.image}
                alt={featured.name}
                className="w-10 h-10 sm:w-14 sm:h-14 object-contain drop-shadow-[0_2px_6px_#dc2626a0] rounded-full max-w-full max-h-full"
                whileHover={{ rotate: 12 }}
                transition={{ type: 'spring', stiffness: 180, damping: 14 }}
              />
            </motion.div>
            <div className="flex-1 flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-1 mb-0.5">
                <span className="bg-gradient-to-r from-[#DC2626] to-[#ef4444] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow tracking-wider animate-pulse">FEATURED</span>
                <span className="text-xs font-bold text-white">{featured.name}</span>
              </div>
              <div className="flex gap-0.5 mb-0.5">{[...Array(5)].map((_, i) => <Star key={i} filled={i < featured.rating} />)}</div>
              <div className="text-[#bbb] text-xs mb-0.5">{featured.desc}</div>
              <div className="text-base font-extrabold text-[#DC2626] mb-1">{featured.price}</div>
              <motion.button
                className="px-3 py-1 bg-gradient-to-r from-[#DC2626] to-[#ef4444] text-white font-bold rounded-full shadow hover:bg-[#ef4444] transition-all duration-300 text-xs tracking-wide"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
              >
                View Details
              </motion.button>
            </div>
          </motion.div>
        )}
        {/* Other products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {others.map((product) => (
            <motion.div
              key={product.id}
              className="relative bg-white/10 backdrop-blur-xl border border-[#dc2626]/30 rounded-lg shadow p-2 flex flex-col items-center text-center group overflow-visible transition-all duration-300 hover:shadow-[0_4px_16px_#dc2626cc]"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.02, boxShadow: '0 4px 16px 0 #dc2626cc', zIndex: 2 }}
              style={{ perspective: 1000 }}
            >
              <motion.div
                className="w-10 h-10 flex items-center justify-center mb-2 rounded-full bg-gradient-to-br from-[#dc2626]/20 to-[#fff1]/10 shadow-[0_2px_6px_#dc2626a0] group-hover:shadow-[0_4px_16px_#dc2626cc] transition-all duration-300"
                whileHover={{ rotate: 8, scale: 1.09 }}
                animate={{ y: [0, -3, 0], rotate: [0, 6, 0, -6, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-8 h-8 object-contain drop-shadow-[0_2px_4px_#dc2626a0] rounded-full max-w-full max-h-full"
                  whileHover={{ rotate: 12 }}
                  transition={{ type: 'spring', stiffness: 180, damping: 14 }}
                />
              </motion.div>
              <div className="flex gap-0.5 mb-0.5 justify-center">{[...Array(5)].map((_, i) => <Star key={i} filled={i < product.rating} />)}</div>
              <div className="text-xs font-bold text-white mb-0.5 tracking-wide flex items-center justify-center gap-1">{product.name}</div>
              <div className="text-[#bbb] text-[10px] mb-0.5 min-h-[20px]">{product.desc}</div>
              <div className="text-sm font-extrabold text-[#DC2626] mb-1">{product.price}</div>
              <motion.button
                className="px-2 py-0.5 bg-gradient-to-r from-[#DC2626] to-[#ef4444] text-white font-bold rounded-full shadow hover:bg-[#ef4444] transition-all duration-300 text-[10px] tracking-wide"
                whileHover={{ scale: 1.06 }}
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