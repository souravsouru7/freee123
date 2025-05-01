import { motion } from 'framer-motion';
import './Footer.scss';
import logo from '../../assets/logo2.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Animated Background */}
      <div className="footer__background">
        <div className="footer__gradient"></div>
        <div className="footer__particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="footer__particle"
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="footer__content">
        <div className="footer__grid">
          {/* Map Section */}
          <motion.div 
            className="footer__section footer__section--map"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="footer__map-header">
              <h3 className="footer__title">Our Location</h3>
              <motion.div 
                className="footer__location-card"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <i className="fas fa-map-marker-alt footer__location-icon"></i>
                <div className="footer__location-info">
                  <span className="footer__location-title">Visit Us</span>
                  <span className="footer__location-address">Ras Al Khaimah, UAE</span>
                </div>
              </motion.div>
            </div>
            <div className="footer__map-container">
              <div className="footer__map-overlay"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.1023749999997!2d55.9438!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwNTYnMzcuNyJF!5e0!3m2!1sen!2sae!4v1645543212345!5m2!1sen!2sae"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="footer__map"
              ></iframe>
              <motion.a 
                href="https://maps.app.goo.gl/4BT1udb3PoYWoADY7"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__map-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-directions"></i>
                Get Directions
              </motion.a>
            </div>
          </motion.div>

          {/* Company Logo */}
          <motion.div 
            className="footer__section footer__section--logo"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="footer__logo-container">
              <motion.img 
                src={logo} 
                alt="Alnsr Aldahabi Tyres Trading Logo"
                className="footer__logo"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <motion.div 
                className="footer__logo-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="footer__company-name">Alnsr Aldahabi Tyres Trading</h3>
                <p className="footer__company-tagline">Your Trusted Partner in Quality Tyres</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="footer__copyright">
            © {currentYear} Alnsr Aldahabi Tyres Trading. All rights reserved. Website design and developed by{' '}
            <motion.a 
              href="https://www.dimark.ae"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="footer__link"
            >
              Dimark
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 