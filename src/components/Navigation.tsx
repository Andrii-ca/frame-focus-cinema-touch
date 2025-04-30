
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown,
  Menu,
  X
} from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  
  const serviceLinks = [
    { name: "Promo and Advertising", link: "/services/promo" },
    { name: "Reportage Video Filming", link: "/services/reportage" },
    { name: "Interview Filming", link: "/services/interview" },
    { name: "Courses / Lessons Filming", link: "/services/courses" },
    { name: "Conference Filming", link: "/services/conference" },
    { name: "Live Broadcasts", link: "/services/live" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-cinema-black/95 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="font-serif text-2xl text-white font-bold">
          Frame<span className="text-cinema-highlight">Focus</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-cinema-highlight transition-colors">
            Home
          </Link>
          <Link to="/portfolio" className="text-white hover:text-cinema-highlight transition-colors">
            Portfolio
          </Link>
          <div className="relative group">
            <button 
              className="flex items-center text-white hover:text-cinema-highlight transition-colors"
              onClick={(e) => {
                e.preventDefault();
                toggleServices();
              }}
            >
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-60 origin-top-left bg-cinema-darkGray rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="p-2 space-y-1">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    to={service.link}
                    className="block px-4 py-2 text-sm text-white hover:bg-cinema-gray hover:text-cinema-highlight rounded-md transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/about" className="text-white hover:text-cinema-highlight transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-cinema-highlight transition-colors">
            Contact
          </Link>
          <Button asChild variant="outline" className="border-cinema-highlight text-cinema-highlight hover:bg-cinema-highlight/10">
            <Link to="/contact">Let's Talk</Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden fixed inset-0 bg-cinema-darkerGray z-40 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-8 pt-24">
          <Link 
            to="/" 
            className="py-4 text-xl text-white border-b border-cinema-gray"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link 
            to="/portfolio" 
            className="py-4 text-xl text-white border-b border-cinema-gray"
            onClick={toggleMenu}
          >
            Portfolio
          </Link>
          <div>
            <button 
              className="flex items-center justify-between w-full py-4 text-xl text-white border-b border-cinema-gray"
              onClick={toggleServices}
            >
              Services
              <ChevronDown className={`h-5 w-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? 'max-h-96' : 'max-h-0'}`}>
              {serviceLinks.map((service) => (
                <Link
                  key={service.name}
                  to={service.link}
                  className="block py-3 pl-4 text-lg text-white/80 hover:text-cinema-highlight"
                  onClick={toggleMenu}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          <Link 
            to="/about" 
            className="py-4 text-xl text-white border-b border-cinema-gray"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="py-4 text-xl text-white border-b border-cinema-gray"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Button 
            className="mt-8 bg-cinema-highlight text-black hover:bg-cinema-highlight/90"
            onClick={() => {
              toggleMenu();
              window.location.href = "/contact";
            }}
          >
            Let's Start a Project
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
