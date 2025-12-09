
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Smartphone, Zap, Star, CreditCard, Clock, MessageCircle, Quote, Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import Button from '../components/Button';
import PhoneCard from '../components/PhoneCard';
import AccordionItem from '../components/Accordion';
import { PHONES, TESTIMONIALS, FAQS } from '../constants';
import WhatsAppIcon from '../components/WhatsAppIcon';

const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = async () => {
    if (!videoRef.current) return;
    
    try {
      if (!document.fullscreenElement) {
        await videoRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Fullscreen error:', error);
    }
  };
  return (
    <div className="overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 lg:pt-40 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
           <div className="absolute top-0 left-0 w-full h-full bg-[#F5F5F7] dark:bg-[#000000] transition-colors duration-500"></div>
           {/* Mesh Gradient Blob */}
           <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-[120px] animate-pulse-slow"></div>
           <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-accent/20 to-cyan-400/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-7 space-y-8 animate-slide-up relative z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/10 border border-black/5 dark:border-white/10 backdrop-blur-md shadow-sm">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-text-dark">Uganda's #1 Apple Partner</span>
              </div>
              
              <h1 className="text-5xl lg:text-8xl font-extrabold text-text-dark tracking-tighter leading-[1.05]">
                Buy Now, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">Pay Later!</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-text-medium max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Experience the power of Apple with flexible payments. Apply on WhatsApp, Pick up in Kampala.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <Link to="/phones">
                  <Button size="lg" className="shadow-glow px-10">View Collection</Button>
                </Link>
                <a href="https://wa.me/256709477930" target="_blank" rel="noreferrer">
                   <Button size="lg" variant="outline" icon={<WhatsAppIcon className="w-5 h-5" />}>Chat to Apply</Button>
                </a>
              </div>

              <div className="grid sm:grid-cols-3 gap-3 pt-8">
                <div className="bg-white/60 dark:bg-white/5 border border-border/60 rounded-2xl px-4 py-3 text-left shadow-sm">
                  <p className="text-xs font-bold text-text-medium uppercase tracking-wider mb-1">Approval</p>
                  <p className="text-sm font-extrabold text-text-dark">Under 2 hours</p>
                  <p className="text-[11px] text-text-medium">Send ID + income, get verified fast.</p>
                </div>
                <div className="bg-white/60 dark:bg-white/5 border border-border/60 rounded-2xl px-4 py-3 text-left shadow-sm">
                  <p className="text-xs font-bold text-text-medium uppercase tracking-wider mb-1">Payments</p>
                  <p className="text-sm font-extrabold text-text-dark">Pay in-store</p>
                  <p className="text-[11px] text-text-medium">40–50% down, weekly follow-ups.</p>
                </div>
                <div className="bg-white/60 dark:bg-white/5 border border-border/60 rounded-2xl px-4 py-3 text-left shadow-sm">
                  <p className="text-xs font-bold text-text-medium uppercase tracking-wider mb-1">Pickup</p>
                  <p className="text-sm font-extrabold text-text-dark">Same-day</p>
                  <p className="text-[11px] text-text-medium">Collect at New Pioneer Mall.</p>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-center lg:justify-start gap-8 opacity-80">
                 <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-bg bg-gray-200 overflow-hidden">
                         <img src={`/avatars/user${i}.jpg`} alt="User" className="w-full h-full object-cover" />
                      </div>
                    ))}
                 </div>
                 <div>
                    <div className="flex gap-0.5 text-amber-400">
                       {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-xs font-bold text-text-dark mt-0.5">Trusted by 5,000+ Ugandans</p>
                 </div>
              </div>
            </div>
            
            {/* Hero Video */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div 
                className="relative z-10 w-full max-w-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-black/20 backdrop-blur-sm group"
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
              >
                 <video 
                   ref={videoRef}
                   autoPlay
                   loop
                   muted={isMuted}
                   playsInline
                   className="w-full h-auto rounded-3xl"
                   poster="iphone-17-pro-max.png"
                   onPlay={() => setIsPlaying(true)}
                   onPause={() => setIsPlaying(false)}
                 >
                   <source src="/videos/Intro-vid.mp4" type="video/mp4" />
                   Your browser does not support the video tag.
                 </video>
                 
                 {/* Custom Video Controls */}
                 <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                   <div className="flex items-center justify-center gap-3">
                     {/* Play/Pause Button */}
                     <button
                       onClick={togglePlay}
                       className="bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-2.5 transition-all duration-200 hover:scale-110 border border-white/20"
                       aria-label={isPlaying ? 'Pause' : 'Play'}
                     >
                       {isPlaying ? (
                         <Pause className="w-5 h-5 text-white" />
                       ) : (
                         <Play className="w-5 h-5 text-white" />
                       )}
                     </button>
                     
                     {/* Volume Button */}
                     <button
                       onClick={toggleMute}
                       className="bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-2.5 transition-all duration-200 hover:scale-110 border border-white/20"
                       aria-label={isMuted ? 'Unmute' : 'Mute'}
                     >
                       {isMuted ? (
                         <VolumeX className="w-5 h-5 text-white" />
                       ) : (
                         <Volume2 className="w-5 h-5 text-white" />
                       )}
                     </button>
                     
                     {/* Fullscreen Button */}
                     <button
                       onClick={toggleFullscreen}
                       className="bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-2.5 transition-all duration-200 hover:scale-110 border border-white/20"
                       aria-label="Fullscreen"
                     >
                       <Maximize className="w-5 h-5 text-white" />
                     </button>
                   </div>
                 </div>
                 
                 {/* Floating Cards */}
                 <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 backdrop-blur-xl p-3 rounded-xl shadow-lg border border-white/20 z-20">
                    <div className="flex items-center gap-2">
                       <div className="bg-green-500/10 p-1.5 rounded-full text-green-600"><CheckCircle size={16}/></div>
                       <div>
                          <p className="text-[9px] text-text-medium font-bold uppercase">Status</p>
                          <p className="font-bold text-text-dark text-xs">WhatsApp Verified</p>
                       </div>
                    </div>
                 </div>
              </div>
              
              {/* Glow behind video */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/20 blur-[80px] -z-10"></div>
            </div>

          </div>
        </div>
      </section>

      {/* --- TRUST STRIP --- */}
      <section className="py-10 border-y border-black/5 dark:border-white/5 bg-white dark:bg-black/40">
         <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
               {['Apple Authorized', 'Samsung Official', 'Standard Chartered', 'Centenary Bank'].map((brand, idx) => (
                  <span key={idx} className="text-xl md:text-2xl font-bold text-text-medium">{brand}</span>
               ))}
            </div>
         </div>
      </section>

      {/* --- WHATSAPP FEATURE SECTION --- */}
      <section className="py-24 bg-[#F5F5F7] dark:bg-[#050505] relative overflow-hidden">
         <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="order-2 lg:order-1">
                  <div className="relative mx-auto w-[300px] h-[600px] border-[8px] border-black rounded-[3rem] shadow-2xl bg-[#ECE5DD] overflow-hidden">
                      <img src="https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png" className="absolute inset-0 opacity-20" />
                      <div className="relative z-10 p-4 space-y-4 pt-12">
                          <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
                             <p className="text-xs text-gray-800">I want an iPhone 15 Pro. Can I pay in instalments?</p>
                          </div>
                          <div className="bg-[#DCF8C6] p-3 rounded-lg rounded-tr-none shadow-sm self-end ml-auto max-w-[90%]">
                             <p className="text-xs text-gray-800">Absolutely! Please upload a photo of your National ID and Income Statement. 📸</p>
                          </div>
                          <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%] flex items-center gap-2">
                             <div className="w-8 h-8 bg-gray-200 rounded overflow-hidden">
                                <img src="iphone-15-pro-max.png" className="w-full h-full object-cover"/>
                             </div>
                             <p className="text-xs text-gray-500 italic">ID_FRONT.jpg</p>
                          </div>
                          <div className="bg-[#DCF8C6] p-3 rounded-lg rounded-tr-none shadow-sm self-end ml-auto max-w-[90%]">
                             <p className="text-xs text-gray-800 font-bold">✅ You are Pre-Approved!</p>
                             <p className="text-xs text-gray-800 mt-1">Please come to our office at New Pioneer Mall, Shop PI 62 to pay the deposit and pick up your phone.</p>
                          </div>
                      </div>
                  </div>
               </div>
               <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 mb-6">
                     <MessageCircle className="w-4 h-4" />
                     <span className="text-xs font-bold uppercase tracking-wider">Online Application</span>
                  </div>
                  <h2 className="text-4xl lg:text-6xl font-bold text-primary mb-6 tracking-tight">
                     Apply on <span className="text-[#25D366]">WhatsApp</span> <br/>
                     Pick up in Store.
                  </h2>
                  <p className="text-xl text-text-medium mb-8 leading-relaxed">
                     Submit your forms from home. Our team checks your documents instantly. Once approved, visit our Kampala office to pay and collect your device.
                  </p>
                  <ul className="space-y-4 mb-10">
                     {[
                        "Submit ID & Income Proof on WhatsApp",
                        "Real-time Pre-Approval (< 2 mins)",
                        "Pay 40% Deposit In-Store (Cash/MoMo)",
                        "Instant Pickup at New Pioneer Mall"
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-primary font-medium">
                           <div className="w-6 h-6 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                              <CheckCircle size={14} />
                           </div>
                           {item}
                        </li>
                     ))}
                  </ul>
                  <div className="flex gap-4">
                     <a href="https://wa.me/256709477930" target="_blank" rel="noreferrer">
                        <Button className="bg-[#25D366] hover:bg-[#1ebc57] border-none text-white shadow-xl shadow-green-900/10">
                           Start Application
                        </Button>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- HOW IT WORKS (Bento Grid Style) --- */}
      <section className="py-24 bg-surface">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6 tracking-tight">Simple. Transparent. Fast.</h2>
             <p className="text-xl text-text-medium leading-relaxed">Forget the bank queues. We've built a digital-first experience designed for the modern Ugandan.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="bg-[#F5F5F7] dark:bg-[#121212] p-10 rounded-3xl hover:shadow-xl transition-all duration-300 group">
                 <div className="w-16 h-16 bg-white dark:bg-black rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform">
                    <Smartphone className="w-8 h-8 text-text-dark" />
                 </div>
                 <h3 className="text-2xl font-bold text-text-dark mb-4">1. Choose Device</h3>
                 <p className="text-text-medium leading-relaxed">Browse our catalog on WhatsApp or Website. From iPhone 12 to the 15 Pro Max.</p>
              </div>
              {/* Step 2 */}
              <div className="bg-[#F5F5F7] dark:bg-[#121212] p-10 rounded-3xl hover:shadow-xl transition-all duration-300 group">
                 <div className="w-16 h-16 bg-white dark:bg-black rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform">
                    <Shield className="w-8 h-8 text-text-dark" />
                 </div>
                 <h3 className="text-2xl font-bold text-text-dark mb-4">12. Verify Identity</h3>
                 <p className="text-text-medium leading-relaxed">Snap a photo of your National ID inside WhatsApp. Our AI approves you in ~2 hours.</p>
              </div>

              {/* Step 3 */}
              <div className="bg-[#F5F5F7] dark:bg-[#121212] p-10 rounded-3xl hover:shadow-xl transition-all duration-300 group">
                 <div className="w-16 h-16 bg-white dark:bg-black rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform">
                    <Zap className="w-8 h-8 text-text-dark" />
                 </div>
                 <h3 className="text-2xl font-bold text-text-dark mb-4">3. Pay & Own</h3>
                 <p className="text-text-medium leading-relaxed">Pay a 30% deposit via Mobile Money. Pick up your phone same-day in Kampala.</p>
              </div>
           </div>
        </div>
      </section>

      {/* --- FEATURED PHONES --- */}
      <section className="py-24 bg-bg">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-4 tracking-tight">Latest Arrivals</h2>
              <p className="text-text-medium">Brand new, sealed, 1 year warranty.</p>
            </div>
            <Link to="/phones" className="hidden sm:block">
              <Button variant="ghost" icon={<ArrowRight className="w-4 h-4"/>}>View All</Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {PHONES.slice(0, 4).map(phone => (
               <PhoneCard key={phone.id} phone={phone} />
             ))}
          </div>
          
          <div className="mt-12 text-center sm:hidden">
             <Link to="/phones">
                <Button variant="outline" fullWidth>Browse All Phones</Button>
             </Link>
          </div>
        </div>
      </section>

      {/* --- VALUE PROPS (Dark Mode Section) --- */}
      <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
         <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Why we are different.</h2>
                  <p className="text-gray-400 text-xl leading-relaxed mb-8">
                     Most lenders want collateral. We just want to see you succeed. Our alternative credit scoring model opens doors for freelancers, business owners, and students.
                  </p>
                  <div className="space-y-6">
                     <div className="flex items-start gap-4">
                        <div className="bg-accent/20 p-2 rounded-lg text-accent mt-1"><CreditCard size={20}/></div>
                        <div>
                           <h4 className="text-lg font-bold mb-1">No Hidden Fees</h4>
                           <p className="text-gray-500">The price you see is the price you pay. Zero processing fees.</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="bg-green-500/20 p-2 rounded-lg text-green-500 mt-1"><Clock size={20}/></div>
                        <div>
                           <h4 className="text-lg font-bold mb-1">Early Repayment</h4>
                           <p className="text-gray-500">Pay off your balance early and save on interest. No penalties.</p>
                        </div>
                     </div>
                  </div>
               </div>
               
               {/* Stat Grid */}
               <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                     <p className="text-4xl font-bold text-accent mb-2">2h</p>
                     <p className="text-gray-400 text-sm font-medium">Avg. Approval Time</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                     <p className="text-4xl font-bold text-white mb-2">100%</p>
                     <p className="text-gray-400 text-sm font-medium">Genuine Products</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors col-span-2">
                     <div className="flex items-center justify-between">
                        <div>
                           <p className="text-4xl font-bold text-white mb-2">UGX 1.2B+</p>
                           <p className="text-gray-400 text-sm font-medium">Credit Extended</p>
                        </div>
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                           <Zap className="text-white fill-white" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 bg-bg relative overflow-hidden">
         {/* Background decorations */}
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50"></div>
         
         <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-20">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6 border border-accent/20">
                  <Star className="w-4 h-4 fill-accent" />
                  <span>Wall of Love</span>
               </div>
               <h2 className="text-3xl md:text-5xl font-extrabold text-text-dark mb-6 tracking-tight">
                  Loved by Ugandans.
               </h2>
               <p className="text-xl text-text-medium leading-relaxed">
                  Join thousands of happy customers who have upgraded their lives with Mobanja's flexible plans.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((testimonial) => (
                <div key={testimonial.id} className="relative h-full p-8 rounded-[2rem] bg-surface border border-white/50 dark:border-white/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col">
                   {/* Quote Icon */}
                   <div className="absolute top-8 right-8 opacity-10 text-text-dark">
                      <Quote size={40} className="fill-current" />
                   </div>

                   <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                         <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-md">
                               <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" /> 
                        </div>
                      </div>
                      <div>
                         <h4 className="font-bold text-text-dark text-lg flex">{testimonial.name}<img src="verified-badge.png" className=' h-5' alt="" /></h4>
                         <p className="text-xs text-text-medium font-medium mt-1 uppercase tracking-wide">{testimonial.role}</p>
                      </div>
                   </div>

                   <div className="flex-grow">
                      <p className="text-text-medium text-lg leading-relaxed italic">
                         "{testimonial.text}"
                      </p>
                   </div>

                   <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
                      <div className="flex gap-1">
                         {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                         ))}
                      </div> 
                      
                        <span className="text-xs font-bold text-text-medium opacity-60 flex items-center gap-1">
                           <CheckCircle size={12} className="text-green-500" /> Verified Purchase
                        </span>
                     
                   </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-bg">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Questions? Answered.</h2>
             <p className="text-text-medium">Everything you need to know to get started.</p>
           </div>
           <div className="bg-surface rounded-3xl p-4 md:p-8 shadow-sm border border-border">
             {FAQS.slice(0, 4).map((faq, idx) => (
               <AccordionItem key={idx} title={faq.question} content={faq.answer} />
             ))}
           </div>
           <div className="text-center mt-10">
             <Link to="/faq">
               <Button variant="outline" className="rounded-full">Visit Support Center</Button>
             </Link>
           </div>
        </div>
      </section>

      {/* --- BIG CTA --- */}
      <section className="py-12 md:py-20 px-4 md:px-6">
         <div className="max-w-[1200px] mx-auto bg-[#0F172A] dark:bg-[#121212] dark:border dark:border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-10 md:p-24 text-center relative overflow-hidden shadow-2xl">
            {/* Abstract Glows */}
            <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/30 rounded-full blur-[80px] md:blur-[120px]"></div>
            <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/30 rounded-full blur-[80px] md:blur-[120px]"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
               <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight leading-tight">
                 Don't dream it. <br/> Own it.
               </h2>
               <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-10 px-4">
                 Join the thousands of Ugandans who have upgraded their lives with Mobanja.
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
                 <Link to="/phones" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto h-14 md:h-16 px-6 md:px-8 text-base md:text-lg text-white border-white/20 hover:bg-white/10">
                       Start Application
                    </Button>
                 </Link>
                 <a href="https://wa.me/256709477930" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 md:h-16 px-6 md:px-8 text-base md:text-lg text-white border-white/20 hover:bg-white/10">
                       WhatsApp Agent
                    </Button>
                 </a>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Home;
