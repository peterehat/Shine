import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-light text-white">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What solar can make <span className="text-secondary">shine.</span>
          </h1>
          <p className="text-xl mb-8">
            Professional solar panel cleaning and maintenance services to maximize your energy production and extend the life of your investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn btn-secondary">
              Get a Free Quote
            </Link>
            <Link to="/services" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary">
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
