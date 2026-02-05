import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Calendar, Users as UsersIcon } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: '2',
    dates: '',
    package: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Hi Joe! 🦁

*Safari Inquiry*

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Number of Travelers: ${formData.travelers}
Preferred Dates: ${formData.dates || 'Flexible'}
Package Interest: ${formData.package || 'Open to suggestions'}

Message:
${formData.message}

Looking forward to hearing from you!`;

    const whatsappUrl = `https://wa.me/254705924974?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-amber-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-safari-orange/10 px-4 py-2 rounded-full mb-4">
            <Send className="w-5 h-5 text-safari-orange" />
            <span className="text-safari-orange font-semibold">Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4">
            Start Your Safari Adventure
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to explore the wild heart of Africa? Reach out via WhatsApp for instant responses or fill out the form below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* WhatsApp - Priority */}
                <a 
                  href="https://wa.me/254705924974"
                  target="_blank"
                  className="flex items-start gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-all group"
                >
                  <div className="bg-green-500 text-white p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 mb-1">WhatsApp (Preferred)</div>
                    <div className="text-green-600 font-medium">+254 705 924974</div>
                    <div className="text-sm text-gray-600 mt-1">Fast response • Available 24/7</div>
                  </div>
                </a>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl">
                  <div className="bg-safari-orange text-white p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Phone</div>
                    <div className="text-safari-orange font-medium">+254 705 924974</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                  <div className="bg-blue-500 text-white p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <a href="mailto:info@joetours.co.ke" className="text-blue-600 font-medium hover:underline">
                      info@joetours.co.ke
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-xl">
                  <div className="bg-safari-green text-white p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Location</div>
                    <div className="text-gray-700">Nairobi, Kenya</div>
                    <div className="text-sm text-gray-600 mt-1">Serving Kenya, Tanzania & Uganda</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-gradient-to-r from-safari-orange to-orange-600 rounded-2xl p-6 text-white">
              <h4 className="text-xl font-heading font-bold mb-3">⚡ Quick Response Promise</h4>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>WhatsApp responses within 1 hour during business hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Email responses within 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Free custom itinerary planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>No hidden fees or surprise costs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Send Us an Inquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-safari-orange focus:outline-none transition-colors"
                  placeholder="John Smith"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-safari-orange focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-safari-orange focus:outline-none transition-colors"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="travelers" className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of Travelers
                  </label>
                  <select
                    id="travelers"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-safari-orange focus:outline-none transition-colors"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3-4">3-4 People</option>
                    <option value="5-6">5-6 People</option>
                    <option value="7+">7+ People</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="dates" className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Dates
                  </label>
                  <input
                    type="text"
                    id="dates"
                    name="dates"
                    value={formData.dates}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-safari-orange focus:outline-none transition-colors"
                    placeholder="e.g., July 2026"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="package" className="block text-sm font-semibold text-gray-700 mb-2">
                  Package Interest
                </label>
                <select
                  id="package"
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-safari-orange focus:outline-none transition-colors"
                >
                  <option value="">Not sure yet</option>
                  <option value="Maasai Mara Magic">Maasai Mara Magic (5 Days)</option>
                  <option value="Amboseli Explorer">Amboseli Explorer (4 Days)</option>
                  <option value="Ultimate Kenya & Tanzania">Ultimate Kenya & Tanzania (12 Days)</option>
                  <option value="Budget Safari">Budget Safari Adventure (3 Days)</option>
                  <option value="Custom">Custom Safari</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tell Us About Your Dream Safari
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-safari-orange focus:outline-none transition-colors resize-none"
                  placeholder="Any special requests, interests, or questions? We'd love to hear about your safari dreams!"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-safari-orange text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <span>💬</span>
                Send via WhatsApp
              </button>

              <p className="text-sm text-gray-600 text-center">
                By submitting, you'll be redirected to WhatsApp where you can review and send your message to Joe.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
