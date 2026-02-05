import React, { useState } from 'react';
import { Calendar, Users, MapPin, Star, Clock, Camera, CheckCircle } from 'lucide-react';

const SafariPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const packages = [
    {
      id: 'maasai-mara-magic',
      name: 'Maasai Mara Magic',
      emoji: '🦁',
      duration: '5 Days / 4 Nights',
      price: '$1,200',
      priceNote: 'per person',
      destination: 'Maasai Mara, Kenya',
      rating: 4.9,
      reviews: 87,
      highlights: [
        'Big Five game drives',
        'Great Migration (seasonal)',
        'Maasai village visit',
        'Luxury tented camp',
        'Professional photography support',
        'Sunrise & sunset drives'
      ],
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800',
      bestFor: 'First-time safari goers, photographers, wildlife enthusiasts',
      includes: 'Park fees, accommodation, meals, game drives, guide',
    },
    {
      id: 'amboseli-explorer',
      name: 'Amboseli Explorer',
      emoji: '🐘',
      duration: '4 Days / 3 Nights',
      price: '$950',
      priceNote: 'per person',
      destination: 'Amboseli National Park',
      rating: 4.8,
      reviews: 64,
      highlights: [
        'Elephant herds & Mt. Kilimanjaro views',
        'Bird watching paradise',
        'Cultural experiences',
        'Mid-range lodges',
        'Nature walks',
        'Observation Hill visits'
      ],
      image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=800',
      bestFor: 'Families, elephant lovers, photographers',
      includes: 'Park fees, accommodation, meals, game drives, guide',
    },
    {
      id: 'ultimate-kenya-tanzania',
      name: 'Ultimate Kenya & Tanzania',
      emoji: '🌍',
      duration: '12 Days / 11 Nights',
      price: '$3,200',
      priceNote: 'per person',
      destination: 'Multi-country Adventure',
      rating: 5.0,
      reviews: 42,
      highlights: [
        'Maasai Mara & Serengeti',
        'Ngorongoro Crater',
        'Amboseli & Lake Manyara',
        'Luxury accommodations',
        'Hot air balloon safari',
        'Cultural immersion'
      ],
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800',
      bestFor: 'Bucket list travelers, honeymooners, luxury seekers',
      includes: 'All park fees, luxury lodges, meals, flights, private guide',
    },
    {
      id: 'budget-safari',
      name: 'Budget Safari Adventure',
      emoji: '⚡',
      duration: '3 Days / 2 Nights',
      price: '$550',
      priceNote: 'per person',
      destination: 'Nairobi National Park & Lake Nakuru',
      rating: 4.7,
      reviews: 95,
      highlights: [
        'Perfect for short stays',
        'Budget-friendly camping',
        'Flamingo viewing',
        'Rhino sanctuary',
        'Close to Nairobi',
        'Shared group tours'
      ],
      image: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?q=80&w=800',
      bestFor: 'Budget travelers, solo adventurers, quick getaways',
      includes: 'Park fees, camping, meals, shared transport, guide',
    },
  ];

  return (
    <section id="packages" className="section-padding bg-gradient-to-b from-white to-orange-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-safari-orange/10 px-4 py-2 rounded-full mb-4">
            <Star className="w-5 h-5 text-safari-orange" />
            <span className="text-safari-orange font-semibold">Our Safari Packages</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4">
            Choose Your Perfect Adventure
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From budget-friendly escapes to luxury expeditions, we have the perfect safari experience waiting for you.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div 
              key={pkg.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer border-2 border-transparent hover:border-safari-orange"
              onClick={() => setSelectedPackage(selectedPackage === pkg.id ? null : pkg.id)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Package Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-4xl">{pkg.emoji}</span>
                      <h3 className="text-2xl font-heading font-bold text-white mt-2">{pkg.name}</h3>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-center">
                      <div className="text-2xl font-bold text-safari-orange">{pkg.price}</div>
                      <div className="text-xs text-gray-600">{pkg.priceNote}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Package Details */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-safari-green" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-safari-orange" />
                    <span>{pkg.destination}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-safari-gold fill-current" />
                    <span>{pkg.rating} ({pkg.reviews})</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {pkg.highlights.slice(0, selectedPackage === pkg.id ? pkg.highlights.length : 3).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-safari-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                  {selectedPackage !== pkg.id && pkg.highlights.length > 3 && (
                    <button className="text-safari-orange font-semibold text-sm hover:underline">
                      + {pkg.highlights.length - 3} more highlights
                    </button>
                  )}
                </div>

                {/* Expanded Details */}
                {selectedPackage === pkg.id && (
                  <div className="border-t pt-4 mt-4 space-y-3 animate-fade-in-up">
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <div className="font-semibold text-gray-900 mb-1">Best For:</div>
                      <div className="text-gray-700 text-sm">{pkg.bestFor}</div>
                    </div>
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <div className="font-semibold text-gray-900 mb-1">Includes:</div>
                      <div className="text-gray-700 text-sm">{pkg.includes}</div>
                    </div>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="flex gap-3 mt-4">
                  <a 
                    href={`https://wa.me/254705924974?text=Hi%20Joe!%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20package.`}
                    target="_blank"
                    className="flex-1 bg-safari-orange text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-all text-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Book Now
                  </a>
                  <button 
                    className="flex-1 bg-gray-100 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPackage(selectedPackage === pkg.id ? null : pkg.id);
                    }}
                  >
                    {selectedPackage === pkg.id ? 'Show Less' : 'Learn More'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Safari CTA */}
        <div className="bg-gradient-to-r from-safari-orange to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
          <span className="text-6xl mb-4 block">✨</span>
          <h3 className="text-3xl font-heading font-bold mb-4">Don't See What You're Looking For?</h3>
          <p className="text-xl mb-6 text-white/90 max-w-2xl mx-auto">
            Let us create a custom safari tailored to your dreams, budget, and schedule. Every adventure is unique!
          </p>
          <a 
            href="https://wa.me/254705924974?text=Hi%20Joe!%20I'd%20like%20to%20discuss%20a%20custom%20safari%20package."
            target="_blank"
            className="inline-flex items-center gap-2 bg-white text-safari-orange px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg text-lg"
          >
            <span>💬</span>
            Design My Custom Safari
          </a>
        </div>
      </div>
    </section>
  );
};

export default SafariPackages;
