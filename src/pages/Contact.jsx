import React, { useState } from 'react';

const ContactHero = () => {
  return (
    <section className="relative bg-primary text-white">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-secondary">Touch</span>
          </h1>
          <p className="text-xl mb-8">
            Have questions about our services or ready to schedule a cleaning? Contact us today for a free quote.
          </p>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to Firebase
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="mb-8 text-gray-600">
              Fill out the form below and one of our team members will get back to you as soon as possible.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block mb-2 font-medium">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a service</option>
                  <option value="cleaning">Solar Panel Cleaning</option>
                  <option value="inspection">System Inspection</option>
                  <option value="pest-guard">Animal/Pest Guard Installation</option>
                  <option value="bug-guard">Bug Guard Treatment</option>
                  <option value="maintenance">Maintenance Plan</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-neutral-light p-8 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-600">Utah & California</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">info@shinesolarservices.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-medium">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 8am - 6pm</p>
                    <p className="text-gray-600">Saturday: 9am - 4pm</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-primary text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Service Areas</h3>
              <p className="mb-4">
                We currently provide services throughout Utah and California, with plans to expand to additional states in the Western United States.
              </p>
              <h4 className="font-medium mb-2">Primary Service Locations:</h4>
              <ul className="space-y-1 mb-4">
                <li>• Salt Lake City, UT</li>
                <li>• Provo, UT</li>
                <li>• Ogden, UT</li>
                <li>• Los Angeles, CA</li>
                <li>• San Diego, CA</li>
                <li>• Sacramento, CA</li>
              </ul>
              <p>
                Don't see your location? Contact us to check if we service your area.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  return (
    <section className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our solar panel cleaning and maintenance services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <FAQItem
            question="How often should I clean my solar panels?"
            answer="For optimal performance, we recommend cleaning your solar panels at least twice a year. However, the frequency may vary depending on your location, surrounding environment, and weather conditions. Areas with high pollen, dust, or bird activity may require more frequent cleaning."
          />
          <FAQItem
            question="Will cleaning my solar panels really improve their efficiency?"
            answer="Yes, absolutely. Studies show that dirty solar panels can lose 15-25% of their efficiency. Regular cleaning removes dirt, dust, pollen, bird droppings, and other debris that block sunlight from reaching the photovoltaic cells, resulting in improved energy production and system performance."
          />
          <FAQItem
            question="Is it safe to clean solar panels myself?"
            answer="While it's possible to clean solar panels yourself, we don't recommend it. DIY cleaning can be dangerous due to roof access risks, and improper cleaning methods or tools can damage your expensive solar investment. Our professional technicians are trained, insured, and use specialized equipment to safely and effectively clean your panels."
          />
          <FAQItem
            question="What cleaning methods do you use?"
            answer="We use specialized water-fed pole systems with soft brushes and purified water to gently remove dirt and debris without damaging your panels. Our cleaning solutions are eco-friendly and safe for both your solar system and the environment."
          />
          <FAQItem
            question="Do you offer warranties or guarantees?"
            answer="Yes, we stand behind our work. Our basic cleaning package includes a 30-day guarantee, our premium package includes a 90-day guarantee, and our complete protection package includes a 1-year warranty on installations. If you're not satisfied with our service, we'll return to address any issues at no additional cost."
          />
          <FAQItem
            question="What are the benefits of your animal/pest guard installation?"
            answer="Our animal/pest guard installation prevents birds, squirrels, rodents, and other animals from nesting under your solar panels. This protects your system from potential damage to wiring and components, prevents fire hazards, and eliminates the mess and health risks associated with animal nests."
          />
          <FAQItem
            question="How do I schedule a service appointment?"
            answer="Scheduling is easy! You can request a quote through our website, call our customer service line, or email us. We'll arrange a convenient time for your service and provide you with a confirmation and reminder."
          />
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <FAQSection />
    </div>
  );
};

export default Contact;
