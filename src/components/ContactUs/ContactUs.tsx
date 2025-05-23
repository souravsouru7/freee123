import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaPaperPlane, FaUser, FaComment, FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './ContactUs.scss';

interface ContactUsProps {
  id?: string;
}

const ContactUs = ({ id }: ContactUsProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const contactInfo = [
    {
      icon: <FaPhone className="icon" />,
      title: "Phone",
      content: "+971 52 331 7180",
      link: "tel:+971523317180"
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
      content: "Al Taleb Building, Ras Al Khaimah, UAE",
      link: "#"
    },
    {
      icon: <FaBuilding className="icon" />,
      title: "Business Hours",
      content: "Mon - Sat: 9:00 AM - 7:00 PM",
      link: "#"
    }
   
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setShowError(false);
    setShowSuccess(false);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'soutavr5@gmail.com'
      };

      await emailjs.send(
        'service_c4web4j',
        'template_6a3fv0t',
        templateParams,
        'wS4oA3THwsxPutQPs' // Replace with your EmailJS public key
      );

      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setShowError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact-section" id={id}>
      <div className="content-wrapper">
        <div className="section-header">
          <h1>Contact Us</h1>
          <div className="underline"></div>
          <p>Get in touch with us today</p>
        </div>
        
        <div className="contact-container">
          <div className="contact-info-box">
            <h2>Contact Information</h2>
            <div className="info-items">
              {contactInfo.map(info => (
                <a
                  key={info.title}
                  href={info.link}
                  className="contact-item"
                >
                  <div className="icon-wrapper">
                    {info.icon}
                  </div>
                  <div className="info-content">
                    <h3>{info.title}</h3>
                    <p>{info.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit}>
              <h2>Send us a Message</h2>
              
              {showSuccess && (
                <div className="success-message">
                  <p>Message sent successfully! We'll get back to you soon.</p>
                </div>
              )}

              {showError && (
                <div className="error-message">
                  <p>Failed to send message. Please try again later.</p>
                </div>
              )}
              
              <div className="input-group">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <FaComment className="input-icon" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" disabled={isLoading}>
                <FaPaperPlane />
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs; 