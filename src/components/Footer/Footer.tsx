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
          {/* Contact Info */}
          <motion.div 
            className="footer__section footer__section--contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="footer__title">Contact Us</h3>
            <div className="footer__contact-info">
              <motion.div 
                className="footer__contact-item"
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <i className="fas fa-phone footer__icon"></i>
                <span className="footer__text">+971 52 331 7180</span>
              </motion.div>
              <motion.div 
                className="footer__contact-item"
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <i className="fas fa-envelope footer__icon"></i>
                <span className="footer__text">alnsraldahabityrestrading@gmail.com</span>
              </motion.div>
              <motion.div 
                className="footer__contact-item"
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <i className="fas fa-map-marker-alt footer__icon"></i>
                <span className="footer__text">Ras Al Khaimah, UAE</span>
              </motion.div>
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