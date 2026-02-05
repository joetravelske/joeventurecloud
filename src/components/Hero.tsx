import React from 'react';
import { Calendar, Users, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Floating Safari Icons */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <span className="absolute top-20 left-10 text-6xl animate-float opacity-30">🦁</span>
        <span className="absolute top-40 right-20 text-5xl animate-float opacity-20" style={{animationDelay: '1s'}}>🐘</span>
        <span className="absolute bottom-32 left-1/4 text-4xl animate-float opacity-25" style={{animationDelay: '2s'}}>🦒</span>
        <span className="absolute top-1/3 right-1/3 text-5xl animate-float opacity-15" style={{animationDelay: '1.5s'}}>🦏</span>
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 text-white">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-safari-orange/90 backdrop-blur-sm px-6 py-2 rounded-full mb-6 animate-fade-in-up">
            <span className="text-2xl">🏆</span>
            <span className="font-semibold">400+ Happy Travelers • 7+ Years Experience</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Experience the
            <span className="block text-safari-orange">Wild Heart of Africa</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Expert-guided safaris through Kenya, Tanzania & Uganda. Witness the Big Five, capture unforgettable moments, and create memories that last a lifetime.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <a href="#packages" className="btn-primary text-center text-lg">
              <Calendar className="inline w-5 h-5 mr-2" />
              Explore Safari Packages
            </a>
            <a 
              href="https://wa.me/254705924974?text=Hi%20Joe%2C%20I'm%20interested%20in%20booking%20a%20safari!" 
              target="_blank"
              className="btn-whatsapp justify-center text-lg"
            >
              <span className="text-2xl">💬</span>
              WhatsApp Joe
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
              <div className="text-3xl mb-2">🦁</div>
              <div className="text-2xl font-bold text-safari-gold">Big 5</div>
              <div className="text-sm text-gray-300">Guaranteed Sightings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-2xl font-bold text-safari-gold">4.9/5</div>
              <div className="text-sm text-gray-300">Customer Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-2xl font-bold text-safari-gold">100%</div>
              <div className="text-sm text-gray-300">Local Expertise</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
