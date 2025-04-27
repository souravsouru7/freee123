import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './ContactUs.scss';

const ContactUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const contactScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const contactOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
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
      content:"alnsraldahabityrestrading@gmail.com",
      link: "alnsraldahabityrestrading@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt className="icon" />,
      title: "Location",
      content: "Dubai, UAE",
      link: "https://maps.google.com"
    }
  ];

  return (
    <motion.section
      ref={containerRef}
      className="contact-section"
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
      </div>

      <div className="content-wrapper">
        <div className="contact-info">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            CONTACT
            <br />
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              US
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            Get in Touch
          </motion.p>

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
                <div>{info.icon}</div>
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
            
            <div className="space-y-4">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane />
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactUs; 