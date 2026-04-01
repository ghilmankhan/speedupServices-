import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import VisionMission from './components/VisionMission';
import Industries from './components/Industries';
import WhyChooseUs from './components/WhyChooseUs';
import Compliance from './components/Compliance';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

// Main Application Component
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Services />
        <Industries />
        <WhyChooseUs />
        <Compliance />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}
