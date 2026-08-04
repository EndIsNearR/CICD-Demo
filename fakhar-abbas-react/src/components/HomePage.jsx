import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ image, title, description, imageAlt, imageClass = "w-full h-80 object-cover object-center" }) => {
  return (
    <div className="flex flex-col gap-6 group animate-fade-in-up">
      <div className="overflow-hidden rounded-lg bg-black border border-gray-800">
        <img 
          src={image} 
          alt={imageAlt}
          className={`${imageClass} transition-transform duration-500 group-hover:scale-110`}
          loading="lazy"
          style={{
            imageRendering: '-webkit-optimize-contrast',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        />
      </div>
      <div className="text-left bg-gray-900 p-6 rounded-lg border border-gray-800">
        <h3 className="text-white text-xl font-medium mb-3 leading-tight transition-colors duration-300 group-hover:text-gray-300">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed transition-all duration-300 group-hover:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

const FeatureCard = ({ image, title, description, buttonText, buttonLink, imageAlt, imageClass = "w-full h-96 object-cover", reverse = false }) => {
  return (
    <div className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center group animate-fade-in-up ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className="w-full lg:w-1/2">
        <div className="overflow-hidden rounded-lg bg-black border border-gray-800">
          <img 
            src={image} 
            alt={imageAlt}
            className={`${imageClass} transition-transform duration-700 group-hover:scale-105`}
            loading="lazy"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="text-left bg-gray-900 p-8 rounded-lg border border-gray-800">
          <h3 className="text-white text-2xl font-medium mb-5 leading-tight transition-colors duration-300 group-hover:text-gray-300">
            {title}
          </h3>
          <p className="text-gray-400 leading-relaxed mb-6 transition-all duration-300 group-hover:text-gray-300">
            {description}
          </p>
          {buttonText && buttonLink && (
            <Link 
              to={buttonLink}
              className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-7 py-3 rounded-md font-medium transition-all duration-300 text-sm hover:scale-105 hover:shadow-lg pulse-soft border border-gray-600"
            >
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ content, name, image, imageAlt }) => {
  return (
    <div className="text-center max-w-4xl mx-auto group animate-fade-in-up">
      <div className="mb-8">
        <p className="text-white text-xl lg:text-2xl leading-relaxed transition-all duration-500 group-hover:text-yellow-50 group-hover:scale-105">
          {content}
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 transition-transform duration-300 group-hover:scale-110">
          <img 
            src={image} 
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="text-white font-medium transition-colors duration-300 group-hover:text-yellow-100">
          {name}
        </div>
      </div>
    </div>
  );
};

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-gray-800 hover:bg-gray-700 text-white w-12 h-12 rounded-md flex items-center justify-center transition-all duration-300 shadow-lg z-50 hover:scale-110 hover:shadow-xl pulse-soft border border-gray-600"
      aria-label="Scroll to top"
    >
      <svg className="w-4 h-4 rotate-180 transition-transform duration-300" fill="currentColor" viewBox="0 0 26 16.043">
        <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"/>
      </svg>
    </button>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col page-transition">
      {/* Hero Section */}
      <section 
        className="relative bg-black bg-cover bg-center pt-48 lg:pt-52 pb-44 lg:pb-48 px-6 lg:px-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(20, 20, 20, 0.8)), url('/images/drilling.jpg')`
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-white text-4xl lg:text-6xl font-medium mb-5 leading-tight animate-fade-in-up">
              Building Your Vision
            </h1>
            <p className="text-gray-300 text-lg lg:text-xl leading-relaxed mb-8 animate-fade-in-up animate-delay-200">
              Premier construction services with a commitment to quality and safety for major projects in the UAE.
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-md font-medium transition-all duration-300 text-lg hover:scale-105 hover:shadow-xl animate-fade-in-up animate-delay-300 pulse-soft"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-950 py-20 lg:py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-white text-3xl lg:text-4xl font-medium mb-4 leading-tight animate-fade-in-up">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
              Discover our range of expert services tailored to meet the diverse needs of the construction and oil & gas sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-12 lg:mt-16">
            <div className="animate-delay-100">
              <ServiceCard
                image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
                imageAlt="Team of construction workers in safety helmets and vests working on a building site"
                title="Manpower Supply"
                description="We provide highly skilled and unskilled labor tailored to your project's specific requirements. Our team ensures that you have the right workforce at the right time."
                imageClass="w-full h-80 object-cover object-center service-image"
              />
            </div>
            
            <div className="animate-delay-200">
              <ServiceCard
                image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                imageAlt="Modern construction site with crane and building development in progress"
                title="General Contracting"
                description="Our general contracting services encompass all aspects of construction, delivering excellent quality and adherence to timelines without compromising safety standards."
                imageClass="w-full h-80 object-cover object-center service-image"
              />
            </div>
            
            <div className="animate-delay-300">
              <ServiceCard
                image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                imageAlt="Professional maintenance worker cleaning and maintaining industrial facility equipment"
                title="Cleaning Services"
                description="Professional building cleaning services that ensure a safe and pristine environment for construction sites and completed projects, enhancing your reputation and functionality."
                imageClass="w-full h-80 object-cover object-center service-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-black py-20 lg:py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center group">
            <div className="w-full lg:w-1/2 animate-slide-in-left">
              <div className="overflow-hidden rounded-lg bg-gray-900 p-2">
                <img 
                  src="/images/FakharAbbas.jpg" 
                  alt="Fakhar Abbas Group team member"
                  className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105 rounded"
                  style={{ objectPosition: 'center top' }}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 animate-slide-in-right">
              <div className="text-left">
                <h2 className="text-white text-3xl lg:text-4xl font-medium mb-6 leading-tight transition-colors duration-300 group-hover:text-gray-300">
                  The Inspiring Journey of Fakhar Abbas
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 transition-all duration-300 group-hover:text-gray-300">
                  With over a decade of experience, Fakhar Abbas Group has established itself as a leading construction service provider in the UAE. Our expertise spans various sectors, including construction and oil & gas, where we ensure the highest standards of quality and safety. We are proud to contribute our manpower supply and contracting services to high-profile projects, enhancing the infrastructure of the region.
                </p>
                <Link 
                  to="/about"
                  className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-7 py-3 rounded-md font-medium transition-all duration-300 text-sm hover:scale-105 hover:shadow-lg pulse-soft"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-950 py-20 lg:py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-white text-3xl lg:text-4xl font-medium mb-4 leading-tight animate-fade-in-up">
              Why Choose Fakhar Abbas Group For Your Needs?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
              Our commitment to excellence is showcased through our reliability, extensive expertise, and dedication to continuous improvement, ensuring client satisfaction with every project.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-20 mt-12 lg:mt-16">
            <div className="animate-delay-100">
              <FeatureCard
                image="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                imageAlt="Professional business team reviewing construction plans and blueprints in a modern office"
                title="Reliability You Can Trust"
                description="Our clients return to us time and again because of our reliability in delivering quality services on schedule. We build lasting partnerships based on trust."
                buttonText="Learn More"
                buttonLink="/offerings"
              />
            </div>
            
            <div className="animate-delay-200">
              <FeatureCard
                image="/images/entrepreneur-startup-start-up-man-39866-39866.jpg"
                imageAlt="A young man in glasses writes in a notebook while sitting on a stylish couch indoors."
                title="Expertise in Action"
                description="With over a decade of experience, we leverage our extensive expertise to tackle challenges and drive projects forward efficiently, ensuring client satisfaction."
                buttonText="Learn More"
                buttonLink="/offerings"
                reverse={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="relative bg-black bg-cover bg-center py-20 lg:py-24 px-6 lg:px-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(20, 20, 20, 0.8)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-white text-3xl lg:text-4xl font-medium mb-5 leading-tight animate-fade-in-up">
              Connect With Us Today
            </h2>
            <p className="text-white text-lg leading-relaxed mb-8 animate-fade-in-up animate-delay-200">
              Reach out now to discuss your construction needs and discover how we can bring your vision to life with our expert services.
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-md font-medium transition-all duration-300 text-lg hover:scale-105 hover:shadow-xl animate-fade-in-up animate-delay-300 pulse-soft"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default HomePage;
