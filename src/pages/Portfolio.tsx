
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PortfolioItem from '@/components/PortfolioItem';
import { Button } from '@/components/ui/button';

// Portfolio item type
interface PortfolioItemType {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  videoUrl?: string;
}

// Categories for filtering
const categories = [
  'All',
  'Commercial',
  'Music Video',
  'Corporate',
  'Event',
  'Documentary',
  'Short Film'
];

// Mock portfolio data
const portfolioItems: PortfolioItemType[] = [
  {
    id: '1',
    title: 'Project Horizon',
    category: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW8lMjBwcm9kdWN0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
  },
  {
    id: '2',
    title: 'Resonance',
    category: 'Music Video',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW8lMjBwcm9kdWN0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
  },
  {
    id: '3',
    title: 'TechTalk 2024',
    category: 'Event',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uZmVyZW5jZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  },
  {
    id: '4',
    title: 'Innovate Launch',
    category: 'Corporate',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW8lMjBlZGl0aW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
  },
  {
    id: '5',
    title: 'Luminous',
    category: 'Music Video',
    imageUrl: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJ2aWV3fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
  },
  {
    id: '6',
    title: 'Urban Stories',
    category: 'Documentary',
    imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW8lMjBwcm9kdWN0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
  },
  {
    id: '7',
    title: 'Nightfall',
    category: 'Short Film',
    imageUrl: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGl2ZSUyMGJyb2FkY2FzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  },
  {
    id: '8',
    title: 'Elevate Brand',
    category: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uZmVyZW5jZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  },
  {
    id: '9',
    title: 'Summit Conference',
    category: 'Event',
    imageUrl: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJ2aWV3fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Filter items based on selected category
  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-32 bg-cinema-black relative">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW8lMjBwcm9kdWN0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60')] bg-cover bg-fixed bg-center" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
                Our <span className="text-cinema-highlight">Portfolio</span>
              </h1>
              <p className="text-white/80 md:text-lg">
                Explore our collection of creative video projects spanning various industries and styles.
              </p>
            </div>
          </div>
        </section>
        
        {/* Filter Section */}
        <section className="py-8 bg-cinema-darkGray sticky top-16 z-30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(category => (
                <Button 
                  key={category} 
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category 
                    ? "bg-cinema-highlight text-cinema-black hover:bg-cinema-highlight/90" 
                    : "border-cinema-gray text-white hover:bg-cinema-gray/20"}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section className="py-16 bg-cinema-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map(item => (
                <PortfolioItem 
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  category={item.category}
                  imageUrl={item.imageUrl}
                  videoUrl={item.videoUrl}
                />
              ))}
            </div>
            
            {/* Empty state */}
            {filteredItems.length === 0 && (
              <div className="py-16 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
                <p className="text-white/70">No projects match the selected category.</p>
                <Button 
                  className="mt-6 bg-cinema-highlight text-cinema-black hover:bg-cinema-highlight/90"
                  onClick={() => setSelectedCategory('All')}
                >
                  View All Projects
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-cinema-darkGray">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-6">
                Let's Create Your Next <span className="text-cinema-highlight">Video Project</span>
              </h2>
              <p className="text-white/80 mb-8">
                Ready to bring your vision to life? Contact us today to start discussing your project.
              </p>
              <Button asChild className="bg-cinema-highlight text-cinema-black hover:bg-cinema-highlight/90">
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
