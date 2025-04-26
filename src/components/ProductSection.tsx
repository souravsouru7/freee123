import React from 'react';
import { motion } from 'framer-motion';
import '../App.scss';

const ProductSection: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Apollo',
      image: '/src/assets/pngegg (73).png',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Apollo_Tyres_logo.svg',
    },
    {
      id: 2,
      name: 'BFGoodrich',
      image: '/src/assets/pngegg (79).png',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/BFGoodrich_logo.svg',
    },
    {
      id: 3,
      name: 'Michelin',
      image: '/src/assets/pngegg (83).png',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Michelin_logo.svg',
    },
    {
      id: 4,
      name: 'Yokohama',
      image: '/src/assets/pngegg (73).png',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Yokohama-logo.svg',
    },
  ];

  return (
    <section className="product-section py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-yellow-600 mb-2 tracking-tight"
        >
          HOT SELLING PRODUCTS
        </motion.h2>
        <div className="text-center text-2xl text-gray-500 mb-6 font-light">AMAZING NEW TYRES AT AMAZING PRICES</div>
        <div className="flex justify-center mb-12">
          <div className="h-1 w-10 bg-yellow-400 rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl shadow-lg flex flex-col items-center w-72 p-0 overflow-hidden"
              style={{ minHeight: 380 }}
            >
              <div className="flex flex-col items-center justify-center pt-8 pb-4 px-4" style={{ minHeight: 180 }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-36 h-36 object-contain mb-2"
                  style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.08))' }}
                />
              </div>
              <div className="flex-1" />
              <div className="w-full px-6 pb-6">
                <button
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg transition-colors text-lg shadow-md"
                >
                  Enquire Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection; 