import React from 'react';
import { motion } from 'framer-motion';
import './ProductSection.scss';

const ProductSection: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Apollo',
      image: '/assets/pngegg (73).png',
    },
    {
      id: 2,
      name: 'BFGoodrich',
      image: '/assets/pngegg (79).png',
    },
    {
      id: 3,
      name: 'Michelin',
      image: '/assets/pngegg (83).png',
    },
    {
      id: 4,
      name: 'Yokohama',
      image: '/assets/pngegg (73).png',
    },
    {
      id: 5,
      name: 'Bridgestone',
      image: '/assets/pngegg (73).png',
    },
    {
      id: 6,
      name: 'Continental',
      image: '/assets/pngegg (79).png',
    },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error('Image failed to load:', e.currentTarget.src);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-us');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="product-section">
      <div className="product-section__container">
        <div className="product-section__header">
          <motion.h2 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="product-section__title"
          >
            HOT SELLING PRODUCTS
          </motion.h2>
          <p className="product-section__subtitle">
            AMAZING NEW TYRES AT AMAZING PRICES
          </p>
          <div className="product-section__divider" />
        </div>

        <div className="product-section__grid">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="product-section__card"
            >
              <div className="product-section__image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-section__image"
                  onError={handleImageError}
                />
              </div>
              <h3 className="product-section__name">{product.name}</h3>
              <motion.button 
                className="product-section__button"
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enquiry Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection; 