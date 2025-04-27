import React, { useEffect, useState } from 'react';
import './LoadingScreen.scss';
import logo from '../../assets/Alnsr Aldahabi Tyre Trading Logo.png';

const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`loading-screen ${isFading ? 'fade-out' : ''}`}>
      <img src={logo} alt="Logo" className="logo-image" />
    </div>
  );
};

export default LoadingScreen; 