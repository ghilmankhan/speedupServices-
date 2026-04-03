import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedPartners from './components/TrustedPartners';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import WhyChooseUs from './components/WhyChooseUs';
import ClientReviews from './components/ClientReviews';
import Compliance from './components/Compliance';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import { LanguageProvider } from './i18n';

// Main Application Component
export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <TrustedPartners />
          <About />
          <Services />
          <Industries />
          <WhyChooseUs />
          <ClientReviews />
          <Compliance />
          <QuoteForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
