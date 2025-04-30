
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Film, Camera, Video } from 'lucide-react';

// Mock data for services
const services = [
  {
    id: '1',
    title: 'Promo and Advertising',
    description: 'Engaging promotional videos and advertisements that capture attention and drive action.',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW8lMjBwcm9kdWN0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    link: '/services/promo',
    details: 'Our promotional videos are designed to showcase your products or services in the most compelling way. From TV commercials to social media ads, we create content that resonates with your target audience and drives results.'
  },
  {
    id: '2',
    title: 'Reportage Video Filming',
    description: 'Documentary-style filming that captures events and stories with authenticity and depth.',
    imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW8lMjBwcm9kdWN0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    link: '/services/reportage',
    details: 'Our reportage video service captures real moments as they unfold, creating authentic documentary-style content that tells powerful stories. Perfect for events, behind-the-scenes features, and journalistic projects.'
  },
  {
    id: '3',
    title: 'Interview Filming',
    description: 'Professional interview setups that ensure your subjects look and sound their best.',
    imageUrl: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJ2aWV3fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    link: '/services/interview',
    details: 'Our interview filming service provides professional multi-camera setups, expert lighting, and crystal-clear audio to ensure your subjects look and sound their best. We create a comfortable environment that brings out authentic responses.'
  },
  {
    id: '4',
    title: 'Courses / Lessons Filming',
    description: 'High-quality video production for educational content and online courses.',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW8lMjBlZGl0aW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    link: '/services/courses',
    details: 'Our course filming service helps educators and trainers create engaging, professional video content for online learning. We handle everything from filming lectures and demonstrations to creating animated explainer segments and interactive elements.'
  },
  {
    id: '5',
    title: 'Conference Filming',
    description: 'Comprehensive coverage of conferences and events with multiple camera angles.',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uZmVyZW5jZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    link: '/services/conference',
    details: 'Our conference filming service captures your entire event with multiple camera setups, ensuring you never miss a moment. From keynote speeches to panel discussions and audience reactions, we provide comprehensive coverage that can be edited into highlight reels or full archives.'
  },
  {
    id: '6',
    title: 'Live Broadcasts',
    description: 'Professional live streaming services for events, launches, and more.',
    imageUrl: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGl2ZSUyMGJyb2FkY2FzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    link: '/services/live',
    details: 'Our live broadcasting service delivers your content to audiences in real-time with professional quality. Using state-of-the-art streaming technology, we ensure a reliable, high-definition broadcast to platforms of your choice, complete with graphics, transitions, and multi-camera switching.'
  }
];

