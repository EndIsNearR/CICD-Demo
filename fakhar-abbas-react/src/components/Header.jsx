import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const NavLink = ({ to, children, className = "", mobile = false }) => (
    <Link 
      to={to} 
      className={`${className} ${isActiveLink(to) ? 'text-white' : ''} ${mobile ? 'block' : ''}`}
      onClick={mobile ? () => setIsMobileMenuOpen(false) : undefined}
    >
      {children}
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-lg border-b border-gray-800 animate-fade-in" id="masthead">
      {/* Desktop Header */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex items-center animate-slide-in-left">
              <div className="flex items-center text-white text-2xl font-semibold">
                <Link to="/" className="flex items-center hover:text-gray-300 transition-all duration-300 hover:scale-105">
                  <img 
                    src="/images/logo.png" 
                    alt="Fakhar Abbas Group Logo" 
                    className="h-8 w-8 mr-3"
                  />
                  FakharAbbas
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 animate-fade-in-up animate-delay-200">
              <NavLink to="/" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Home</NavLink>
              <NavLink to="/about" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">About</NavLink>
              <NavLink to="/offerings" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Offerings</NavLink>
              <NavLink to="/clients" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Clients</NavLink>
              <NavLink to="/contact" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Contact</NavLink>
            </nav>

            {/* CTA Button */}
            <div className="ml-6 animate-slide-in-right animate-delay-300">
              <Link 
                to="/contact" 
                className="bg-gray-800 hover:bg-gray-700 text-white px-7 py-4 rounded-md font-medium transition-all duration-300 border-2 border-gray-800 hover:border-gray-700 hover:scale-105 hover:shadow-lg pulse-soft"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden">
        <div className="px-5 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Logo */}
            <div className="flex items-center text-white text-xl font-semibold animate-slide-in-left">
              <Link to="/" className="flex items-center hover:text-gray-300 transition-all duration-300 hover:scale-105">
                <img 
                  src="/images/logo.png" 
                  alt="Fakhar Abbas Group Logo" 
                  className="h-6 w-6 mr-2"
                />
                FakharAbbas
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2 rounded-md border border-gray-600 hover:bg-gray-800 transition-all duration-300 hover:scale-110 animate-slide-in-right"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Main Menu</span>
              {!isMobileMenuOpen ? (
                <svg className="w-4 h-4 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"/>
                </svg>
              ) : (
                <svg className="w-4 h-4 transition-transform duration-300 rotate-180" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="bg-black border-t border-gray-800 animate-fade-in-up">
            <nav className="px-5 py-4 space-y-1">
              <NavLink to="/" mobile className="text-gray-300 hover:text-white hover:bg-gray-900 px-8 py-3 rounded-md transition-all duration-300 hover:scale-105 animate-slide-in-left">Home</NavLink>
              <NavLink to="/about" mobile className="text-gray-300 hover:text-white hover:bg-gray-900 px-8 py-3 rounded-md transition-all duration-300 hover:scale-105 animate-slide-in-left animate-delay-100">About</NavLink>
              <NavLink to="/offerings" mobile className="text-gray-300 hover:text-white hover:bg-gray-900 px-8 py-3 rounded-md transition-all duration-300 hover:scale-105 animate-slide-in-left animate-delay-200">Offerings</NavLink>
              <NavLink to="/clients" mobile className="text-gray-300 hover:text-white hover:bg-gray-900 px-8 py-3 rounded-md transition-all duration-300 hover:scale-105 animate-slide-in-left animate-delay-300">Clients</NavLink>
              <NavLink to="/contact" mobile className="text-gray-300 hover:text-white hover:bg-gray-900 px-8 py-3 rounded-md transition-all duration-300 hover:scale-105 animate-slide-in-left animate-delay-400">Contact</NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
