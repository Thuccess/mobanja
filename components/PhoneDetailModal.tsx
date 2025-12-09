import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Check, Smartphone, Calendar, CreditCard, Shield, MessageCircle } from 'lucide-react';
import { Phone } from '../types';
import Button from './Button';
import ConsentModal from './ConsentModal';

interface PhoneDetailModalProps {
  phone: Phone;
  onClose: () => void;
}

const PhoneDetailModal: React.FC<PhoneDetailModalProps> = ({ phone, onClose }) => {
  const [isConsentOpen, setIsConsentOpen] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const formatUGX = (amount: number) => {
    return new Intl.NumberFormat('en-UG', {
      style: 'decimal',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleApplyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsConsentOpen(true);
  };

  const modalContent = (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-4xl bg-surface rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-slide-up max-h-[90vh] md:h-auto md:max-h-[80vh] overflow-y-auto md:overflow-visible border border-white/10">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Image */}
        <div className="w-full md:w-1/2 bg-gray-100 dark:bg-gray-800 relative min-h-[300px] md:min-h-[500px]">
          <img 
            src={phone.image} 
            alt={phone.name} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
             <p className="text-sm font-medium opacity-90 mb-1">{phone.brand}</p>
             <h2 className="text-3xl font-bold">{phone.name}</h2>
          </div>
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto">
           <div className="mb-6">
             <h3 className="text-lg font-semibold text-text-medium mb-4">Payment Plan</h3>
             <div className="bg-bg rounded-2xl p-5 border border-border">
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-border">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                         <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                         <p className="text-sm text-text-medium">Duration</p>
                         <p className="font-bold text-primary">{phone.durationMonths} Months</p>
                      </div>
                   </div>
                   <div className="text-right">
                      <p className="text-sm text-text-medium">Monthly</p>
                      <p className="text-xl font-bold text-accent">UGX {formatUGX(phone.monthlyPrice)}</p>
                   </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                         <CreditCard className="w-5 h-5" />
                      </div>
                      <div>
                         <p className="text-sm text-text-medium">Total Price</p>
                         <p className="font-bold text-primary text-sm">UGX {formatUGX(phone.price)}</p>
                      </div>
                   </div>
                   <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-xs font-bold">
                      In Stock
                   </div>
                </div>
             </div>
           </div>

           <div className="mb-8">
              <h3 className="text-lg font-semibold text-text-medium mb-4">Key Features</h3>
              <ul className="space-y-3">
                 {phone.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-text-dark">
                       <Check className="w-5 h-5 text-accent flex-shrink-0" />
                       <span>{feature}</span>
                    </li>
                 ))}
                 <li className="flex items-center gap-3 text-text-dark">
                    <Smartphone className="w-5 h-5 text-text-medium flex-shrink-0" />
                    <span>Brand New Sealed In Box</span>
                 </li>
                 <li className="flex items-center gap-3 text-text-dark">
                    <Shield className="w-5 h-5 text-text-medium flex-shrink-0" />
                    <span>1 Year Official Warranty</span>
                 </li>
              </ul>
           </div>

           <div className="mt-auto pt-6 flex flex-col gap-3">
              <button 
                onClick={handleApplyClick}
                className="w-full" 
              >
                 <Button fullWidth size="lg" icon={<MessageCircle className="w-5 h-5"/>} className="bg-[#25D366] hover:bg-[#1ebc57] border-none text-white shadow-lg shadow-green-500/20">Apply via WhatsApp</Button>
              </button>
              <button 
                 onClick={onClose}
                 className="w-full py-3 text-center text-text-medium hover:text-primary font-medium transition-colors"
              >
                 Maybe Later
              </button>
           </div>
        </div>
      </div>
      
      {isConsentOpen && (
        <ConsentModal 
          phone={phone}
          duration={phone.durationMonths}
          monthlyPrice={phone.monthlyPrice}
          onClose={() => setIsConsentOpen(false)}
        />
      )}
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default PhoneDetailModal;