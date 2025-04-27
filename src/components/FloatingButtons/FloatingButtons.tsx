import React from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './FloatingButtons.scss';

const FloatingButtons: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="floating-buttons">
      <a
        href="https://wa.me/your-phone-number"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <FaWhatsapp color="#fff" size={24} />
      </a>
      <a
        href="mailto:alnsraldahabityrestrading@gmail.com"
        className="mail-button"
      >
        <FaEnvelope color="#fff" size={24} />
      </a>
      
      <button onClick={scrollToTop} className="scroll-top-button">
        <span style={{color: '#fff', fontSize: 24}}>&uarr;</span>
      </button>
    </div>
  );
};

export default FloatingButtons; 