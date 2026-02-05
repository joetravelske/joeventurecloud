import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white section-padding">
            <div className="container-custom">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand & Logo */}
                    <div className="md:col-span-1">
                        <a href="/" className="inline-block mb-4">
                            <img
                                src="/images/logo.png"
                                alt="Joeventure Tours"
                                className="h-16 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </a>
                        <p className="text-gray-400 text-sm mb-4">
                            Your trusted safari partner in East Africa. Creating unforgettable wildlife adventures since 2017.
                        </p>
                        {/* Social Media */}
                        <div className="flex gap-3">
                            <a
                                href="https://facebook.com/joeventuretours"
                                target="_blank"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-safari-orange flex items-center justify-center transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://instagram.com/joeventuretours"
                                target="_blank"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-safari-orange flex items-center justify-center transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://twitter.com/joeventuretours"
                                target="_blank"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-safari-orange flex items-center justify-center transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-bold mb-4 text-safari-gold">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/" className="text-gray-400 hover:text-safari-orange transition-colors">Home</a></li>
                            <li><a href="/about" className="text-gray-400 hover:text-safari-orange transition-colors">About Us</a></li>
                            <li><a href="/packages" className="text-gray-400 hover:text-safari-orange transition-colors">Safari Packages</a></li>
                            <li><a href="/destinations" className="text-gray-400 hover:text-safari-orange transition-colors">Destinations</a></li>
                            <li><a href="/gallery" className="text-gray-400 hover:text-safari-orange transition-colors">Photo Gallery</a></li>
                            <li><a href="/blog" className="text-gray-400 hover:text-safari-orange transition-colors">Safari Blog</a></li>
                            <li><a href="/testimonials" className="text-gray-400 hover:text-safari-orange transition-colors">Traveler Stories</a></li>
                            <li><a href="/faq" className="text-gray-400 hover:text-safari-orange transition-colors">Safari FAQ</a></li>
                            <li><a href="/contact" className="text-gray-400 hover:text-safari-orange transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Top Destinations */}
                    <div>
                        <h4 className="font-heading font-bold mb-4 text-safari-gold">Top Destinations</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="text-gray-400">🦒 Maasai Mara, Kenya</li>
                            <li className="text-gray-400">🐘 Amboseli, Kenya</li>
                            <li className="text-gray-400">🦏 Tsavo National Parks</li>
                            <li className="text-gray-400">🦁 Serengeti, Tanzania</li>
                            <li className="text-gray-400">🌋 Ngorongoro Crater</li>
                            <li className="text-gray-400">🦍 Bwindi, Uganda</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-heading font-bold mb-4 text-safari-gold">Get in Touch</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <Phone className="w-4 h-4 text-safari-orange mt-0.5 flex-shrink-0" />
                                <div>
                                    <a href="tel:+254705924974" className="text-gray-400 hover:text-safari-orange transition-colors">
                                        +254 705 924974
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <Mail className="w-4 h-4 text-safari-orange mt-0.5 flex-shrink-0" />
                                <div>
                                    <a href="mailto:info@joetours.co.ke" className="text-gray-400 hover:text-safari-orange transition-colors">
                                        info@joetours.co.ke
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-safari-orange mt-0.5 flex-shrink-0" />
                                <span className="text-gray-400">Nairobi, Kenya</span>
                            </li>
                            <li className="mt-4">
                                <a
                                    href="https://wa.me/254705924974"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-semibold"
                                >
                                    <span>💬</span> WhatsApp Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter Signup */}
                <div className="border-t border-gray-800 pt-8 mb-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h4 className="font-heading font-bold text-xl mb-2">Stay Updated</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Subscribe to our newsletter for safari tips, special offers, and wildlife stories.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-safari-orange"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-safari-orange text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
                    <p>
                        &copy; {currentYear} Joeventure Tours and Travel. All rights reserved. | Creating memories, one safari at a time 🦁
                    </p>
                    <p className="mt-2 text-xs">
                        <a href="/privacy" className="hover:text-safari-orange transition-colors">Privacy Policy</a>
                        {' • '}
                        <a href="/terms" className="hover:text-safari-orange transition-colors">Terms of Service</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
