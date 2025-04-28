import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './BrandSlider.scss';

// Import all images
import Apollo from '../../assets/tyrebrand/Apollo.png';
import BFGoodrich from '../../assets/tyrebrand/bf-goodrich-logo.png';
import Bridgestone from '../../assets/tyrebrand/bridgestone.png';
import Continental from '../../assets/tyrebrand/Continental.png';
import Dunlop from '../../assets/tyrebrand/Dunlop.png';
import Falken from '../../assets/tyrebrand/Falken.png';
import Federal from '../../assets/tyrebrand/Federal-Tires.png';
import Firestone from '../../assets/tyrebrand/firestone.png';
import General from '../../assets/tyrebrand/General Tire.png';
import Goodyear from '../../assets/tyrebrand/Goodyear.png';
import GTRadial from '../../assets/tyrebrand/GT-Radial-Tires.png';
import Hankook from '../../assets/tyrebrand/Hankook.png';
import Joyroad from '../../assets/tyrebrand/JOYROAD.png';
import Kapsen from '../../assets/tyrebrand/Kapsen.png';
import Kumho from '../../assets/tyrebrand/Kumho Tyres.png';
import Maxxis from '../../assets/tyrebrand/Maxxis.png';
import Michelin from '../../assets/tyrebrand/Michelin.png';
import Nexen from '../../assets/tyrebrand/nexen.png';
import Pirelli from '../../assets/tyrebrand/Pirelli.png';
import Toyo from '../../assets/tyrebrand/Toyo-Tires.png';
import Triangle from '../../assets/tyrebrand/Triangle.png';
import Wanli from '../../assets/tyrebrand/wanli.png';
import Yokohama from '../../assets/tyrebrand/Yokohama.png';

const BrandSlider: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    controls.start({
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: isMobile ? 20 : 30,
          ease: "linear",
        },
      },
    });
  }, [controls, isMobile]);

  const brands = [
    { name: 'Apollo', image: Apollo },
    { name: 'BFGoodrich', image: BFGoodrich },
    { name: 'Bridgestone', image: Bridgestone },
    { name: 'Continental', image: Continental },
    { name: 'Dunlop', image: Dunlop },
    { name: 'Falken', image: Falken },
    { name: 'Federal', image: Federal },
    { name: 'Firestone', image: Firestone },
    { name: 'General', image: General },
    { name: 'Goodyear', image: Goodyear },
    { name: 'GT Radial', image: GTRadial },
    { name: 'Hankook', image: Hankook },
    { name: 'Joyroad', image: Joyroad },
    { name: 'Kapsen', image: Kapsen },
    { name: 'Kumho', image: Kumho },
    { name: 'Maxxis', image: Maxxis },
    { name: 'Michelin', image: Michelin },
    { name: 'Nexen', image: Nexen },
    { name: 'Pirelli', image: Pirelli },
    { name: 'Toyo', image: Toyo },
    { name: 'Triangle', image: Triangle },
    { name: 'Wanli', image: Wanli },
    { name: 'Yokohama', image: Yokohama }
  ];

  // Duplicate the brands array for smoother infinite scrolling
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="brand-slider">
      <div className="brand-slider__container">
        <motion.div 
          className="brand-slider__track"
          animate={controls}
        >
          {duplicatedBrands.map((brand, index) => (
            <div key={index} className="brand-slider__item">
              <img 
                src={brand.image} 
                alt={brand.name} 
                className="brand-slider__image"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandSlider; 