
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  imageUrl?: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
  className?: string;
}

const TestimonialSlider = ({ 
  testimonials,
  autoPlayInterval = 5000,
  className
}: TestimonialSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prev = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
  };

  // Auto play
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      next();
    }, autoPlayInterval);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex, autoPlayInterval, testimonials.length]);

  // Pause on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);
  
  return (
    <div 
      className={cn("relative py-12", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative min-h-[20rem]">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={cn(
                "absolute top-0 left-0 w-full transition-all duration-700 ease-in-out",
                index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
              )}
            >
              <div className="flex flex-col items-center text-center">
                <Quote className="w-12 h-12 text-cinema-highlight opacity-50 mb-6" />
                
                <p className="text-xl md:text-2xl font-serif italic text-white leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>
                
                {testimonial.imageUrl && (
                  <img 
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mb-4"
                  />
                )}
                
                <div className="mt-2">
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-white/70 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {testimonials.length > 1 && (
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-cinema-highlight" : "bg-white/30 hover:bg-white/50"
                )}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      
      {testimonials.length > 1 && (
        <>
          <button 
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-cinema-darkGray/80 text-white hover:bg-cinema-highlight/80 hover:text-black transition-colors"
            onClick={prev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-cinema-darkGray/80 text-white hover:bg-cinema-highlight/80 hover:text-black transition-colors"
            onClick={next}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}
    </div>
  );
};

export default TestimonialSlider;
