import React from 'react';
import { Award, Heart, Shield, Users } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Joe",
      role: "Founder & Lead Guide",
      avatar: "🦁",
      experience: "7+ years",
      specialization: "Big Five tracking, Maasai Mara expert",
      bio: "Grew up near Maasai Mara, learned wildlife tracking from Maasai elders. Passionate about sharing Africa's wonders.",
    },
    {
      name: "Grace Wanjiku",
      role: "Safari Guide & Birding Specialist",
      avatar: "🦅",
      experience: "5 years",
      specialization: "Ornithology, family safaris",
      bio: "Biology degree from University of Nairobi. Can identify over 300 bird species by call alone.",
    },
    {
      name: "Daniel Kipchoge",
      role: "Senior Safari Guide",
      avatar: "🐘",
      experience: "12 years",
      specialization: "Amboseli elephants, cultural experiences",
      bio: "Born in Maasai community near Amboseli. Knows every elephant family in the park by name.",
    },
    {
      name: "Sarah Mutiso",
      role: "Operations Manager",
      avatar: "📱",
      experience: "3 years",
      specialization: "Customer service, logistics",
      bio: "Hospitality management degree. Ensures every safari runs smoothly from booking to farewell.",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Your safety is our top priority. All our guides are certified and our vehicles are regularly maintained."
    },
    {
      icon: Heart,
      title: "Authentic Experiences",
      description: "We believe in genuine connections with nature and local communities, not tourist traps."
    },
    {
      icon: Award,
      title: "Expert Knowledge",
      description: "Our team of local guides brings decades of combined experience and intimate wildlife knowledge."
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "From solo travelers to large groups, we customize every safari to your unique preferences."
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-amber-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-safari-gold/10 px-4 py-2 rounded-full mb-4">
            <Heart className="w-5 h-5 text-safari-gold" />
            <span className="text-safari-gold font-semibold">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4">
            Meet Your Safari Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just tour operators—we're passionate conservationists, wildlife experts, and your friends in Africa. 
            Every member of our team is dedicated to creating unforgettable experiences while protecting the wilderness we love.
          </p>
        </div>

        {/* Our Story */}
        <div className="max-w-4xl mx-auto mb-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-start gap-6 mb-6">
            <span className="text-6xl">🌍</span>
            <div>
              <h3 className="text-3xl font-heading font-bold text-gray-900 mb-4">Our Story</h3>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Joeventure Tours was born from a simple belief: that everyone deserves to experience the raw beauty 
                  of African wildlife in a way that's authentic, responsible, and unforgettable.
                </p>
                <p>
                  Founded by Joe in 2017, we've grown from a one-guide operation to a trusted team of safari experts. 
                  What hasn't changed? Our commitment to small-group experiences, environmental conservation, and 
                  creating genuine connections between travelers and the wild heart of Africa.
                </p>
                <p>
                  With over <strong className="text-safari-orange">400 happy travelers</strong> and counting, we're 
                  proud to be rated <strong className="text-safari-gold">4.9/5 stars</strong> by our guests. But our 
                  greatest reward is seeing the wonder in your eyes when you spot your first lion, witness a sunset 
                  over the savanna, or connect with local Maasai communities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-safari-orange/10 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-safari-orange" />
                </div>
                <h4 className="text-xl font-heading font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Team Members */}
        <div className="mb-12">
          <h3 className="text-3xl font-heading font-bold text-center text-gray-900 mb-8">
            Your Expert Safari Team
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className="bg-gradient-to-br from-safari-orange to-orange-600 p-6 text-center">
                  <div className="text-7xl mb-3">{member.avatar}</div>
                  <h4 className="text-xl font-heading font-bold text-white mb-1">{member.name}</h4>
                  <p className="text-white/90 text-sm font-medium">{member.role}</p>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <div className="text-sm text-gray-600 mb-1">Experience</div>
                    <div className="font-semibold text-safari-green">{member.experience}</div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm text-gray-600 mb-1">Specialty</div>
                    <div className="font-semibold text-gray-900 text-sm">{member.specialization}</div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conservation Message */}
        <div className="bg-gradient-to-r from-safari-green to-emerald-700 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
          <span className="text-6xl mb-4 block">🌿</span>
          <h3 className="text-3xl font-heading font-bold mb-4">Committed to Conservation</h3>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
            A portion of every safari booking goes directly to wildlife conservation and community development projects. 
            When you travel with us, you're helping protect Africa's precious ecosystems for future generations.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              🦏 Anti-Poaching Support
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              🏫 Community Education
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              🌳 Habitat Restoration
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              💧 Clean Water Projects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
