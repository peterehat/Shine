import React from 'react';

const ServiceDetail = ({ title, description, features, image, reverse }) => {
  return (
    <div className={`py-12 ${reverse ? 'bg-neutral-light' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
          <div>
            <h2 className="text-3xl font-bold mb-6">{title}</h2>
            <p className="mb-6 text-gray-600">{description}</p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-secondary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            {/* Placeholder for actual image */}
            <p className="text-gray-500">Service Image</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesHero = () => {
  return (
    <section className="relative bg-primary text-white">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-secondary">Services</span>
          </h1>
          <p className="text-xl mb-8">
            Comprehensive solar panel cleaning and maintenance services to maximize your energy production and protect your investment.
          </p>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <div>
      <ServicesHero />
      
      <ServiceDetail 
        title="Solar Panel Cleaning"
        description="Professional cleaning to remove dirt, dust, pollen, bird droppings, and other debris that reduce your system's energy production. Our specialized cleaning methods ensure your panels operate at peak efficiency."
        features={[
          "Safe, eco-friendly cleaning solutions",
          "Specialized equipment to prevent damage",
          "Before and after performance measurements",
          "Detailed inspection report",
          "Satisfaction guarantee"
        ]}
        reverse={false}
      />
      
      <ServiceDetail 
        title="System Inspection"
        description="Comprehensive examination of your entire solar system to identify potential issues before they become costly problems. Our technicians check for loose connections, damaged panels, and other maintenance needs."
        features={[
          "Panel-by-panel visual inspection",
          "Electrical connection check",
          "Mounting hardware inspection",
          "Performance analysis",
          "Detailed report with recommendations"
        ]}
        reverse={true}
      />
      
      <ServiceDetail 
        title="Animal/Pest Guard Installation"
        description="Protective barriers installed around your solar panels to prevent animals from nesting underneath and causing damage to your system. Our metal mesh guards keep rodents and birds away while maintaining proper airflow."
        features={[
          "Custom-fitted metal mesh barriers",
          "Professional installation",
          "Prevents nesting and damage",
          "Maintains proper ventilation",
          "1-year warranty on installation"
        ]}
        reverse={false}
      />
      
      <ServiceDetail 
        title="Bug Guard Treatment"
        description="Eco-friendly treatment applied to deter insects from building nests or damaging your solar installation. Our bug guard solution is safe for your panels and the environment."
        features={[
          "Environmentally safe formula",
          "Prevents insect nesting",
          "Protects wiring and connections",
          "Seasonal application options",
          "Compatible with all panel types"
        ]}
        reverse={true}
      />
      
      <ServiceDetail 
        title="Maintenance Plans"
        description="Regular scheduled maintenance to keep your solar system operating at maximum efficiency year-round. Our subscription plans provide peace of mind and consistent performance."
        features={[
          "Quarterly, bi-annual, or annual service options",
          "Priority scheduling",
          "Discounted pricing",
          "Regular performance reports",
          "Exclusive member benefits"
        ]}
        reverse={false}
      />
      
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Custom Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Need a specialized service not listed here? We offer custom solutions for unique solar installations and specific maintenance requirements.
          </p>
          <a href="/contact" className="btn btn-primary">Contact Us for Custom Services</a>
        </div>
      </section>
    </div>
  );
};

export default Services;
