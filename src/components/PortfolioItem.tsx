
import React from 'react';
import { Link } from 'react-router-dom';
import { Film } from 'lucide-react';

interface PortfolioItemProps {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  videoUrl?: string;
}

const PortfolioItem = ({ id, title, category, imageUrl, videoUrl }: PortfolioItemProps) => {
  return (
    <Link to={`/portfolio/${id}`} className="block group">
      <div className="relative overflow-hidden rounded-md cinematic-ratio frame">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-cinema-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="p-6 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <Film className="w-10 h-10 mx-auto text-cinema-highlight mb-4" />
            <h3 className="text-xl font-semibold text-white font-serif">{title}</h3>
            <p className="text-sm text-cinema-highlight uppercase tracking-wide mt-2">{category}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioItem;
