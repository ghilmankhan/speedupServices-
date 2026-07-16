import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LanguageProvider } from './i18n';

const TrustedPartners = lazy(() => import('./components/TrustedPartners'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Industries = lazy(() => import('./components/Industries'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const ClientReviews = lazy(() => import('./components/ClientReviews'));
const Compliance = lazy(() => import('./components/Compliance'));
const QuoteForm = lazy(() => import('./components/QuoteForm'));
const Footer = lazy(() => import('./components/Footer'));

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
          <Suspense fallback={null}>
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
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <ErrorBoundary sectionName="Footer">
            <Footer />
          </ErrorBoundary>
        </Suspense>
      </div>
    </LanguageProvider>
  );
}
