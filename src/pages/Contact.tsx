
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Instagram, Youtube, Mail } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, this would handle form submission
    console.log("Form submitted");
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-32 bg-cinema-black relative">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJ2aWV3fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60')] bg-cover bg-fixed bg-center" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
                Get in <span className="text-cinema-highlight">Touch</span>
              </h1>
              <p className="text-white/80 md:text-lg">
                Ready to bring your vision to life? We're excited to discuss your project.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-20 bg-cinema-darkGray">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Form */}
              <div className="lg:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-white mb-8">
                  Send Us a <span className="text-cinema-highlight">Message</span>
                </h2>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white mb-2">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 bg-cinema-gray text-white border border-cinema-gray focus:border-cinema-highlight focus:outline-none rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 bg-cinema-gray text-white border border-cinema-gray focus:border-cinema-highlight focus:outline-none rounded-md"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 bg-cinema-gray text-white border border-cinema-gray focus:border-cinema-highlight focus:outline-none rounded-md"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="projectType" className="block text-white mb-2">Project Type</label>
                    <select 
                      id="projectType" 
                      className="w-full px-4 py-3 bg-cinema-gray text-white border border-cinema-gray focus:border-cinema-highlight focus:outline-none rounded-md"
                    >
                      <option value="">Select a project type</option>
                      <option value="commercial">Commercial</option>
                      <option value="corporate">Corporate Video</option>
                      <option value="event">Event Coverage</option>
                      <option value="music">Music Video</option>
                      <option value="documentary">Documentary</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={6} 
                      className="w-full px-4 py-3 bg-cinema-gray text-white border border-cinema-gray focus:border-cinema-highlight focus:outline-none rounded-md resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="newsletter" 
                      className="w-4 h-4 text-cinema-highlight bg-cinema-gray border-cinema-gray focus:ring-cinema-highlight rounded"
                    />
                    <label htmlFor="newsletter" className="ml-2 text-white/70 text-sm">
                      Subscribe to our newsletter for updates and inspiration
                    </label>
                  </div>
                  
                  <Button type="submit" className="bg-cinema-highlight text-cinema-black hover:bg-cinema-highlight/90 px-8 py-6">
                    Send Message
                  </Button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div className="lg:w-1/3">
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-white mb-8">
                  Contact <span className="text-cinema-highlight">Info</span>
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white mb-3">Address</h3>
                    <address className="not-italic text-white/70">
                      <p className="mb-1">123 Cinema Street</p>
                      <p className="mb-1">Los Angeles, CA 90028</p>
                      <p>United States</p>
                    </address>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white mb-3">Contact</h3>
                    <p className="text-white/70 mb-1">
                      <a href="tel:+11234567890" className="hover:text-cinema-highlight transition-colors">+1 (123) 456-7890</a>
                    </p>
                    <p className="text-white/70">
                      <a href="mailto:hello@framefocus.com" className="hover:text-cinema-highlight transition-colors">hello@framefocus.com</a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white mb-3">Hours</h3>
                    <p className="text-white/70 mb-1">Monday - Friday: 9am - 6pm</p>
                    <p className="text-white/70">Weekend: By appointment</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cinema-highlight transition-colors">
                        <Instagram size={24} />
                      </a>
                      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cinema-highlight transition-colors">
                        <Youtube size={24} />
                      </a>
                      <a href="mailto:contact@framefocus.com" className="text-white hover:text-cinema-highlight transition-colors">
                        <Mail size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="bg-cinema-black">
          <div className="h-96">
            {/* In a real application, you would embed a Google Maps or similar map here */}
            <div className="w-full h-full bg-cinema-gray flex items-center justify-center">
              <div className="text-center">
                <p className="text-white font-serif text-xl mb-4">Map Placeholder</p>
                <p className="text-white/70">A map would be embedded here in a real application</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 bg-cinema-darkGray">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-6">
                  Frequently Asked <span className="text-cinema-highlight">Questions</span>
                </h2>
                <p className="text-white/80">
                  Have questions? We've got answers to the most common inquiries.
                </p>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-3">What is your typical production timeline?</h3>
                  <p className="text-white/70">
                    Our production timeline varies based on project complexity and scope. A typical commercial project takes 2-4 weeks from initial concept to final delivery, while larger productions may take 6-8 weeks.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-3">What does your pricing include?</h3>
                  <p className="text-white/70">
                    Our packages include pre-production planning, filming, editing, color grading, and basic motion graphics. Additional services like scriptwriting, extensive VFX, or drone footage may incur additional costs depending on your package.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-3">Do you travel for projects?</h3>
                  <p className="text-white/70">
                    Yes, we're available for projects nationwide and internationally. Travel expenses are quoted separately based on location and project requirements.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-3">How many revisions are included?</h3>
                  <p className="text-white/70">
                    Our Basic package includes 1 round of revisions, Professional includes 2 rounds, and Premium includes 3 rounds. Additional revisions are available at an hourly rate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
