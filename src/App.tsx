import StarField from './components/StarField';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      {/* Fixed Star Field Background */}
      <StarField />

      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative" style={{ zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </>
  );
}

export default App;
