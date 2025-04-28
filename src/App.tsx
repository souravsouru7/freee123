import './App.scss';
import ProductSection from './components/ProductSection';
import Hero from './components/Hero/Hero'
import AboutUs from './components/AboutUs/AboutUs'
import ContactUs from './components/ContactUs/ContactUs'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import FloatingButtons from './components/FloatingButtons/FloatingButtons'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import BrandSlider from './components/BrandSlider/BrandSlider'

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Reset scroll position to top when component mounts
    window.scrollTo(0, 0);
    
    // Prevent scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div className="App">
      <LoadingScreen />
      <Hero />
      <AboutUs id="about" />
      <BrandSlider />
      <ProductSection />
      <ContactUs id="contact-us" />
      <FAQ />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App; 