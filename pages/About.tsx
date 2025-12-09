import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 animate-fade-in">
      {/* Hero */}
      <div className="max-w-[800px] mx-auto px-6 text-center mb-20">
        <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">Bridging the Digital Divide</h1>
        <p className="text-xl text-text-medium leading-relaxed">
          Mobanja is on a mission to make technology accessible to every African through fair, transparent, and affordable financial solutions.
        </p>
      </div>

      {/* Story Section */}
      <div className="bg-surface py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1">
               {/* Updated to diverse tech team image */}
               <img 
                 src="/our-story-image.jpg" 
                 alt="Mobanja Team Meeting" 
                 className="rounded-2xl shadow-xl"
               />
             </div>
             <div className="order-1 md:order-2 space-y-6">
               <h2 className="text-3xl font-bold text-primary">Our Story</h2>
               <p className="text-text-medium text-lg leading-relaxed">
                 Founded in 2023, Mobanja recognized a critical gap in the market: millions of talented individuals lacked access to high-quality digital devices due to high upfront costs and rigid traditional banking systems.
               </p>
               <p className="text-text-medium text-lg leading-relaxed">
                 We built Mobanja to be different. We use alternative data points to assess creditworthiness, allowing us to serve the unbanked and underbanked population with dignity and trust.
               </p>
             </div>
           </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 bg-bg">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Mission', text: 'To empower 1 million Africans with digital tools by 2030.' },
              { icon: Eye, title: 'Vision', text: 'A continent where financial barriers never stop potential.' },
              { icon: Heart, title: 'Values', text: 'Transparency, Empathy, and Innovation in everything we do.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-surface p-10 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/5 dark:bg-white/10 text-primary dark:text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-text-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;