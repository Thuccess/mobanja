
import React from 'react';
import { TrendingUp, ShieldCheck, Users, Wallet, ArrowRight, CheckCircle, PieChart, Store } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const ShopOwnerDeals: React.FC = () => {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Zero Credit Risk",
      description: "You sell the phone, we take the risk. If a customer delays payment, it's on us, not you. You keep 100% of your sale price."
    },
    {
      icon: Wallet,
      title: "Instant Liquidity",
      description: "Receive 40% cash from the customer and 60% instant transfer from Mobanja. No waiting for instalments."
    },
    {
      icon: TrendingUp,
      title: "Double Your Sales",
      description: "Turn 'I can't afford it yet' into 'I'll take it now'. Offering instalments increases your conversion rate by up to 50%."
    }
  ];

  const steps = [
    {
      num: "1",
      title: "Register Your Shop",
      desc: "Contact us to verify your business location and stock quality. We partner with reputable electronics dealers."
    },
    {
      num: "2",
      title: "Close the Sale",
      desc: "When a customer can't pay full price, offer them the Mobanja Plan. They pay you 40% down payment immediately."
    },
    {
      num: "3",
      title: "Get Paid in Full",
      desc: "We instantly transfer the remaining 60% to your merchant account. You hand over the device, and we handle the rest."
    }
  ];

  return (
    <div className="pt-32 pb-20 animate-fade-in">
      {/* Hero Section */}
      <section className="relative pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 to-bg dark:from-slate-900 dark:to-bg" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border shadow-sm">
                <Store className="w-4 h-4 text-accent" />
                <span className="text-sm font-bold text-primary uppercase tracking-wide">For Electronics Dealers</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-primary tracking-tight leading-tight">
                Sell More Phones. <br/>
                <span className="text-accent">Take Zero Risk.</span>
              </h1>
              <p className="text-xl text-text-medium leading-relaxed">
                Join the Mobanja Partner Network. Customers pay 40%, we pay you the remaining 60% instantly. You get paid in full, we handle the instalments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                    Become a Partner
                  </Button>
                </Link>
                <Link to="/shop-owner-how-it-works">
                  <Button size="lg" variant="outline">
                    See How It Works
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
               {/* Abstract Business Visualization */}
               <div className="relative z-10 bg-surface rounded-2xl p-8 shadow-2xl border border-border">
                  <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
                    <div>
                       <p className="text-sm text-text-medium">Total Sale Value</p>
                       <p className="text-2xl font-bold text-primary">UGX 2,000,000</p>
                    </div>
                    <div className="bg-green-100 dark:bg-green-900/30 text-green-600 px-3 py-1 rounded-full text-xs font-bold">
                       Paid in Full
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                     <div className="flex items-center gap-4 p-4 rounded-xl bg-bg border border-border">
                        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                           <Users className="w-6 h-6" />
                        </div>
                        <div className="flex-grow">
                           <p className="text-sm font-bold text-primary">Customer Pays</p>
                           <p className="text-xs text-text-medium">Down Payment</p>
                        </div>
                        <div className="text-right">
                           <p className="font-bold text-primary">40%</p>
                           <p className="text-xs text-text-medium">UGX 800,000</p>
                        </div>
                     </div>
                     
                     <div className="flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-border flex items-center justify-center text-text-medium text-xs">+</div>
                     </div>

                     <div className="flex items-center gap-4 p-4 rounded-xl bg-accent/10 border border-accent/20">
                        <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center">
                           <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div className="flex-grow">
                           <p className="text-sm font-bold text-primary">Mobanja Pays</p>
                           <p className="text-xs text-text-medium">Instant Top-up</p>
                        </div>
                        <div className="text-right">
                           <p className="font-bold text-accent">60%</p>
                           <p className="text-xs text-text-medium">UGX 1,200,000</p>
                        </div>
                     </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                     <div className="flex justify-between items-center">
                        <p className="font-bold text-primary">Your Revenue</p>
                        <p className="font-bold text-xl text-green-600">100%</p>
                     </div>
                  </div>
               </div>

               {/* Decorative Blob */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-accent/20 to-purple-500/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* The Model Breakdown */}
      <section id="model" className="py-20 bg-surface">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4">The 40/60 Partnership Model</h2>
              <p className="text-text-medium text-lg">
                 We've designed a model that protects your cash flow while expanding your customer base. 
                 Mobanja takes on the responsibility of collecting the remaining balance from the customer.
              </p>
           </div>

           <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {benefits.map((benefit, idx) => (
                 <div key={idx} className="bg-bg p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-xl bg-white dark:bg-white/10 shadow-sm flex items-center justify-center mb-6 text-accent">
                       <benefit.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                    <p className="text-text-medium leading-relaxed">{benefit.description}</p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-bg">
         <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
               <div>
                  <h2 className="text-3xl font-bold text-primary mb-2">How to Partner</h2>
                  <p className="text-text-medium">Start selling more in 3 simple steps.</p>
               </div>
            </div>

            <div className="space-y-6">
               {steps.map((step, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row gap-6 md:items-center bg-surface p-6 rounded-2xl border border-border">
                     <div className="w-12 h-12 rounded-full bg-primary dark:text-black text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                        {step.num}
                     </div>
                     <div className="flex-grow">
                        <h3 className="text-xl font-bold text-primary mb-1">{step.title}</h3>
                        <p className="text-text-medium">{step.desc}</p>
                     </div>
                     <div className="hidden md:block">
                        <ArrowRight className="text-border" />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-20 ">
         <div className="max-w-[1200px]  mx-auto px-6 lg:px-8">
            <div className="bg-primary rounded-[2.5rem] dark:bg-surface dark:text-gray-300 p-12 md:p-20 text-center relative overflow-hidden">

               {/* Updated background to retail shop context */}
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556740714-a8395b3bf3ea?auto=format&fit=crop&q=80&w=1600')] opacity-10 bg-cover bg-center mix-blend-overlay" />
               <div className="relative z-10 max-w-2xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to grow your business?</h2>
                  <p className="text-gray-300 text-lg mb-10">
                     Join hundreds of shop owners in Uganda who are increasing their monthly revenue with Mobanja.
                  </p>
                  <Link to="/contact">
                     <Button size="lg" className="bg-white text-black hover:bg-gray-100 border-none">
                        Apply as Partner
                     </Button>
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default ShopOwnerDeals;
