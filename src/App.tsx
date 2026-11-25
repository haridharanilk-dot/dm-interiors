import Nav from './components/Nav';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Hero from './components/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Works from './sections/Works';
import WhyProcessCta from './sections/WhyProcessCta';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-paper focus:px-4 focus:py-2">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Works />
        <WhyProcessCta />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
