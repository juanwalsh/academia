import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Modalities from './components/Modalities';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Modalities />
      <Gallery />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
