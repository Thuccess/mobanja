
import React from 'react';
import { Smartphone, FileText, CheckCircle, Truck, CreditCard, UserCheck, Wallet, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  const prerequisites = [
    {
      icon: UserCheck,
      title: "Valid National ID",
      desc: "A clear photo of your original National ID or Passport.",
      color: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: FileText,
      title: "Income Proof",
      desc: "3-month Mobile Money or Bank statement showing activity.",
      color: "text-purple-500",
      bg: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      icon: Wallet,
      title: "40% Deposit",
      desc: "Ready cash for the initial down payment (paid at office).",
      color: "text-green-500",
      bg: "bg-green-50 dark:bg-green-900/20"
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Choose Your Device",
      desc: "Explore our curated collection of premium iPhones. Whether you need the power of the iPhone 15 Pro Max or the value of the iPhone 12, select the model that fits your lifestyle and budget.",
      // African person looking at phone or in store
      image: "phones/Choose-Your-Device.png",
      icon: Smartphone
    },
    {
      num: "02",
      title: "Apply on WhatsApp",
      desc: "Start your application online. Submit your National ID photo and Income Statement directly to our WhatsApp agent for pre-approval from the comfort of your home.",
      // Person applying on phone
      image: "phones/Apply-on-WhatsApp.png",
      icon: FileText
    },
    {
      num: "03",
      title: "Get Pre-Approved",
      desc: "Our team reviews your documents instantly. Once verified, you will receive an invitation message to visit our office to finalize the deal.",
      // Professional woman smiling
      image: "phones/Get-Pre-Approved.png",
      icon: ShieldCheck
    },
    {
      num: "04",
      title: "Visit Our Office",
      desc: "Come to New Pioneer Mall, Shop PI 62, Kampala. Bring your ID and the 40% down payment. We do not accept online payments for the initial deposit.",
      // Person making mobile payment or holding card/phone
      image: "our-story-image.jpg",
      icon: MapPin
    },
    {
      num: "05",
      title: "Pay & Pick Up",
      desc: "Make your payment at the counter, sign the agreement, and walk away with your brand new iPhone instantly. We'll set it up for you right there.",
      // Happy customer with new tech
      image: "phones/Pay-&-Pick-Up.png",
      icon: CheckCircle
    }
  ];

  return (
    <div className="pt-32 pb-20 animate-fade-in overflow-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6 border border-accent/20 backdrop-blur-sm">
              <span>✨ Apply Online, Pick Up In-Store</span>
           </div>
           <h1 className="text-4xl lg:text-7xl font-extrabold text-primary mb-8 tracking-tight leading-[1.1]">
             Your path to a new <br className="hidden md:block" />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">iPhone in 5 Steps</span>
           </h1>
           <p className="text-xl text-text-medium max-w-2xl mx-auto leading-relaxed">
             Submit your documents on WhatsApp, then visit us at New Pioneer Mall to pick up your device. Safe, secure, and personal.
           </p>
        </div>

        {/* Prerequisites Cards */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-primary">Prerequisites Checklist</h2>
            <p className="text-text-medium">Ensure you have these ready before applying</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {prerequisites.map((item, idx) => (
              <div key={idx} className="relative bg-surface p-8 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-text-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="relative space-y-24 lg:space-y-32">
           {/* Connecting Line (Desktop) */}
           <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent -translate-x-1/2" />

           {steps.map((step, idx) => (
             <div key={idx} className={`relative flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                   <div className="relative group rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 aspect-[4/3]">
                      <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Floating Badge */}
                      <div className={`absolute bottom-6 ${idx % 2 === 0 ? 'left-6' : 'right-6'} z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg flex items-center gap-3`}>
                        <step.icon className="w-6 h-6 text-accent" />
                        <span className="font-bold text-primary text-sm">Step {step.num}</span>
                      </div>
                   </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 text-center lg:text-left relative">
                   {/* Big Number Background */}
                   <span className="absolute -top-20 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 text-[12rem] font-black text-gray-100 dark:text-gray-800/50 leading-none -z-10 select-none opacity-50 lg:opacity-100">
                     {step.num}
                   </span>
                   
                   <div className="relative z-10 pt-4">
                     <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-6">{step.title}</h3>
                     <p className="text-lg text-text-medium leading-relaxed mb-8">{step.desc}</p>
                     {idx === 0 && (
                        <Link to="/phones">
                          <Button variant="outline" className="rounded-full">Browse Catalog</Button>
                        </Link>
                     )}
                     {idx === 1 && (
                        <a href="https://wa.me/256709477930" target="_blank" rel="noreferrer">
                          <Button variant="outline" className="rounded-full">Start on WhatsApp</Button>
                        </a>
                     )}
                   </div>
                </div>

                {/* Mobile Connector Dot */}
                <div className="lg:hidden absolute -left-4 top-0 bottom-0 w-1 bg-gray-100 dark:bg-gray-800 hidden" />
             </div>
           ))}
        </div>

       {/* Bottom CTA */}
<div className="mt-32">
  <div className="relative max-w-[1200px] mx-auto bg-[#0F172A] dark:bg-[#121212] dark:border dark:border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-10 md:p-20 text-center overflow-hidden shadow-2xl">
    
    {/* Abstract Glows */}
    <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/30 rounded-full blur-[80px] md:blur-[120px]"></div>
    <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-300/30 rounded-full blur-[80px] md:blur-[120px]"></div>

    <div className="relative z-10 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight leading-tight">
        Ready to join the Mobanja family?
      </h2>
      <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 px-4">
        Apply online, get approved, and visit us at New Pioneer Mall.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
        <Link to="/phones" className="w-full sm:w-auto">
          <Button
            size="lg"
            className="w-full sm:w-auto h-14 md:h-16 px-6 md:px-8 text-base md:text-lg text-white border-white/20 hover:bg-white/10"
          >
            Find My iPhone
          </Button>
        </Link>
        <Link to="/contact" className="w-full sm:w-auto">
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto h-14 md:h-16 px-6 md:px-8 text-base md:text-lg text-white border-white/20 hover:bg-white/10 shadow-md transition-all duration-300"
          >
            Get Directions
          </Button>
        </Link>
      </div>
    </div>
  </div>
</div>


      </div>
    </div>
  );
};

export default HowItWorks;
