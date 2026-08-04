import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const OfferingsPage = () => {
  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [serviceRef, serviceInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [whyChooseRef, whyChooseInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [ctaRef, ctaInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`relative min-h-screen flex items-center justify-center bg-black transition-all duration-1000 ${
          heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundPosition: 'center left',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="relative z-10 text-center px-8 md:px-12 lg:px-20 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-medium mb-6 leading-tight">
            Our Services
          </h1>
        </div>
      </section>

      {/* Services Introduction Section */}
      <section 
        ref={serviceRef}
        className={`py-20 md:py-24 lg:py-32 bg-black transition-all duration-1000 delay-200 ${
          serviceInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-20">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-medium text-white mb-6">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our range of expert services tailored to meet the diverse needs of the construction and oil & gas sectors.
            </p>
          </div>

          {/* Service 1 - Manpower Supply */}
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Construction worker in safety gear handling equipment on an active site"
                className="w-full h-80 md:h-96 lg:h-[500px] object-cover rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-5xl md:text-6xl font-outfit font-medium text-gray-400 block mb-6">01</span>
              <h3 className="text-2xl md:text-3xl font-outfit font-medium text-white mb-6">
                Manpower Supply
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We specialize in manpower supply, providing over 1,500 skilled and unskilled workers to complete projects efficiently. Our team is trained to meet industry standards while ensuring safety and quality at the workplace.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 border border-gray-600"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Service 2 - General Contracting */}
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20">
            <div>
              <span className="text-5xl md:text-6xl font-outfit font-medium text-gray-400 block mb-6">02</span>
              <h3 className="text-2xl md:text-3xl font-outfit font-medium text-white mb-6">
                General Contracting
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                As a leading general contractor, we manage construction projects from start to finish. Our expertise spans various sectors, ensuring timely delivery and adherence to client specifications without compromising quality.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 border border-gray-600"
              >
                Get Started
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Professional handshake symbolizing agreement and partnership"
                className="w-full h-80 md:h-96 lg:h-[500px] object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Service 3 - Cleaning Services */}
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Person in protective suit using disinfectant to ensure cleanliness and safety"
                className="w-full h-80 md:h-96 lg:h-[500px] object-cover rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-5xl md:text-6xl font-outfit font-medium text-gray-400 block mb-6">03</span>
              <h3 className="text-2xl md:text-3xl font-outfit font-medium text-white mb-6">
                Cleaning Services
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Our building cleaning services ensure that your construction sites and facilities are maintained to the highest standards. We focus on efficiency and detail, providing a clean and safe environment for all projects.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 border border-gray-600"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section 
        ref={whyChooseRef}
        className={`py-20 md:py-24 lg:py-32 bg-black transition-all duration-1000 delay-300 ${
          whyChooseInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-20">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-medium text-white mb-6">
              Why Choose Fakhar Abbas Group For Your Needs?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our commitment to excellence is showcased through our reliability, extensive expertise, and dedication to continuous improvement, ensuring client satisfaction with every project.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Reliability */}
            <div className="text-center md:text-left">
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Diverse group of colleagues demonstrating teamwork and unity"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-outfit font-medium text-white mb-4">
                Reliability You Can Trust
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our clients return to us time and again because of our reliability in delivering quality services on schedule. We build lasting partnerships based on trust.
              </p>
            </div>

            {/* Expertise */}
            <div className="text-center md:text-left">
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"   
                  alt="Experienced construction engineer reviewing blueprints and technical specifications on site"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-outfit font-medium text-white mb-4">
                Expertise in Action
              </h3>
              <p className="text-gray-300 leading-relaxed">
                With over a decade of experience, we leverage our extensive expertise to tackle challenges and drive projects forward efficiently, ensuring client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section 
        ref={ctaRef}
        className={`py-20 md:py-24 lg:py-32 relative transition-all duration-1000 delay-400 ${
          ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-medium text-white mb-6">
            Connect With Us Today
          </h2>
          <p className="text-lg md:text-xl text-white mb-10 leading-relaxed max-w-3xl mx-auto">
            Reach out now to discuss your construction needs and discover how we can bring your vision to life with our expert services.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-10 py-4 rounded-md font-medium text-lg transition-all duration-300 transform hover:scale-105 border border-gray-600"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OfferingsPage;
