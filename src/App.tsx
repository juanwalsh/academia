import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Modalities from './components/Modalities';
import Gallery from './components/Gallery';
import Results from './components/Results';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  return (
    // MUDANÇA AQUI: Adicionado 'relative', 'w-full' e 'overflow-x-hidden'
    <div className="relative w-full bg-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Modalities />
      <Gallery />
      <Results />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;