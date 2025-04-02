import React from 'react';
import PricingSection from '../components/PricingSection';
import CTASection from '../components/CTASection';

const PricingHero = () => {
  return (
    <section className="relative bg-primary text-white">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transparent <span className="text-secondary">Pricing</span>
          </h1>
          <p className="text-xl mb-8">
            Simple, affordable pricing packages designed to maximize the performance and longevity of your solar investment.
          </p>
        </div>
      </div>
    </section>
  );
};

const ComparisonTable = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Package Comparison</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Compare our service packages to find the perfect fit for your needs.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-4 text-left">Features</th>
                <th className="p-4 text-center">Basic Cleaning</th>
                <th className="p-4 text-center bg-secondary">Premium Cleaning & Inspection</th>
                <th className="p-4 text-center">Complete Protection</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-medium">Panel Cleaning</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center bg-neutral-light">✓</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Debris Removal</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center bg-neutral-light">✓</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Performance Check</td>
                <td className="p-4 text-center">Basic</td>
                <td className="p-4 text-center bg-neutral-light">Comprehensive</td>
                <td className="p-4 text-center">Comprehensive</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">System Inspection</td>
                <td className="p-4 text-center">-</td>
                <td className="p-4 text-center bg-neutral-light">✓</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Performance Report</td>
                <td className="p-4 text-center">-</td>
                <td className="p-4 text-center bg-neutral-light">✓</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Animal/Pest Guard</td>
                <td className="p-4 text-center">-</td>
                <td className="p-4 text-center bg-neutral-light">-</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Bug Guard Treatment</td>
                <td className="p-4 text-center">-</td>
                <td className="p-4 text-center bg-neutral-light">-</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Guarantee</td>
                <td className="p-4 text-center">30 days</td>
                <td className="p-4 text-center bg-neutral-light">90 days</td>
                <td className="p-4 text-center">1 year</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Future Discounts</td>
                <td className="p-4 text-center">-</td>
                <td className="p-4 text-center bg-neutral-light">5%</td>
                <td className="p-4 text-center">15%</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Starting Price (Small System)</td>
                <td className="p-4 text-center font-bold">$149</td>
                <td className="p-4 text-center font-bold bg-neutral-light">$199</td>
                <td className="p-4 text-center font-bold">$299</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const SubscriptionPlans = () => {
  return (
    <section className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Maintenance Subscription Plans</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Save with our regular maintenance plans and keep your solar system performing at its best year-round.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Quarterly Service</h3>
              <p className="text-gray-600 mb-6">
                Ideal for areas with high dust, pollen, or bird activity. Ensures consistent performance throughout the year.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>4 cleanings per year</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>15% discount on regular pricing</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Priority scheduling</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Quarterly performance reports</span>
                </li>
              </ul>
              <a href="/contact" className="btn btn-primary w-full text-center">Get Started</a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Bi-annual Service</h3>
              <p className="text-gray-600 mb-6">
                Perfect for most residential systems. Scheduled before summer and winter for optimal seasonal performance.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>2 cleanings per year</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>10% discount on regular pricing</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Scheduled maintenance reminders</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Semi-annual performance reports</span>
                </li>
              </ul>
              <a href="/contact" className="btn btn-primary w-full text-center">Get Started</a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Annual Service</h3>
              <p className="text-gray-600 mb-6">
                Basic maintenance option for systems in areas with minimal environmental factors affecting performance.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>1 cleaning per year</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>5% discount on regular pricing</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Annual maintenance reminder</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Annual performance report</span>
                </li>
              </ul>
              <a href="/contact" className="btn btn-primary w-full text-center">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <div>
      <PricingHero />
      <PricingSection />
      <ComparisonTable />
      <SubscriptionPlans />
      <CTASection />
    </div>
  );
};

export default Pricing;
