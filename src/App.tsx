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
import { ErrorBoundary } from './components/ErrorBoundary';
import { LanguageProvider } from './i18n';

// Main Application Component
export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <ErrorBoundary sectionName="Navbar">
          <Navbar />
        </ErrorBoundary>
        <main>
          <ErrorBoundary sectionName="Hero">
            <Hero />
          </ErrorBoundary>
          <ErrorBoundary sectionName="About">
            <About />
          </ErrorBoundary>
          <ErrorBoundary sectionName="Services">
            <Services />
          </ErrorBoundary>
          <ErrorBoundary sectionName="Industries">
            <Industries />
          </ErrorBoundary>
          <ErrorBoundary sectionName="WhyChooseUs">
            <WhyChooseUs />
          </ErrorBoundary>
          <ErrorBoundary sectionName="TrustedPartners">
            <TrustedPartners />
          </ErrorBoundary>
          <ErrorBoundary sectionName="ClientReviews">
            <ClientReviews />
          </ErrorBoundary>
          <ErrorBoundary sectionName="Compliance">
            <Compliance />
          </ErrorBoundary>
          <ErrorBoundary sectionName="QuoteForm">
            <QuoteForm />
          </ErrorBoundary>
        </main>
        <ErrorBoundary sectionName="Footer">
          <Footer />
        </ErrorBoundary>
      </div>
    </LanguageProvider>
  );
}
