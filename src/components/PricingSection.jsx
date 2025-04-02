import React from 'react';

const PricingCard = ({ title, price, features, isPopular, buttonText }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${isPopular ? 'border-2 border-secondary' : ''}`}>
      {isPopular && (
        <div className="bg-secondary text-white text-center py-2 font-medium">
          Most Popular
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold">${price}</span>
        </div>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-secondary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button className={`w-full py-3 rounded-md font-medium transition-all duration-300 ${isPopular ? 'bg-secondary text-white hover:bg-secondary-light' : 'bg-primary text-white hover:bg-primary-light'}`}>
          {buttonText || 'Get Started'}
        </button>
      </div>
    </div>
  );
};

const PricingSection = () => {
  return (
    <section className="section bg-neutral-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect cleaning package for your solar panel system.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard 
            title="Basic Cleaning Package"
            price="149"
            features={[
              "Up to 10 panels",
              "Removal of dirt and debris",
              "Basic performance check",
              "Before and after photos",
              "30-day guarantee"
            ]}
            buttonText="Get Quote"
          />
          
          <PricingCard 
            title="Premium Cleaning & Inspection"
            price="199"
            features={[
              "Up to 10 panels",
              "Deep cleaning and polishing",
              "Comprehensive system inspection",
              "Performance report",
              "90-day guarantee",
              "Priority scheduling"
            ]}
            isPopular={true}
            buttonText="Get Quote"
          />
          
          <PricingCard 
            title="Complete Protection Package"
            price="299"
            features={[
              "Up to 10 panels",
              "Premium cleaning & inspection",
              "Animal/Pest guard installation",
              "Bug guard treatment",
              "1-year warranty on installations",
              "15% discount on future services"
            ]}
            buttonText="Get Quote"
          />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need a custom solution for larger systems?</p>
          <a href="/contact" className="btn btn-outline">Contact Us for Custom Pricing</a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
