import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-primary font-heading text-2xl font-bold">Shine Solar</span>
            <span className="text-secondary font-heading text-2xl font-bold">Services</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-neutral-dark hover:text-primary font-medium">Home</Link>
            <Link to="/about" className="text-neutral-dark hover:text-primary font-medium">About</Link>
            <Link to="/services" className="text-neutral-dark hover:text-primary font-medium">Services</Link>
            <Link to="/pricing" className="text-neutral-dark hover:text-primary font-medium">Pricing</Link>
            <Link to="/contact" className="text-neutral-dark hover:text-primary font-medium">Contact</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-neutral-dark hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-neutral-dark hover:text-primary font-medium py-2">Home</Link>
              <Link to="/about" className="text-neutral-dark hover:text-primary font-medium py-2">About</Link>
              <Link to="/services" className="text-neutral-dark hover:text-primary font-medium py-2">Services</Link>
              <Link to="/pricing" className="text-neutral-dark hover:text-primary font-medium py-2">Pricing</Link>
              <Link to="/contact" className="text-neutral-dark hover:text-primary font-medium py-2">Contact</Link>
              <Link to="/contact" className="btn btn-primary text-center mt-2">Get a Quote</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
