import React from 'react';

const TestimonialCard = ({ quote, author, role, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="text-gray-600 mb-6 flex-grow">{quote}</p>
        <div className="flex items-center mt-auto">
          <img src={image} alt={author} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h4 className="font-bold">{author}</h4>
            <p className="text-gray-500 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  // Placeholder images - in a real implementation, these would be actual customer photos
  const placeholderImage = "https://randomuser.me/api/portraits/men/1.jpg";
  const placeholderImage2 = "https://randomuser.me/api/portraits/women/1.jpg";
  const placeholderImage3 = "https://randomuser.me/api/portraits/men/2.jpg";
  
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Are Saying</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="The team was professional, knowledgeable and provided excellent service. They helped me understand the process and I was very pleased with the results."
            author="John Cooper"
            role="Homeowner"
            image={placeholderImage}
          />
          
          <TestimonialCard 
            quote="I highly recommend Shine Solar Services. Their excellent customer service and high-quality solar panel cleaning significantly improved my electricity bill and reduced my carbon footprint."
            author="Emma Howard"
            role="Residential Customer"
            image={placeholderImage2}
          />
          
          <TestimonialCard 
            quote="The team at Sunno was fantastic. They were prompt, professional, and did an amazing job cleaning our solar panels. We saw an immediate improvement in our system's performance."
            author="Michael Johnson"
            role="Business Owner"
            image={placeholderImage3}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
