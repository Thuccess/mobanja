import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import AccordionItem from '../components/Accordion';
import { 
  ClipboardCheck, 
  Banknote, 
  Smartphone, 
  RefreshCw, 
  ShieldCheck, 
  Store,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const ShopOwnerHowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Customer Identification",
      desc: "A customer enters your shop wanting a phone (e.g., iPhone 14 Pro @ UGX 4.5M) but only has partial funds.",
      icon: UsersIcon
    },
    {
      id: 2,
      title: "Instant Onboarding",
      desc: "You log into the Mobanja Partner Portal (or WhatsApp) and scan their National ID. Our AI assesses creditworthiness in minutes.",
      icon: ClipboardCheck
    },
    {
      id: 3,
      title: "The 40% Down Payment",
      desc: "Once approved, the customer pays 40% of the device value (UGX 1.8M) directly via the Mobanja payment prompt.",
      icon: Banknote
    },
    {
      id: 4,
      title: "Mobanja Top-Up (60%)",
      desc: "Immediately after the customer pays, Mobanja automatically transfers the remaining 60% (UGX 2.7M) to your merchant wallet.",
      icon: RefreshCw
    },
    {
      id: 5,
      title: "Stock Release",
      desc: "You receive a 'Payment Complete' notification. You hand over the device. You have sold the item for 100% of its value.",
      icon: Smartphone
    }
  ];

  const partnerFaqs = [
    {
      question: "Who handles the debt collection?",
      answer: "Mobanja handles 100% of the debt collection. Once you receive your 60% top-up from us, your part in the transaction is finished. You carry zero risk if the customer defaults."
    },
    {
      question: "How fast is the settlement?",
      answer: "Our systems are automated. The moment the customer's down payment is confirmed, the 60% balance is triggered to your registered Mobile Money or Bank account instantly."
    },
    {
      question: "What are the requirements to join?",
      answer: "You need a physical shop location, a valid trading license, and you must sell authentic devices. We verify all partners to maintain quality for our customers."
    },
    {
      question: "Is there a fee for shop owners?",
      answer: "Joining the network is free. We charge a small platform fee on the transaction, but this is typically covered by the financing markup charged to the customer, not deducted from your sale price."
    }
  ];

  return (
    <div className="pt-32 pb-20 animate-fade-in">
      {/* Hero Section */}
      <div className="bg-surface border-b border-border pb-16">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6 border border-accent/20">
             <Store className="w-4 h-4" />
             <span>Partner Operational Guide</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-primary mb-6 tracking-tight">
            The 5-Step <span className="text-accent">Payout Process</span>
          </h1>
          <p className="text-xl text-text-medium max-w-2xl mx-auto leading-relaxed mb-10">
            Understanding how you get paid 100% of the device value instantly while offering customers flexibility.
          </p>
          <div className="flex justify-center gap-4">
             <Link to="/contact">
                <Button size="lg">Join Network</Button>
             </Link>
          </div>
        </div>
      </div>

      {/* The Flow Diagram */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
           <div className="relative">
              {/* Vertical Line for desktop */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2" />

              <div className="space-y-12 md:space-y-24">
                 {steps.map((step, idx) => (
                    <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                       
                       {/* Icon Marker */}
                       <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-primary border-4 border-surface text-white shadow-xl z-10">
                          <span className="font-bold text-xl dark:text-black ">{step.id}</span>
                       </div>

                       {/* Content Box */}
                       <div className="w-full md:w-1/2 px-4">
                          <div className={`bg-surface p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-shadow text-center md:text-left ${idx % 2 !== 0 ? 'md:text-right' : ''}`}>
                             <div className={`inline-flex p-3 rounded-xl bg-accent/10 text-accent mb-4 md:hidden`}>
                                <step.icon className="w-6 h-6" />
                             </div>
                             <div className={`hidden md:inline-flex p-3 rounded-xl bg-accent/10 text-accent mb-4 ${idx % 2 !== 0 ? 'ml-auto' : ''}`}>
                                <step.icon className="w-6 h-6" />
                             </div>
                             <h3 className="text-2xl font-bold text-primary mb-3">{step.title}</h3>
                             <p className="text-text-medium text-lg leading-relaxed">{step.desc}</p>
                          </div>
                       </div>
                       
                       {/* Empty spacer for the other side */}
                       <div className="hidden md:block w-1/2" />
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Money Breakdown Visual */}
      <section className="py-20 bg-bg">
         <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-primary mb-4">The Revenue Split</h2>
               <p className="text-text-medium">Example transaction for a phone worth <span className="font-bold text-primary">UGX 1,000,000</span></p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
               <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-border shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-blue-500" />
                  <p className="text-sm text-text-medium uppercase font-bold tracking-wider mb-2">Customer Pays</p>
                  <p className="text-4xl font-bold text-blue-500 mb-2">40%</p>
                  <p className="text-2xl font-semibold text-text-dark">UGX 400,000</p>
                  <p className="text-xs text-text-medium mt-4">Paid at Point of Sale</p>
               </div>

               <div className="flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-border flex items-center justify-center">
                     <span className="text-2xl text-text-medium font-bold">+</span>
                  </div>
               </div>

               <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-border shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-accent" />
                  <p className="text-sm text-text-medium uppercase font-bold tracking-wider mb-2">Mobanja Pays</p>
                  <p className="text-4xl font-bold text-accent mb-2">60%</p>
                  <p className="text-2xl font-semibold text-text-dark">UGX 600,000</p>
                  <p className="text-xs text-text-medium mt-4">Instant Transfer</p>
               </div>
            </div>

            <div className="mt-12 bg-green-500/10 p-8 rounded-3xl border border-green-500/20 text-center">
               <p className="text-green-600 dark:text-green-400 font-bold text-lg mb-2">Total You Receive</p>
               <p className="text-5xl font-black text-green-700 dark:text-green-400 mb-2">100%</p>
               <p className="text-text-medium">UGX 1,000,000 (Full Market Price)</p>
               <div className="flex items-center justify-center gap-2 mt-4 text-green-700 dark:text-green-400 font-medium">
                  <CheckCircle className="w-5 h-5" />
                  <span>Zero Risk for You</span>
               </div>
            </div>
         </div>
      </section>

      {/* Partner FAQ */}
      <section className="py-20">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-primary mb-4">Partner FAQs</h2>
             <p className="text-text-medium">Common questions from electronics dealers.</p>
          </div>
          <div>
             {partnerFaqs.map((faq, idx) => (
                <AccordionItem key={idx} title={faq.question} content={faq.answer} />
             ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-surface border-t border-border">
         <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Ready to increase your sales?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link to="/contact">
                  <Button size="lg" icon={<ArrowRight className="w-5 h-5" />}>Register Shop Now</Button>
               </Link>
               <Link to="/shop-owners">
                  <Button size="lg" variant="outline">Back to Overview</Button>
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
};

// Helper Icon
function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
   );
}

export default ShopOwnerHowItWorks;
