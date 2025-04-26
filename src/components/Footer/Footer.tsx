import React from 'react';
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
          {/* Company Info */}
          <motion.div 
            className="footer__section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="footer__title">GT-R TYRES</h3>
            <p className="footer__text">
              Revolutionizing the way you experience the road. Our commitment to excellence drives every innovation.
            </p>
            <div className="footer__social">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="footer__social-link"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={`fab fa-${social}`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="footer__section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="footer__title">Quick Links</h3>
            <ul className="footer__links">
              {['Home', 'Products', 'About Us', 'Contact', 'FAQ'].map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a href="#" className="footer__link">{link}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="footer__section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="footer__title">Contact Us</h3>
            <ul className="footer__contact">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>123 Performance Street, Racing City</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>info@gtrtyres.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            className="footer__section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="footer__title">Stay Updated</h3>
            <p className="footer__text">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="footer__newsletter">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="footer__input"
              />
              <motion.button
                type="submit"
                className="footer__submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="footer__copyright">
            © {currentYear} GT-R TYRES. All rights reserved.
          </div>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 