
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PackageFeature {
  name: string;
  included: boolean;
}

interface PackageCardProps {
  name: string;
  description: string;
  price: string;
  features: PackageFeature[];
  isPopular?: boolean;
  className?: string;
}

const PackageCard = ({ 
  name, 
  description, 
  price, 
  features, 
  isPopular = false,
  className
}: PackageCardProps) => {
  return (
    <div 
      className={cn(
        "relative rounded-lg overflow-hidden transition-all duration-300",
        isPopular ? "border-2 border-cinema-highlight shadow-lg shadow-cinema-highlight/10" : "border border-cinema-gray",
        className
      )}
    >
      {isPopular && (
        <div className="absolute top-0 right-0">
          <div className="bg-cinema-highlight text-cinema-black font-medium py-1 px-4 text-sm rotate-0 transform origin-top-right">
            Popular
          </div>
        </div>
      )}
      
      <div className="p-6 md:p-8 bg-cinema-darkGray">
        <h3 className="text-xl md:text-2xl font-bold text-white font-serif">{name}</h3>
        <p className="text-white/70 mt-2 mb-6 h-12">{description}</p>
        
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-white">{price}</span>
          {price !== 'Custom' && <span className="text-white/70 ml-1">/project</span>}
        </div>
        
        <Button 
          className={cn(
            "w-full mt-6",
            isPopular 
              ? "bg-cinema-highlight text-cinema-black hover:bg-cinema-highlight/90" 
              : "bg-transparent border border-cinema-highlight text-cinema-highlight hover:bg-cinema-highlight/10"
          )}
        >
          Get Started
        </Button>
      </div>
      
      <div className="p-6 md:p-8 bg-cinema-gray">
        <h4 className="font-medium text-white mb-4">What's included:</h4>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className={`flex items-start ${feature.included ? 'text-white' : 'text-white/50 line-through'}`}
            >
              <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${feature.included ? 'text-cinema-highlight' : 'text-white/30'}`} />
              <span className="text-sm">{feature.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PackageCard;
