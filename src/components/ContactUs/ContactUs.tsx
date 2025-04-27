import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaUser, FaComment, FaBuilding, FaGlobe } from 'react-icons/fa';
import './ContactUs.scss';

interface ContactUsProps {
  id?: string;
}

const ContactUs = ({ id }: ContactUsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const contactScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const contactOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: <FaPhone className="icon" />,
      title: "Phone",
      content: "+971 50 123 4567",
      link: "tel:+971501234567"
    },
    {
      icon: <FaEnvelope className="icon" />,
      title: "Email",
      content: "alnsraldahabityrestrading@gmail.com",
      link: "mailto:alnsraldahabityrestrading@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt className="icon" />,
      title: "Location",
      content: "Dubai, UAE",
      link: "https://maps.google.com"
    },
    {
      icon: <FaBuilding className="icon" />,
      title: "Business Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM",
      link: "#"
    }
  ];

  return (
    <motion.section
      ref={containerRef}
      className="contact-section"
      id={id}
      style={{ scale: contactScale, opacity: contactOpacity }}
    >
      <div className="background-elements">
        <motion.div 
          className="circle-1"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="circle-2"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="location-marker">
          <FaGlobe className="globe-icon" />
          <span>Dubai, UAE</span>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="contact-info">
          <motion.div
            className="header-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              CONTACT
              <br />
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                US
              </motion.span>
            </h1>
            <p>Get in Touch with Us</p>
            <div className="location-badge">
              <FaMapMarkerAlt />
              <span>Dubai, UAE</span>
            </div>
          </motion.div>

          <div className="contact-cards">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                className="contact-card"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
              >
                <div className="icon-wrapper">{info.icon}</div>
                <h3>{info.title}</h3>
                <p>{info.content}</p>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="contact-form">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
          >
            <h3>Send us a Message</h3>
            
            <div className="form-fields">
              <div className="form-group">
                <div className="input-wrapper">
                  <FaUser className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <div className="input-wrapper">
                  <FaEnvelope className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <div className="input-wrapper">
                  <FaComment className="input-icon" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                  />
                </div>
              </div>
              
              <motion.button
                type="submit"
                className={isSubmitting ? 'submitting' : ''}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="loading-spinner" />
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitSuccess && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message sent successfully!
                </motion.div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactUs; 