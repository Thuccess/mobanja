
import React from 'react';
import WhatsAppSimulator from '../components/WhatsAppSimulator';
import { MessageCircle, ShieldCheck, Zap, ShoppingBag } from 'lucide-react';
import Button from '../components/Button';

const WhatsAppFlows: React.FC = () => {
  return (
    <div className="pt-32 pb-20 animate-fade-in bg-bg min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 mb-6">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-bold">Live Demo</span>
           </div>
           <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
              The WhatsApp-First <br className="hidden md:block" />
              <span className="text-[#25D366]">Commerce Engine</span>
           </h1>
           <p className="text-xl text-text-medium max-w-2xl mx-auto">
              Experience our fully automated end-to-end shopping journey. 
              From ID verification to instant credit approval, everything happens inside WhatsApp.
           </p>
        </div>

        {/* Main Demo Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
           <div className="lg:col-span-5">
              <WhatsAppSimulator />
           </div>
           <div className="lg:col-span-7 space-y-10 pt-8">
              <div className="bg-surface p-8 rounded-3xl border border-border shadow-sm">
                 <h3 className="text-2xl font-bold text-primary mb-4">Key Capabilities</h3>
                 <div className="grid gap-6">
                    <Feature 
                      icon={ShoppingBag} 
                      title="Product Catalog Integration" 
                      desc="Users can browse the latest iPhone models, view 360 images, and select instalment plans directly within the chat."
                    />
                    <Feature 
                      icon={ShieldCheck} 
                      title="Automated KYU & Risk" 
                      desc="Our bot collects National IDs and Selfies, running real-time facial recognition and government database checks for instant approval."
                    />
                    <Feature 
                      icon={Zap} 
                      title="Instant Underwriting" 
                      desc="Our engine analyzes mobile money statements and credit history in <30 seconds to generate a custom spending limit."
                    />
                 </div>
              </div>

              <div className="bg-primary text-white p-8 rounded-3xl relative overflow-hidden">
                 <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Ready to launch?</h3>
                    <p className="text-gray-300 mb-8">
                       This system is fully integrated with MTN MoMo and Airtel Money APIs for automated collections.
                    </p>
                    <a href="https://wa.me/256709477930" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-[#25D366] hover:bg-[#1ebc57] border-none text-white w-full md:w-auto">
                            Test on Real WhatsApp
                        </Button>
                    </a>
                 </div>
                 <div className="absolute right-0 bottom-0 opacity-10">
                    <MessageCircle size={150} />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const Feature = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="flex gap-4">
     <div className="w-12 h-12 rounded-full bg-bg flex items-center justify-center flex-shrink-0 text-primary">
        <Icon size={24} />
     </div>
     <div>
        <h4 className="font-bold text-primary text-lg">{title}</h4>
        <p className="text-text-medium leading-relaxed">{desc}</p>
     </div>
  </div>
);

export default WhatsAppFlows;
