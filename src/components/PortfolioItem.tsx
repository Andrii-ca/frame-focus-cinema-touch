
import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Play } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface PortfolioItemProps {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  videoUrl?: string;
}

const PortfolioItem = ({ id, title, category, imageUrl, videoUrl }: PortfolioItemProps) => {
  const isMobile = useIsMobile();
  
  return (
    <Link to={`/portfolio/${id}`} className="block group">
      <div className="relative overflow-hidden rounded-md cinematic-ratio frame">
        {/* Main image */}
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Video indicator */}
        {videoUrl && (
          <div className="absolute top-4 right-4 bg-cinema-black/70 p-1 rounded-full">
            <Play className="w-4 h-4 text-cinema-highlight" />
          </div>
        )}
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cinema-black via-cinema-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="p-6 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <Film className={`mx-auto text-cinema-highlight mb-4 ${isMobile ? 'w-8 h-8' : 'w-10 h-10'}`} />
            <h3 className="text-xl font-semibold text-white font-serif tracking-wide">{title}</h3>
            <p className="text-sm text-cinema-highlight uppercase tracking-wide mt-2">{category}</p>
            
            {/* Animated line */}
            <div className="h-[2px] w-0 bg-cinema-highlight mt-4 mx-auto group-hover:w-16 transition-all duration-500 ease-out"></div>
          </div>
        </div>
        
        {/* Film strip effect */}
        <div className="absolute top-0 h-2 w-full flex opacity-70">
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className="flex-1 bg-cinema-black mx-[1px]"></div>
          ))}
        </div>
        <div className="absolute bottom-0 h-2 w-full flex opacity-70">
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className="flex-1 bg-cinema-black mx-[1px]"></div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PortfolioItem;
