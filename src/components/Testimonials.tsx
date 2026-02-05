import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah & Michael Chen",
      location: "Singapore",
      avatar: "👫",
      trip: "10-Day Maasai Mara & Amboseli Safari",
      rating: 5,
      quote: "Joe made our honeymoon absolutely magical. Seeing the Big Five in one day felt like a dream! His knowledge of animal behavior helped us capture photos we'll treasure forever.",
      highlight: "Perfect Honeymoon"
    },
    {
      name: "James Mitchell",
      location: "Denver, USA",
      avatar: "👨",
      trip: "7-Day Tsavo Wildlife Experience",
      rating: 5,
      quote: "As a solo traveler, I appreciated Joe's professionalism and local knowledge. Best week of my life. He made me feel safe and welcomed every step of the way.",
      highlight: "Solo Adventure"
    },
    {
      name: "The Okonkwo Family",
      location: "Lagos, Nigeria",
      avatar: "👨‍👩‍👧‍👦",
      trip: "5-Day Family Safari Adventure",
      rating: 5,
      quote: "Our children still talk about the baby elephants at Amboseli! Joe made it educational and fun for everyone. He was patient with our kids and knew exactly how to keep them engaged.",
      highlight: "Family Fun"
    },
    {
      name: "Emma Larsson",
      location: "Stockholm, Sweden",
      avatar: "👩",
      trip: "14-Day Kenya & Tanzania Explorer",
      rating: 5,
      quote: "I came alone and left with lifelong friends from our group. The migration in Serengeti was breathtaking! Joe's storytelling made every moment special.",
      highlight: "Group Safari"
    },
    {
      name: "David & Patricia Thornton",
      location: "Edinburgh, Scotland",
      avatar: "👴👵",
      trip: "12-Day Luxury Kenya Safari",
      rating: 5,
      quote: "After 40 years of marriage, this was our most memorable anniversary. Impeccable service, stunning lodges, unforgettable wildlife. Joe exceeded every expectation.",
      highlight: "Luxury Experience"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-emerald-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-safari-green/10 px-4 py-2 rounded-full mb-4">
            <Star className="w-5 h-5 text-safari-green fill-current" />
            <span className="text-safari-green font-semibold">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4">
            Stories from Happy Travelers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the 400+ adventurers who've experienced the magic of African safaris with us.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-safari-orange to-orange-600 p-8 md:p-12 text-white">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-6xl">{current.avatar}</div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold">{current.name}</h3>
                    <p className="text-white/90">{current.location}</p>
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl">
                  <div className="text-sm text-white/90 mb-1">Rating</div>
                  <div className="flex gap-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-safari-gold" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 inline-block mb-4">
                <span className="text-sm font-semibold">✨ {current.highlight}</span>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <Quote className="w-12 h-12 text-safari-orange/20 mb-4" />
              <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 italic">
                "{current.quote}"
              </blockquote>
              <div className="text-gray-600 flex items-center gap-2">
                <span className="text-safari-green">📍</span>
                <span className="font-medium">{current.trip}</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-white text-safari-orange p-3 rounded-full shadow-lg hover:bg-safari-orange hover:text-white transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'w-8 bg-safari-orange' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-white text-safari-orange p-3 rounded-full shadow-lg hover:bg-safari-orange hover:text-white transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-2">⭐</div>
            <div className="text-3xl font-bold text-safari-orange mb-1">4.9/5</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-2">👥</div>
            <div className="text-3xl font-bold text-safari-green mb-1">400+</div>
            <div className="text-sm text-gray-600">Happy Travelers</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-2">🦁</div>
            <div className="text-3xl font-bold text-safari-gold mb-1">100%</div>
            <div className="text-sm text-gray-600">Big Five Sightings</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-2">🏆</div>
            <div className="text-3xl font-bold text-safari-orange mb-1">7+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
