
import React from 'react';
import VideoHero from '@/components/VideoHero';
import ServiceCard from '@/components/ServiceCard';
import PackageCard from '@/components/PackageCard';
import TestimonialSlider from '@/components/TestimonialSlider';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Testimonial } from '@/components/TestimonialSlider';
import { Film, Camera, Video } from 'lucide-react';

// Mock data for services
const services = [
  {
    id: '1',
    title: 'Promo Videos',
    description: 'Professional promotional videos for your business or product.',
    imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW8lMjBwcm9kdWN0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    link: '/services/promo'
  },
  {
    id: '2',
    title: 'Interview Filming',
    description: 'High-quality interview filming with professional lighting and sound.',
    imageUrl: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJ2aWV3fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    link: '/services/interview'
  },
  {
    id: '3',
    title: 'Conference Filming',
    description: 'Capture your conference or event with multiple camera angles.',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uZmVyZW5jZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    link: '/services/conference'
  },
  {
    id: '4',
    title: 'Live Broadcasts',
    description: 'Professional live streaming services for your events.',
    imageUrl: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGl2ZSUyMGJyb2FkY2FzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    link: '/services/live'
  }
];

// Mock data for testimonials
const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "FrameFocus transformed our brand story with their exceptional filmmaking. The team's creativity and technical expertise delivered beyond our expectations.",
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Innovate Tech"
  },
  {
    id: 2,
    quote: "Working with FrameFocus was a game-changer for our product launch. Their attention to detail and storytelling ability helped us connect with our audience in a meaningful way.",
    name: "David Chen",
    role: "CEO",
    company: "Startup Vision"
  },
  {
    id: 3,
    quote: "The quality and professionalism of FrameFocus is unmatched. They captured the essence of our conference perfectly, creating content we've used across all our platforms.",
    name: "Michael Rodriguez",
    role: "Events Coordinator",
    company: "Global Conferences"
  }
];

// Common features for all packages
const commonFeatures = [
  { name: "Professional Equipment", included: true },
  { name: "Editing & Color Grading", included: true },
  { name: "Licensed Music", included: true },
  { name: "Delivery in 4K", included: true }
];

