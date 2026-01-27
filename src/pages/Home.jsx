import React from 'react';
import Hero from '../components/Hero';
import QuickActions from '../components/QuickActions';
import ClinicalExcellence from '../components/ClinicalExcellence';
import NewsSection from '../components/NewsSection';

const Home = () => {
  return (
    <>
      <Hero />
      <QuickActions />
      <ClinicalExcellence />
      <NewsSection />
    </>
  );
};

export default Home;
