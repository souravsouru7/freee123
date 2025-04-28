import { motion } from 'framer-motion';
import './Footer.scss';

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
            <h3 className="footer__title">Get in Touch</h3>
            <ul className="footer__contact">
              <motion.li
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <i className="fas fa-map-marker-alt"></i>
                <span>Dubai, UAE</span>
              </motion.li>
              <motion.li
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <i className="fas fa-phone"></i>
                <span>+1 (555) 123-4567</span>
              </motion.li>
              <motion.li
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <i className="fas fa-envelope"></i>
                <span>alnsraldahabityrestrading@gmail.com</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="footer__copyright">
            © {currentYear} Alnsr Aldahabi Tyres Trading. All rights reserved. Website design and development by{' '}
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