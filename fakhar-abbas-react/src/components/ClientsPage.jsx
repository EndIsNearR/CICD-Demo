import React from 'react';
import { useInView } from 'react-intersection-observer';

const ClientsPage = () => {
  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [clientsRef, clientsInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [statsRef, statsInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [ctaRef, ctaInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  // Client logos data
  const clients = [
    // {
    //   name: "Al Rasheediah",
    //   logo: "/images/clients/AlRasheediah-logo.png",
    //   alt: "Al Rasheediah Company Logo"
    // },
    {
      name: "Albonian International",
      logo: "/images/clients/albonian_logo.png",
      alt: "Albonian Company Logo"
    },
    {
      name: "CsceC",
      logo: "/images/clients/CsceC.png",
      alt: "CsceC Company Logo"
    },
    {
      name: "Hi-Tech",
      logo: "/images/clients/hi-tech.png",
      alt: "Hi-Tech Company Logo"
    },
    {
      name: "JLW",
      logo: "/images/clients/JLW-Logo.png",
      alt: "JLW Company Logo"
    },
    {
      name: "ARC",
      logo: "/images/clients/logo-ARC.png",
      alt: "ARC Company Logo"
    },
    {
      name: "National Products and Construction",
      logo: "/images/clients/National-logo.png",
      alt: "National Company Logo"
    },
    {
      name: "Reem Emirates Aluminium",
      logo: "/images/clients/reem-logo.png",
      alt: "Reem Company Logo"
    },
    {
      name: "Royal Advance",
      logo: "/images/clients/royal-advance-logo.png",
      alt: "Royal Advance Company Logo"
    },
    {
      name: "Schroeder Projekt ElectroMechanic",
      logo: "/images/clients/Schroeder-logo.jpeg",
      alt: "Schroeder Company Logo"
    },
    {
      name: "Tetra",
      logo: "/images/clients/tetra_new_logo.png",
      alt: "Tetra Company Logo"
    },
    {
      name: "Tornado Group",
      logo: "/images/clients/tornado.png",
      alt: "Tornado Company Logo"
    },
    {
      name: "Trojan",
      logo: "/images/clients/Trojan.png",
      alt: "Trojan Company Logo"
    }
  ];

  const ClientLogo = ({ client, index }) => (
    <div 
      className={`group bg-gray-950 rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:scale-105 hover:shadow-xl ${
        clientsInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-center h-24 mb-4">
        <img 
          src={client.logo} 
          alt={client.alt}
          className="max-h-full max-w-full object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
          loading="lazy"
        />
      </div>
      <h3 className="text-center text-gray-300 group-hover:text-white font-medium transition-colors duration-300">
        {client.name}
      </h3>
    </div>
  );

  const stats = [
    { number: "15+", label: "Trusted Clients" },
    { number: "1,500+", label: "Workers Deployed" },
    { number: "10+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`relative min-h-screen flex items-center justify-center bg-black transition-all duration-1000 ${
          heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="relative z-10 text-center px-8 md:px-12 lg:px-20 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-medium mb-6 leading-tight">
            Our Trusted Clients
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building lasting partnerships with industry leaders across the UAE. Our commitment to excellence has earned us the trust of these prestigious organizations.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={statsRef}
        className={`py-20 md:py-24 bg-gray-950 transition-all duration-1000 delay-200 ${
          statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center ${statsInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-outfit font-medium text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Grid Section */}
      <section 
        ref={clientsRef}
        className={`py-20 md:py-24 lg:py-32 bg-black transition-all duration-1000 delay-300 ${
          clientsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-medium text-white mb-6">
              Companies We've Partnered With
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We take pride in our collaborative partnerships with these esteemed organizations, delivering exceptional construction services and manpower solutions across various sectors.
            </p>
          </div>

          {/* Clients Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
            {clients.map((client, index) => (
              <ClientLogo key={index} client={client} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 md:py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-20 text-center">
          <div className="bg-black rounded-2xl p-8 md:p-12 border border-gray-800">
            <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 italic">
              "Fakhar Abbas Group has consistently delivered exceptional manpower solutions for our projects. Their professionalism, reliability, and commitment to quality make them our preferred partner for construction services."
            </blockquote>
            <div className="text-white font-medium text-lg">
              Project Management Team
            </div>
            <div className="text-gray-400">
              Leading Construction Company, UAE
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-medium text-white mb-6">
            Join Our Growing List of Satisfied Clients
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Experience the same level of excellence and reliability that these industry leaders have come to trust. Let's discuss how we can support your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-10 py-4 rounded-md font-medium text-lg transition-all duration-300 transform hover:scale-105 border border-gray-600"
            >
              Start Your Project
            </a>
            <a 
              href="/offerings" 
              className="inline-block bg-transparent hover:bg-gray-800 text-white px-10 py-4 rounded-md font-medium text-lg transition-all duration-300 transform hover:scale-105 border border-gray-600"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsPage;
