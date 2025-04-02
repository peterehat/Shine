import React from 'react';

const Stats = () => {
  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-2">210+</h3>
            <p className="text-sm uppercase tracking-wider">Commercial Installations</p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-2">510+</h3>
            <p className="text-sm uppercase tracking-wider">Residential Customers</p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-2">18<span className="text-xl">MW</span></h3>
            <p className="text-sm uppercase tracking-wider">Power Produced</p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-2">15%</h3>
            <p className="text-sm uppercase tracking-wider">Efficiency Improvement</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
