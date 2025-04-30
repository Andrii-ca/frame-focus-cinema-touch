
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cinema-darkerGray text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="font-serif text-2xl font-bold">
              Frame<span className="text-cinema-highlight">Focus</span>
            </Link>
            <p className="mt-4 text-white/70">
              Creative video production that brings your vision to life with cinematic quality and storytelling.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cinema-highlight transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cinema-highlight transition-colors">
                <Youtube size={20} />
              </a>
              <a href="mailto:contact@framefocus.com" className="text-white hover:text-cinema-highlight transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/promo" className="text-white/70 hover:text-cinema-highlight transition-colors">
                  Promo and Advertising
                </Link>
              </li>
              <li>
                <Link to="/services/reportage" className="text-white/70 hover:text-cinema-highlight transition-colors">
                  Reportage Video Filming
                </Link>
              </li>
              <li>
                <Link to="/services/interview" className="text-white/70 hover:text-cinema-highlight transition-colors">
                  Interview Filming
                </Link>
              </li>
              <li>
                <Link to="/services/courses" className="text-white/70 hover:text-cinema-highlight transition-colors">
                  Courses / Lessons
                </Link>
              </li>
              <li>
                <Link to="/services/conference" className="text-white/70 hover:text-cinema-highlight transition-colors">
                  Conference Filming
                </Link>
              </li>
              <li>
                <Link to="/services/live" className="text-white/70 hover:text-cinema-highlight transition-colors">
                  Live Broadcasts
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/portfolio" className="text-white/70 hover:text-cinema-highlight transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-cinema-highlight transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-cinema-highlight transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-cinema-highlight transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-white/70">
              <p className="mb-2">123 Cinema Street</p>
              <p className="mb-2">Los Angeles, CA 90028</p>
              <p className="mb-4">United States</p>
              <p className="mb-2">
                <a href="tel:+11234567890" className="hover:text-cinema-highlight transition-colors">+1 (123) 456-7890</a>
              </p>
              <p>
                <a href="mailto:hello@framefocus.com" className="hover:text-cinema-highlight transition-colors">hello@framefocus.com</a>
              </p>
            </address>
          </div>
        </div>
        
        <hr className="border-cinema-gray my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; {currentYear} FrameFocus Studio. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-cinema-highlight transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-cinema-highlight transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
