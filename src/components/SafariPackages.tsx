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
    <section id="packages" className="section-padding bg-safari-bone relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-safari-ochre/10 px-4 py-2 rounded-full mb-4 border border-safari-ochre/20">
            <Star className="w-5 h-5 text-safari-ochre" />
            <span className="text-safari-ochre font-semibold uppercase tracking-widest text-xs">Our Curated Expeditions</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-safari-charcoal mb-6">
            The Spirit of the Wild
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-body leading-relaxed">
            Meticulously planned safaris that blend adventure with the timeless elegance of the East African wilderness.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-700 group border border-safari-olive/10"
              onClick={() => setSelectedPackage(selectedPackage === pkg.id ? null : pkg.id)}
            >
              {/* Package Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-safari-charcoal/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="text-4xl mb-2 block">{pkg.emoji}</span>
                  <h3 className="text-3xl font-heading font-bold text-white leading-tight">{pkg.name}</h3>
                </div>
              </div>

              {/* Package Details */}
              <div className="p-8">
                <div className="flex items-center gap-6 mb-6 text-sm text-safari-charcoal/70 font-medium border-b border-safari-olive/10 pb-6 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-safari-ochre" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-safari-ochre" />
                    <span>{pkg.destination}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-4 mb-8">
                  {pkg.highlights.slice(0, selectedPackage === pkg.id ? pkg.highlights.length : 3).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-safari-ochre mt-2"></div>
                      <span className="text-safari-charcoal font-medium leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Expanded Details */}
                {selectedPackage === pkg.id && (
                  <div className="mb-8 space-y-4 animate-fade-in-up border-t border-safari-olive/10 pt-6">
                    <div className="p-4 rounded bg-safari-bone border-l-4 border-safari-ochre">
                      <div className="font-heading font-bold text-safari-charcoal mb-2 italic">Curated Experience:</div>
                      <div className="text-gray-700 text-sm leading-loose">{pkg.bestFor}</div>
                    </div>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="flex gap-4">
                  <a
                    href={`/booking/${pkg.id}`}
                    className="flex-1 bg-safari-olive text-white py-4 rounded font-heading font-bold hover:bg-safari-charcoal transition-all text-center tracking-widest text-sm uppercase shadow-md"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Expedition
                  </a>
                  <button
                    className="px-6 border border-safari-olive/20 text-safari-olive py-4 rounded font-heading font-bold hover:bg-safari-bone transition-all text-sm uppercase"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPackage(selectedPackage === pkg.id ? null : pkg.id);
                    }}
                  >
                    {selectedPackage === pkg.id ? 'Close' : 'Details'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Safari CTA */}
        <div className="mt-20 bg-safari-olive p-1 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]">
          <div className="bg-white p-12 text-center border border-safari-ochre/20">
            <span className="text-6xl mb-6 block">✨</span>
            <h3 className="text-4xl font-heading font-bold mb-6 text-safari-charcoal">A Bespoke Journey</h3>
            <p className="text-xl mb-10 text-gray-600 max-w-2xl mx-auto font-body leading-relaxed italic">
              Beyond our curated expeditions lies the possibility of a journey designed exclusively for you.
              Share your vision, and let us weave the magic of Africa into your unique story.
            </p>
            <a
              href="https://wa.me/254705924974?text=Hi%20Joe!%20I'd%20like%20to%20discuss%20a%20custom%20safari%20package."
              target="_blank"
              className="inline-flex items-center gap-3 bg-safari-ochre text-white px-10 py-5 rounded font-heading font-bold hover:bg-safari-charcoal transition-all shadow-xl tracking-widest uppercase text-sm"
            >
              <span>💬</span>
              Consult with our Experts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafariPackages;