const Services = () => {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-32 bg-cinema-black relative">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uZmVyZW5jZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60')] bg-cover bg-fixed bg-center" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
                Our <span className="text-cinema-highlight">Services</span>
              </h1>
              <p className="text-white/80 md:text-lg">
                Professional video production services tailored to your specific needs.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Overview */}
        <section className="py-20 bg-cinema-darkGray">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-6">
                What We <span className="text-cinema-highlight">Offer</span>
              </h2>
              <p className="text-white/80">
                From concept development to final delivery, we handle every aspect of the video production process with creativity, professionalism, and technical excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
        </section>
        
        {/* Service Details */}
        <section className="py-20 bg-cinema-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-6">
                Our <span className="text-cinema-highlight">Process</span>
              </h2>
              <p className="text-white/80">
                We follow a proven workflow to ensure your project is completed efficiently and to the highest standards.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-cinema-gray hidden md:block transform md:-translate-x-1/2" />
              
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                    <h3 className="text-xl font-serif font-bold text-white mb-2">1. Consultation</h3>
                    <p className="text-white/70">
                      We begin with an in-depth consultation to understand your goals, target audience, and vision. This helps us tailor our approach specifically to your needs.
                    </p>
                  </div>
                  <div className="md:w-16 md:h-16 w-12 h-12 bg-cinema-highlight rounded-full flex items-center justify-center z-10 order-1 md:order-2">
                    <span className="text-cinema-black font-bold text-xl">1</span>
                  </div>
                  <div className="flex-1 md:pl-12 order-3 mt-6 md:mt-0">
                    {/* Empty div for layout */}
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                    {/* Empty div for layout */}
                  </div>
                  <div className="md:w-16 md:h-16 w-12 h-12 bg-cinema-highlight rounded-full flex items-center justify-center z-10 order-1 md:order-2">
                    <span className="text-cinema-black font-bold text-xl">2</span>
                  </div>
                  <div className="flex-1 md:pl-12 order-3 mt-6 md:mt-0">
                    <h3 className="text-xl font-serif font-bold text-white mb-2">2. Pre-Production</h3>
                    <p className="text-white/70">
                      We develop concepts, write scripts, create storyboards, scout locations, and plan every detail before filming begins to ensure smooth production.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                    <h3 className="text-xl font-serif font-bold text-white mb-2">3. Production</h3>
                    <p className="text-white/70">
                      Our experienced crew handles the filming process with state-of-the-art equipment, capturing high-quality footage that brings your vision to life.
                    </p>
                  </div>
                  <div className="md:w-16 md:h-16 w-12 h-12 bg-cinema-highlight rounded-full flex items-center justify-center z-10 order-1 md:order-2">
                    <span className="text-cinema-black font-bold text-xl">3</span>
                  </div>
                  <div className="flex-1 md:pl-12 order-3 mt-6 md:mt-0">
                    {/* Empty div for layout */}
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                    {/* Empty div for layout */}
                  </div>
                  <div className="md:w-16 md:h-16 w-12 h-12 bg-cinema-highlight rounded-full flex items-center justify-center z-10 order-1 md:order-2">
                    <span className="text-cinema-black font-bold text-xl">4</span>
                  </div>
                  <div className="flex-1 md:pl-12 order-3 mt-6 md:mt-0">
                    <h3 className="text-xl font-serif font-bold text-white mb-2">4. Post-Production</h3>
                    <p className="text-white/70">
                      Our editors, colorists, and sound designers work their magic, crafting the raw footage into a polished final product through editing, color grading, sound design, and visual effects.
                    </p>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                    <h3 className="text-xl font-serif font-bold text-white mb-2">5. Revisions & Delivery</h3>
                    <p className="text-white/70">
                      We provide opportunities for feedback and make revisions as needed before delivering the final product in your preferred format and resolution.
                    </p>
                  </div>
                  <div className="md:w-16 md:h-16 w-12 h-12 bg-cinema-highlight rounded-full flex items-center justify-center z-10 order-1 md:order-2">
                    <span className="text-cinema-black font-bold text-xl">5</span>
                  </div>
                  <div className="flex-1 md:pl-12 order-3 mt-6 md:mt-0">
                    {/* Empty div for layout */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-20 bg-cinema-darkGray">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-8">
                  Why Choose <span className="text-cinema-highlight">FrameFocus</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-cinema-highlight/20 rounded-full flex items-center justify-center mr-4">
                      <Film className="w-6 h-6 text-cinema-highlight" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-white mb-2">Artistic Excellence</h3>
                      <p className="text-white/70">Our team combines technical skill with creative vision to create videos that stand out from the crowd.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-cinema-highlight/20 rounded-full flex items-center justify-center mr-4">
                      <Camera className="w-6 h-6 text-cinema-highlight" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-white mb-2">Premium Equipment</h3>
                      <p className="text-white/70">We use the latest cameras, lenses, lighting, and audio gear to ensure cinematic quality for every production.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-cinema-highlight/20 rounded-full flex items-center justify-center mr-4">
                      <Video className="w-6 h-6 text-cinema-highlight" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-white mb-2">Experienced Team</h3>
                      <p className="text-white/70">Our seasoned professionals have worked on projects across industries, bringing valuable insights to every production.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="rounded-lg overflow-hidden cinematic-ratio frame">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW8lMjBwcm9kdWN0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                    alt="Video production team at work" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-cinema-black">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-6">
                Ready to Start Your <span className="text-cinema-highlight">Project</span>?
              </h2>
              <p className="text-white/80 mb-8">
                Contact us today to discuss your video production needs and get a customized quote.
              </p>
              <Button asChild className="bg-cinema-highlight text-cinema-black hover:bg-cinema-highlight/90">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
