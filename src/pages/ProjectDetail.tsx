
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Calendar, User, Tag } from 'lucide-react';

// Mock project data - in a real app, this would come from an API or database
const projects = {
  '1': {
    id: '1',
    title: 'Project Horizon',
    category: 'Commercial',
    client: 'Innovate Tech',
    date: 'March 2024',
    videoUrl: 'https://player.vimeo.com/video/76979871',
    description: 'A cinematic brand commercial for Innovate Tech\'s new product line. This project showcases our ability to combine storytelling with product demonstration in a visually striking way.',
    challenge: 'The client needed to showcase multiple products while maintaining a cohesive narrative and brand identity. They also required filming in multiple locations with tight scheduling constraints.',
    solution: 'We developed a creative concept that utilized parallel storytelling to showcase different products in complementary scenarios. Our team coordinated a complex shooting schedule across three locations, utilizing a consistent visual language to maintain brand cohesion.',
    tools: ['RED Komodo 6K', 'DJI Ronin 2', 'Aputure 600d Pro', 'Adobe Premiere Pro', 'DaVinci Resolve'],
    testimonial: {
      quote: 'FrameFocus delivered beyond our expectations. The team's creativity and attention to detail resulted in a commercial that perfectly captures our brand essence while showcasing our products in an engaging way.',
      name: 'Sarah Johnson',
      role: 'Marketing Director, Innovate Tech'
    },
    images: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW8lMjBwcm9kdWN0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW8lMjBwcm9kdWN0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJ2aWV3fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
    ]
  },
  '2': {
    id: '2',
    title: 'Resonance',
    category: 'Music Video',
    client: 'Echo Records',
    date: 'January 2024',
    videoUrl: 'https://player.vimeo.com/video/76979871',
    description: 'A visually stunning music video for artist Luna Ray\'s hit single "Resonance." This project showcases our creative direction and ability to translate musical themes into powerful visuals.',
    challenge: 'The artist wanted a video that captured the ethereal quality of the song while incorporating practical effects rather than CGI. The shooting schedule was limited to just two days.',
    solution: 'We developed a concept using innovative lighting techniques, practical in-camera effects, and choreographed camera movements to create visually arresting sequences that complemented the music.',
    tools: ['Sony FX9', 'Zeiss CP.3 lenses', 'Quasar Science Rainbow 2', 'Adobe Premiere Pro', 'After Effects'],
    testimonial: {
      quote: 'The FrameFocus team somehow managed to capture exactly what I heard in my head when I wrote this song. The visual storytelling elevated the music in ways I couldn\'t have imagined.',
      name: 'Luna Ray',
      role: 'Artist, Echo Records'
    },
    images: [
      'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGl2ZSUyMGJyb2FkY2FzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW8lMjBlZGl0aW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uZmVyZW5jZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
    ]
  },
  '3': {
    id: '3',
    title: 'TechTalk 2024',
    category: 'Event',
    client: 'Global Conferences',
    date: 'February 2024',
    videoUrl: 'https://player.vimeo.com/video/76979871',
    description: 'Comprehensive video coverage of the annual TechTalk conference, including keynote speeches, panel discussions, and highlight reels.',
    challenge: 'The event featured multiple simultaneous sessions across five venues with varying lighting conditions. The client required both live streaming and post-event edited content.',
    solution: 'We deployed a team of videographers with synchronized equipment across all venues, established a central control room for live switching, and developed a streamlined post-production workflow for quick turnaround of daily highlights.',
    tools: ['Multiple Sony FX9 cameras', 'BlackMagic ATEM switcher', 'Sennheiser audio systems', 'OBS Studio', 'Adobe Premiere Pro'],
    testimonial: {
      quote: 'FrameFocus handled our complex event with exceptional professionalism. The live streams were flawless, and the edited content was delivered faster than expected while maintaining outstanding quality.',
      name: 'Michael Rodriguez',
      role: 'Events Coordinator, Global Conferences'
    },
    images: [
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uZmVyZW5jZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJ2aWV3fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW8lMjBlZGl0aW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
    ]
  }
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projects[id as keyof typeof projects] : null;
  
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);
  
  if (!project) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen py-32 bg-cinema-black">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold font-serif text-white mb-8">Project Not Found</h1>
              <p className="text-white/70 mb-8">The project you're looking for doesn't exist or has been removed.</p>
              <Button asChild className="bg-cinema-highlight text-cinema-black hover:bg-cinema-highlight/90">
                <Link to="/portfolio">Back to Portfolio</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-cinema-black">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Link to="/portfolio" className="inline-flex items-center text-white hover:text-cinema-highlight transition-colors">
                <ChevronLeft className="w-5 h-5 mr-1" />
                Back to Portfolio
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-white mb-6">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center text-white/70">
                <Tag className="w-4 h-4 mr-2" />
                <span>{project.category}</span>
              </div>
              <div className="flex items-center text-white/70">
                <User className="w-4 h-4 mr-2" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center text-white/70">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{project.date}</span>
              </div>
            </div>
            
            {/* Video Embed */}
            <div className="w-full cinematic-ratio rounded-lg overflow-hidden bg-cinema-darkGray mb-12 frame">
              <iframe 
                src={project.videoUrl} 
                title={project.title}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </section>
        
        {/* Project Details */}
        <section className="py-16 bg-cinema-darkGray">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-white mb-6">
                  About the <span className="text-cinema-highlight">Project</span>
                </h2>
                <p className="text-white/80 mb-8">
                  {project.description}
                </p>
                
                <h3 className="text-xl font-bold font-serif text-white mb-4">Challenge</h3>
                <p className="text-white/80 mb-8">
                  {project.challenge}
                </p>
                
                <h3 className="text-xl font-bold font-serif text-white mb-4">Solution</h3>
                <p className="text-white/80 mb-8">
                  {project.solution}
                </p>
                
                {/* Behind the Scenes Images */}
                <h3 className="text-xl font-bold font-serif text-white mb-6">Behind the Scenes</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.images.map((image, index) => (
                    <div key={index} className="rounded-md overflow-hidden cinematic-ratio frame">
                      <img 
                        src={image} 
                        alt={`Behind the scenes ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-cinema-gray p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold font-serif text-white mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Client</h4>
                      <p className="text-white/70">{project.client}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Category</h4>
                      <p className="text-white/70">{project.category}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Date</h4>
                      <p className="text-white/70">{project.date}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-cinema-gray p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold font-serif text-white mb-4">Tools Used</h3>
                  <ul className="space-y-2">
                    {project.tools.map((tool, index) => (
                      <li key={index} className="text-white/70 flex items-center">
                        <span className="w-1.5 h-1.5 bg-cinema-highlight rounded-full mr-3"></span>
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-cinema-gray p-6 rounded-lg">
                  <h3 className="text-xl font-bold font-serif text-white mb-4">Client Testimonial</h3>
                  <blockquote className="border-l-2 border-cinema-highlight pl-4 mb-4">
                    <p className="text-white/80 italic">"{project.testimonial.quote}"</p>
                  </blockquote>
                  <div className="text-right">
                    <p className="text-white font-semibold">{project.testimonial.name}</p>
                    <p className="text-white/70 text-sm">{project.testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-cinema-black">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-serif text-white mb-6">
                Ready to Create Something <span className="text-cinema-highlight">Amazing</span>?
              </h2>
              <p className="text-white/80 mb-8">
                Let's discuss how we can bring your vision to life with our video production expertise.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild className="bg-cinema-highlight text-cinema-black hover:bg-cinema-highlight/90">
                  <Link to="/contact">Start Your Project</Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/portfolio">View More Work</Link>
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

export default ProjectDetail;
