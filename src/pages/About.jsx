import React from 'react';

const AboutHero = () => {
  return (
    <section className="relative bg-primary text-white">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Passionate <span className="text-secondary">and sustainable</span>
          </h1>
          <p className="text-xl mb-8">
            We are proud to offer a wide range of solar energy services, including solar panel installation, maintenance, and repair.
          </p>
        </div>
      </div>
    </section>
  );
};

const AboutContent = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="mb-4">
              Shine Solar Services was founded by a father-son team with direct experience in the solar industry. Tyler, with his background in solar panel sales and customer retention at Lgcy Power, brings valuable industry knowledge and connections.
            </p>
            <p className="mb-4">
              We started with a simple mission: to help solar panel owners maximize their investment through professional cleaning and maintenance services. We recognized that while many companies focus on installation, few provide the ongoing care needed to ensure optimal performance.
            </p>
            <p>
              Today, we serve residential and commercial customers throughout Utah and California, with plans to expand our reach across the Western United States. Our commitment to quality service, technical expertise, and customer satisfaction has made us a trusted name in solar panel maintenance.
            </p>
          </div>
          <div className="bg-neutral-light p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="mb-6">
              To become the premier solar panel maintenance company in the Western United States, recognized for exceptional service quality, technical expertise, and customer satisfaction.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p>
              To maximize the performance and longevity of solar energy systems through professional cleaning and maintenance services, helping customers optimize their renewable energy investments while building a scalable, profitable business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  return (
    <section className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated professionals behind Shine Solar Services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Tyler</h3>
              <p className="text-secondary font-medium mb-4">Co-Founder & Operations Director</p>
              <p className="text-gray-600">
                With extensive experience in solar panel sales and customer retention at Lgcy Power, Tyler brings industry knowledge and connections that drive our business growth. He oversees day-to-day operations and service delivery.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">[Client Name]</h3>
              <p className="text-secondary font-medium mb-4">Co-Founder & Business Development</p>
              <p className="text-gray-600">
                Focusing on strategic growth and business development, [Client Name] brings entrepreneurial vision and management expertise to the company. He leads our expansion efforts and long-term business planning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ValuesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do at Shine Solar Services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-primary mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Quality & Integrity</h3>
            <p className="text-gray-600">
              We deliver exceptional service with honesty and transparency. We stand behind our work and always do what's right for our customers.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-primary mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Innovation</h3>
            <p className="text-gray-600">
              We continuously seek better ways to serve our customers, embracing new technologies and methods to improve solar panel performance.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-primary mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Environmental Stewardship</h3>
            <p className="text-gray-600">
              We're committed to sustainable practices that protect our planet. Our eco-friendly cleaning methods and products minimize environmental impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutContent />
      <TeamSection />
      <ValuesSection />
      <Stats />
      <CTASection />
    </div>
  );
};

export default About;
