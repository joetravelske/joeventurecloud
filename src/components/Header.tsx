import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Packages', href: '/packages' },
        { name: 'Destinations', href: '/destinations' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Blog', href: '/blog' },
        { name: 'Stories', href: '/testimonials' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
            <div className="container-custom">
                <div className="flex items-center justify-between py-3">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-3 group">
                        <img
                            src="/images/logo.png"
                            alt="Joeventure Tours"
                            className="h-14 w-auto md:h-16 transition-transform group-hover:scale-105"
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 hover:text-safari-orange font-medium transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-safari-orange transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                        <a
                            href="/packages"
                            className="btn-primary"
                        >
                            Book Safari
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-gray-700 hover:text-safari-orange transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden pb-4 animate-fade-in-up">
                        <nav className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-700 hover:text-safari-orange font-medium transition-colors py-2 px-4 rounded-lg hover:bg-orange-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="/packages"
                                className="btn-primary text-center"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Book Safari
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
