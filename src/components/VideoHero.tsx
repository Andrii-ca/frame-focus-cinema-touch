
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

interface VideoHeroProps {
  title: string;
  subtitle?: string;
  videoUrl: string;
  buttonText?: string;
  buttonLink?: string;
}

const VideoHero = ({ 
  title, 
  subtitle, 
  videoUrl, 
  buttonText = "Discuss Your Project", 
  buttonLink = "/contact" 
}: VideoHeroProps) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute h-full w-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay Gradient */}
      <div className="gradient-overlay" />
      
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white font-serif leading-tight animate-fade-in-up">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mt-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>
        )}
        
        <div className="mt-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Button asChild className="bg-cinema-highlight text-black hover:bg-cinema-highlight/80 px-8 py-6 text-lg">
            <Link to={buttonLink}>
              {buttonText}
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-pulse-subtle">
        <span className="text-sm mb-2">Scroll Down</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default VideoHero;
