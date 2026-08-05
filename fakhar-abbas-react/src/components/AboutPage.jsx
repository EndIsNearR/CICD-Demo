import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const { ref: storyRef, inView: storyInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const { ref: valuesRef, inView: valuesInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const { ref: ctaRef, inView: ctaInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const ValueCard = ({ title, description, delay = 0 }) => (
    <div 
      className={`flex flex-col ${valuesInView ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-left">
        <h3 className="text-xl font-medium text-gray-300 mb-4 font-outfit">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen bg-black text-gray-300 ${isVisible ? 'page-transition' : ''}`}>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-8 font-outfit ${heroInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Fakhar Abbas virk
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-medium text-gray-300 mb-4 font-outfit ${storyInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
              The Inspiring Journey of Fakhar Abbas 
            </h2>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image */}
            <div className={`lg:w-1/2 ${storyInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <div className="relative">
                <img 
                  src="/images/FakharAbbas.jpg" 
                  alt="Fakhar Abbas" 
                  className="w-full h-96 lg:h-[500px] object-cover object-top rounded-lg shadow-2xl service-image"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className={`lg:w-1/2 space-y-6 ${storyInView ? 'animate-slide-in-right animate-delay-200' : 'opacity-0'}`}>
              <div>
                <h3 className="text-2xl font-medium text-gray-300 mb-6 font-outfit">
                  Founded in 2011sssssssssssssssssssssssssssssss, Fakhar Abbas Group has grown from a small operation to a trusted name in the construction industry. Our commitment to excellence drives us to deliver top-notch services in manpower supply, general contracting, and cleaning.
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Mr. Fakhar Abbas Virk established the company in Sharjah, bringing together a team dedicated to quality and safety from day one. Our journey reflects a steadfast focus on the needs of our clients.
                </p>
              </div>
              
              <div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We have had the privilege of serving esteemed clients, including major projects like the Abu Dhabi International Airport and the Expo 2020 Sustainability District, showcasing our capability and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section ref={valuesRef} className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-medium text-gray-300 mb-4 font-outfit ${valuesInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Core Values
            </h2>
            <p className={`text-gray-400 text-lg max-w-3xl mx-auto ${valuesInView ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
              Our core values define our commitment to excellence and drive us towards achieving outstanding performance in every project.
            </p>
          </div>
          
          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <ValueCard
              title="Integrity"
              description="We maintain the highest ethical standards in our business practices, fostering trust and transparency in all our relationships with clients and partners."
              delay={0}
            />
            <ValueCard
              title="Quality"
              description="Our dedication to quality ensures that every project meets the rigorous standards required, guaranteeing client satisfaction and project success."
              delay={200}
            />
            <ValueCard
              title="Safety"
              description="We prioritize safety in all aspects of our operations, ensuring a secure work environment for our teams and compliance with industry regulations."
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className="py-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2131&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className={`${ctaInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 font-outfit">
              Connect With Us Today
            </h2>
            <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
              Reach out now to discuss your construction needs and discover how we can bring your vision to life with our expert services.
            </p>
            <div className={`${ctaInView ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'}`}>
              <Link 
                to="/contact" 
                className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-medium py-4 px-8 rounded-lg border border-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
