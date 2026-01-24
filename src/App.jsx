import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickActions from './components/QuickActions';
import ClinicalExcellence from './components/ClinicalExcellence';
import WhyChooseApollo from './components/WhyChooseApollo';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 font-sans text-gray-900">
      <Header />
      <main>
        <Hero />
        <QuickActions />
        <ClinicalExcellence />
        <WhyChooseApollo />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