const Index = () => {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <VideoHero 
          title="Cinematic Stories That Captivate"
          subtitle="Award-winning video production studio crafting compelling visual narratives."
          videoUrl="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-32809-large.mp4"
          buttonText="Let's Create Together"
          buttonLink="/contact"
        />
        
        {/* About Section */}
        <section className="py-20 bg-cinema-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
                <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-white">
                  We Bring Your <span className="text-cinema-highlight">Vision</span> To Life
                </h2>
                <p className="text-white/80 mb-6">
                  FrameFocus is a team of passionate filmmakers, storytellers, and visual artists dedicated to creating exceptional video content that resonates with audiences.
                </p>
                <p className="text-white/80 mb-8">
                  With years of experience in the industry, we combine technical expertise with creative vision to deliver stunning visual narratives for brands, businesses, and individuals.
                </p>
                <Button asChild variant="outline" className="border-cinema-highlight text-cinema-highlight hover:bg-cinema-highlight/10">
                  <Link to="/about">Meet Our Team</Link>
                </Button>
              </div>
              <div className="md:w-1/2">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW8lMjBlZGl0aW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" 
                    alt="Our team working" 
                    className="w-full h-auto rounded-md shadow-xl frame"
                  />
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-cinema-highlight rounded-md flex items-center justify-center z-10">
                    <p className="text-cinema-black font-bold text-xl">10+</p>
                    <p className="text-cinema-black text-xs font-medium">Years<br/>Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-20 bg-cinema-darkGray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">
                Our <span className="text-cinema-highlight">Services</span>
              </h2>
              <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                We offer a wide range of video production services to meet your creative needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map(service => (
                <ServiceCard 
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  imageUrl={service.imageUrl}
                  link={service.link}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild className="bg-transparent border border-cinema-highlight text-cinema-highlight hover:bg-cinema-highlight/10">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Featured Work Section */}
        <section className="py-20 bg-cinema-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">
                Featured <span className="text-cinema-highlight">Work</span>
              </h2>
              <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                Explore our latest projects and see how we bring ideas to life.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative rounded-md overflow-hidden cinematic-ratio frame">
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW8lMjBwcm9kdWN0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" 
                  alt="Featured project 1" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-cinema-black/60 hover:bg-cinema-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">Project Horizon</h3>
                    <p className="text-cinema-highlight">Brand Commercial</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                <div className="relative rounded-md overflow-hidden cinematic-ratio frame">
                  <img 
                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uZmVyZW5jZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" 
                    alt="Featured project 2" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-cinema-black/60 hover:bg-cinema-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-xl font-serif font-bold text-white mb-2">TechTalk 2024</h3>
                      <p className="text-cinema-highlight">Conference</p>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-md overflow-hidden cinematic-ratio frame">
                  <img 
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJ2aWV3fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" 
                    alt="Featured project 3" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-cinema-black/60 hover:bg-cinema-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-xl font-serif font-bold text-white mb-2">Luminous</h3>
                      <p className="text-cinema-highlight">Music Video</p>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-md overflow-hidden cinematic-ratio frame col-span-full">
                  <img 
                    src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGl2ZSUyMGJyb2FkY2FzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" 
                    alt="Featured project 4" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-cinema-black/60 hover:bg-cinema-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-xl font-serif font-bold text-white mb-2">Nightfall Series</h3>
                      <p className="text-cinema-highlight">Short Film</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild className="bg-transparent border border-cinema-highlight text-cinema-highlight hover:bg-cinema-highlight/10">
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Packages Section */}
        <section className="py-20 bg-cinema-darkGray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">
                Video Production <span className="text-cinema-highlight">Packages</span>
              </h2>
              <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                Choose the perfect package for your project needs or contact us for a custom quote.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PackageCard
                name="Basic"
                description="Perfect for simple video projects"
                price="$1,499"
                features={[
                  ...commonFeatures,
                  { name: "Up to 3 hours filming", included: true },
                  { name: "1 camera setup", included: true },
                  { name: "Basic lighting kit", included: true },
                  { name: "1 round of revisions", included: true },
                  { name: "Delivery within 2 weeks", included: true },
                  { name: "Motion graphics", included: false },
                  { name: "Drone footage", included: false },
                  { name: "Script development", included: false }
                ]}
              />
              
              <PackageCard
                name="Professional"
                description="Our most popular package for businesses"
                price="$3,499"
                features={[
                  ...commonFeatures,
                  { name: "Up to 6 hours filming", included: true },
                  { name: "2 camera setup", included: true },
                  { name: "Full lighting kit", included: true },
                  { name: "2 rounds of revisions", included: true },
                  { name: "Delivery within 10 days", included: true },
                  { name: "Basic motion graphics", included: true },
                  { name: "Drone footage", included: false },
                  { name: "Script development", included: true }
                ]}
                isPopular
              />
              
              <PackageCard
                name="Premium"
                description="Everything you need for high-end production"
                price="$6,999"
                features={[
                  ...commonFeatures,
                  { name: "Full day filming (8+ hours)", included: true },
                  { name: "3+ camera setup", included: true },
                  { name: "Advanced lighting setup", included: true },
                  { name: "3 rounds of revisions", included: true },
                  { name: "Expedited delivery", included: true },
                  { name: "Advanced motion graphics", included: true },
                  { name: "Drone footage", included: true },
                  { name: "Script & storyboard", included: true }
                ]}
              />
            </div>
            
            <div className="mt-16 bg-cinema-gray p-8 rounded-lg text-center">
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Need a Custom Package?</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                We understand that every project is unique. Contact us to discuss your specific needs and we'll create a tailored solution just for you.
              </p>
              <Button asChild className="bg-cinema-highlight text-cinema-black hover:bg-cinema-highlight/90">
                <Link to="/contact">Get a Custom Quote</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-20 bg-cinema-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">
                Why Choose <span className="text-cinema-highlight">FrameFocus</span>
              </h2>
              <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                We bring expertise, creativity, and dedication to every project.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-cinema-highlight/20 flex items-center justify-center mb-6">
                  <Film className="w-8 h-8 text-cinema-highlight" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-3">Artistic Vision</h3>
                <p className="text-white/70">
                  We approach each project with a unique creative perspective, ensuring your story is told in the most impactful way.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-cinema-highlight/20 flex items-center justify-center mb-6">
                  <Camera className="w-8 h-8 text-cinema-highlight" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-3">Technical Excellence</h3>
                <p className="text-white/70">
                  Our team uses the latest equipment and techniques to deliver stunning high-quality visuals and sound.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-cinema-highlight/20 flex items-center justify-center mb-6">
                  <Video className="w-8 h-8 text-cinema-highlight" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-3">Client-Focused Process</h3>
                <p className="text-white/70">
                  We prioritize clear communication and collaboration throughout the production process to ensure your vision comes to life.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20 bg-cinema-darkGray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">
                Client <span className="text-cinema-highlight">Testimonials</span>
              </h2>
              <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                What our clients say about working with us.
              </p>
            </div>
            
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-cinema-black relative">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uZmVyZW5jZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60')] bg-cover bg-center" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">
                Ready to Start Your <span className="text-cinema-highlight">Project</span>?
              </h2>
              <p className="text-white/80 mt-6 mb-8">
                Let's discuss how we can bring your vision to life with our professional video production services.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild className="bg-cinema-highlight text-cinema-black hover:bg-cinema-highlight/90">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
