import './App.scss';
import ProductSection from './components/ProductSection';
import Hero from './components/Hero/Hero'
import AboutUs from './components/AboutUs/AboutUs'
import ContactUs from './components/ContactUs/ContactUs'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import FloatingButtons from './components/FloatingButtons/FloatingButtons'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'

function App() {
  return (
    <div className="App">
      <LoadingScreen />
      <Hero />
      <AboutUs />
      <ProductSection />
      <ContactUs />
      <FAQ />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App; 