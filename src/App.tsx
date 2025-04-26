import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import AboutUs from './components/AboutUs/AboutUs'
import ProductSection from './components/ProductSection/ProductSection'

import './App.scss'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <AboutUs />
      <ProductSection />
    </div>
  )
}

export default App 