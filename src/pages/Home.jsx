import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import PricingSection from '../components/PricingSection';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <Stats />
      <Testimonials />
      <PricingSection />
      <CTASection />
    </div>
  );
};

export default Home;
