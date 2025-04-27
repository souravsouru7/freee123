import './App.scss';
import ProductSection from './components/ProductSection';

import Hero from './components/Hero/Hero'
import AboutUs from './components/AboutUs/AboutUs'
import ContactUs from './components/ContactUs/ContactUs'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
     
      <Hero />
      <AboutUs />
      <ProductSection />
      <ContactUs />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App; 