import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to maximize your solar investment?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Schedule a free consultation today and discover how our professional cleaning and maintenance services can improve your system's performance.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact" className="btn btn-secondary">
            Get a Free Quote
          </Link>
          <Link to="/services" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
