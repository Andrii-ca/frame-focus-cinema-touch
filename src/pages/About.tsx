
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Camera, Film, Video } from 'lucide-react';

// Team member type
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

// Mock team data
const teamMembers: TeamMember[] = [
  {
    name: "Alex Rivera",
    role: "Creative Director",
    bio: "With over 15 years of experience in filmmaking, Alex brings creative vision and technical expertise to every project.",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  },
  {
    name: "Jordan Chen",
    role: "Cinematographer",
    bio: "Jordan's eye for composition and lighting helps create the distinctive visual style that defines our work.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  },
  {
    name: "Morgan Taylor",
    role: "Editor & Colorist",
    bio: "Morgan crafts the final narrative through expert editing and color grading that enhances the emotional impact of every frame.",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  },
  {
    name: "Sam Rodriguez",
    role: "Sound Designer",
    bio: "Sam's expertise in audio engineering ensures that every project sounds as professional as it looks.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  },
];

// Equipment list
const equipment = [
  { category: "Cameras", items: ["RED Komodo 6K", "Sony FX9", "Canon C300 Mark III", "Sony A7S III"] },
  { category: "Lenses", items: ["Canon Cinema Primes", "Sigma Art Series", "Zeiss CP.3", "Rokinon Cine DS"] },
  { category: "Support", items: ["DJI Ronin 2", "Dana Dolly", "Sachtler Flowtech Tripods", "Crane 3S Pro"] },
  { category: "Lighting", items: ["Arri SkyPanel", "Aputure 600d Pro", "Quasar Science Rainbow 2", "Litepanels Gemini"] },
  { category: "Audio", items: ["Sennheiser MKH 416", "Rode NTG5", "Sound Devices MixPre-10 II", "Wireless Lavalier Systems"] },
];

const About = () => {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-32 bg-cinema-black relative">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW8lMjBlZGl0aW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60')] bg-cover bg-fixed bg-center" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
                About <span className="text-cinema-highlight">FrameFocus</span>
              </h1>
              <p className="text-white/80 md:text-lg">
                A passionate team of filmmakers dedicated to bringing your stories to life.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-20 bg-cinema-darkGray">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-6">
                  Our <span className="text-cinema-highlight">Story</span>
                </h2>
                <p className="text-white/80 mb-6">
                  FrameFocus was founded in 2014 by a group of passionate filmmakers who shared a vision: to create cinematic, emotionally resonant videos that tell powerful stories.
                </p>
                <p className="text-white/80 mb-6">
                  What began as a small team working out of a garage has grown into a full-service production studio with a reputation for creative excellence and technical proficiency. Throughout our journey, we've remained committed to our core values of creativity, quality, and client satisfaction.
                </p>
                <p className="text-white/80">
                  Today, we work with clients across industries to produce compelling content that captivates audiences and delivers results. From brand commercials to documentaries, music videos to corporate films, our diverse portfolio showcases our versatility and expertise.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uZmVyZW5jZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" 
                    alt="Team filming on location" 
                    className="rounded-md w-full h-auto object-cover aspect-square frame"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW8lMjBlZGl0aW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" 
                    alt="Video editing process" 
                    className="rounded-md w-full h-auto object-cover aspect-square frame"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJ2aWV3fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" 
                    alt="Interview setup" 
                    className="rounded-md w-full h-auto object-cover aspect-square frame"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGl2ZSUyMGJyb2FkY2FzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" 
                    alt="Live event filming" 
                    className="rounded-md w-full h-auto object-cover aspect-square frame"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Philosophy Section */}
        <section className="py-20 bg-cinema-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-8">
                Our <span className="text-cinema-highlight">Philosophy</span>
              </h2>
              <p className="text-white/80 text-lg mb-10">
                At FrameFocus, we believe that powerful visual storytelling can transform how audiences perceive brands, products, and ideas. Our approach combines technical expertise with artistic vision to create videos that don't just inform—they inspire, move, and motivate.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-cinema-highlight/20 flex items-center justify-center mb-6">
                    <Film className="w-8 h-8 text-cinema-highlight" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-4">Story First</h3>
                  <p className="text-white/70">
                    Every visual decision we make serves the story. We focus on narrative impact before technical flash.
                  </p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-cinema-highlight/20 flex items-center justify-center mb-6">
                    <Camera className="w-8 h-8 text-cinema-highlight" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-4">Cinematic Quality</h3>
                  <p className="text-white/70">
                    We bring film-level quality to every project, regardless of budget or scope.
                  </p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-cinema-highlight/20 flex items-center justify-center mb-6">
                    <Video className="w-8 h-8 text-cinema-highlight" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-4">Client Partnership</h3>
                  <p className="text-white/70">
                    We view every project as a collaboration, working closely with clients to realize their vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20 bg-cinema-darkGray">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-6">
                Meet Our <span className="text-cinema-highlight">Team</span>
              </h2>
              <p className="text-white/80">
                Our talented team brings diverse skills and perspectives to every project.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-cinema-gray rounded-lg overflow-hidden hover-scale">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-white">{member.name}</h3>
                    <p className="text-cinema-highlight text-sm mb-4">{member.role}</p>
                    <p className="text-white/70 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Equipment Section */}
        <section className="py-20 bg-cinema-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-6">
                  Our <span className="text-cinema-highlight">Gear</span>
                </h2>
                <p className="text-white/80">
                  We use professional equipment to ensure the highest quality for your project.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {equipment.map((category, index) => (
                  <div key={index} className="bg-cinema-darkGray rounded-lg p-6">
                    <h3 className="text-xl font-serif font-bold text-white mb-4">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-white/70 flex items-center">
                          <span className="w-2 h-2 bg-cinema-highlight rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-cinema-darkGray">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-6">
                Ready to Work <span className="text-cinema-highlight">With Us</span>?
              </h2>
              <p className="text-white/80 mb-8">
                Whether you have a specific project in mind or just want to explore possibilities, we're excited to hear from you.
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

export default About;
