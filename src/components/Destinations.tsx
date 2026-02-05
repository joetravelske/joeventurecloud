import React from 'react';
import { MapPin, Camera, Mountain, Sunrise } from 'lucide-react';

const Destinations = () => {
  const destinations = [
    {
      name: "Maasai Mara",
      country: "Kenya",
      emoji: "🦁",
      tagline: "The Kingdom of Lions",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800",
      highlights: [
        "Great Migration (July-October)",
        "Highest concentration of Big Cats",
        "Maasai cultural experiences",
        "Over 450 bird species"
      ],
      bestTime: "July - October (Migration), Jan - Feb (Calving)",
      icon: Mountain,
    },
    {
      name: "Amboseli National Park",
      country: "Kenya",
      emoji: "🐘",
      tagline: "Home of Giants",
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=800",
      highlights: [
        "Large elephant herds",
        "Stunning Mt. Kilimanjaro views",
        "Diverse ecosystems",
        "Excellent bird watching"
      ],
      bestTime: "June - October, January - February",
      icon: Camera,
    },
    {
      name: "Tsavo National Parks",
      country: "Kenya",
      emoji: "🦏",
      tagline: "The Red Elephants",
      image: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?q=80&w=800",
      highlights: [
        "Kenya's largest park",
        "Famous red elephants",
        "Diverse wildlife",
        "Less crowded experience"
      ],
      bestTime: "June - October, January - February",
      icon: Sunrise,
    },
    {
      name: "Serengeti",
      country: "Tanzania",
      emoji: "🦓",
      tagline: "The Endless Plains",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800",
      highlights: [
        "Spectacular Great Migration",
        "Abundant predators",
        "Endless savanna",
        "Balloon safaris available"
      ],
      bestTime: "June - October (Best for migration)",
      icon: Mountain,
    },
    {
      name: "Ngorongoro Crater",
      country: "Tanzania",
      emoji: "🌋",
      tagline: "Africa's Garden of Eden",
      image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=800",
      highlights: [
        "World's largest intact caldera",
        "High density of wildlife",
        "Black rhino sanctuary",
        "Stunning landscapes"
      ],
      bestTime: "Year-round destination",
      icon: Camera,
    },
    {
      name: "Bwindi & Queen Elizabeth",
      country: "Uganda",
      emoji: "🦍",
      tagline: "Gorilla Trekking Paradise",
      image: "https://images.unsplash.com/photo-1551522435-a13afa10f103?q=80&w=800",
      highlights: [
        "Mountain gorilla trekking",
        "Tree-climbing lions",
        "Diverse primates",
        "Lush rainforests"
      ],
      bestTime: "June - September, December - February",
      icon: Sunrise,
    },
  ];

  return (
    <section id="destinations" className="section-padding bg-gradient-to-b from-white to-emerald-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-safari-green/10 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-5 h-5 text-safari-green" />
            <span className="text-safari-green font-semibold">Where We Go</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4">
            Explore Africa's Best Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From Kenya's iconic Maasai Mara to Tanzania's Serengeti and Uganda's mountain gorillas, 
            we'll take you to Africa's most spectacular wildlife havens.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => {
            const IconComponent = destination.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-5xl mb-2">{destination.emoji}</div>
                        <h3 className="text-2xl font-heading font-bold text-white mb-1">
                          {destination.name}
                        </h3>
                        <p className="text-white/90 text-sm font-medium mb-2">{destination.country}</p>
                        <p className="text-safari-gold italic font-medium">
                          {destination.tagline}
                        </p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Highlights</h4>
                    <ul className="space-y-2">
                      {destination.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-safari-orange mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best Time */}
                  <div className="bg-emerald-50 rounded-lg p-3 border-l-4 border-safari-green">
                    <div className="text-xs font-bold text-gray-900 mb-1 uppercase tracking-wide">Best Time to Visit</div>
                    <div className="text-sm text-gray-700">{destination.bestTime}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              🗺️ Multi-Country Safari Adventures
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Combine multiple destinations for the ultimate East African safari experience. 
              We handle all border crossings, accommodations, and logistics seamlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-orange-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🇰🇪</div>
              <h4 className="font-bold text-gray-900 mb-2">Kenya Safaris</h4>
              <p className="text-gray-700 text-sm">Maasai Mara, Amboseli, Tsavo, Lake Nakuru, Samburu</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🇹🇿</div>
              <h4 className="font-bold text-gray-900 mb-2">Tanzania Safaris</h4>
              <p className="text-gray-700 text-sm">Serengeti, Ngorongoro, Tarangire, Lake Manyara, Zanzibar</p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🇺🇬</div>
              <h4 className="font-bold text-gray-900 mb-2">Uganda Safaris</h4>
              <p className="text-gray-700 text-sm">Bwindi, Queen Elizabeth, Murchison Falls, Kibale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
