
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  className?: string;
}

const ServiceCard = ({ title, description, imageUrl, link, className }: ServiceCardProps) => {
  return (
    <Link to={link}>
      <div 
        className={cn(
          "relative group overflow-hidden rounded-md cinematic-ratio frame hover-scale bg-cinema-darkGray",
          className
        )}
      >
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-cinema-black via-transparent to-transparent opacity-90" />
        
        <div className="absolute bottom-0 left-0 w-full p-6">
          <h3 className="text-xl font-semibold text-white font-serif mb-2">
            {title}
          </h3>
          <p className="text-sm text-white/70 line-clamp-2">
            {description}
          </p>
          <div className="h-1 w-0 bg-cinema-highlight mt-4 transition-all duration-300 group-hover:w-16" />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
