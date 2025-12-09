
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, FileText, CheckCircle, Smartphone, AlertTriangle } from 'lucide-react';
import { Phone } from '../types';
import Button from './Button';

interface ConsentModalProps {
  phone: Phone;
  duration: number;
  monthlyPrice: number;
  onClose: () => void;
}

const ConsentModal: React.FC<ConsentModalProps> = ({ phone, duration, monthlyPrice, onClose }) => {
  const [hasAgreed, setHasAgreed] = useState(false);

  // Prevent background scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  const formatUGX = (amount: number) => new Intl.NumberFormat('en-UG').format(amount);

  const whatsappMessage = `Hello Mobanja, I have read and agreed to the Customer Informed Consent Form. I would like to apply for the ${phone.name} on the ${duration} months plan at UGX ${formatUGX(monthlyPrice)}/month. I am ready to submit my National ID and Proof of Income.`;
  const whatsappLink = `https://wa.me/256709477930?text=${encodeURIComponent(whatsappMessage)}`;

  return createPortal(
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-surface rounded-3xl shadow-2xl flex flex-col max-h-[90vh] animate-slide-up overflow-hidden border border-white/10">
        
        {/* Header */}
        <div className="p-6 border-b border-border bg-gray-50 dark:bg-white/5 flex justify-between items-center flex-shrink-0">
          <div className="flex items-center gap-3">
             <div className="bg-accent/10 p-2 rounded-lg text-accent">
                <FileText size={24} />
             </div>
             <div>
                <h2 className="text-xl font-bold text-primary">Customer Informed Consent</h2>
                <p className="text-xs text-text-medium">Please read and accept terms to proceed</p>
             </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full text-text-medium transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="overflow-y-auto p-6 space-y-6 custom-scrollbar text-sm text-text-dark bg-surface">
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800 mb-4">
             <p className="font-medium text-blue-800 dark:text-blue-300">
               You are applying for the <span className="font-bold">{phone.name}</span> installment service. Upon successful approval, you are required to make payments on time. Once the installment term ends and all payments are completed, the device will automatically become your property.
             </p>
          </div>

          <section>
            <h3 className="font-bold text-primary text-base mb-2">1. Service Description</h3>
            <p className="leading-relaxed opacity-90 text-text-medium">
              During the leasing period, Apple devices will be bound to a corporate ID. This will not affect your normal usage, and we do not have access to your personal data. Timely repayment is mandatory. In the event of overdue payments, we reserve the right to remotely lock the device. After completing and settling the order, we will assist you in unbinding the corporate ID. If overdue payments occur, the ownership of the device remains with the lessor, and the lessee is required to return the device.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-primary text-base mb-2">2. Risk and Liability</h3>
            <p className="leading-relaxed opacity-90 text-text-medium">
              Risk passes to the hirer upon taking possession of the phone. The Hirer bears full responsibility for any theft, loss, or damage thereafter. The owner shall not be liable for such risks, and the Hirer must continue to pay the full hire purchase price regardless of such events.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-primary text-base mb-2">3. Automatic Breach due to Misrepresentation</h3>
            <p className="leading-relaxed opacity-90 text-text-medium">
              This agreement shall be deemed automatically breached and voidable if it is discovered that the Hirer provided false, misleading, or materially incomplete information regarding identity, financial ability, residence, employment, or guarantors.
            </p>
          </section>

           <section>
            <h3 className="font-bold text-primary text-base mb-2">4. Default and Penalty</h3>
            <p className="leading-relaxed opacity-90 text-text-medium">
              If the Hirer fails to pay any instalment on the due date, a penalty of 1% of the outstanding balance shall be charged for every week or part thereof that the default persists.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-primary text-base mb-2 flex items-center gap-2">
               <AlertTriangle size={16} className="text-amber-500" /> 
               5. Prohibited Actions
            </h3>
            <ul className="list-disc pl-5 space-y-1 opacity-90 text-text-medium">
              <li>Jailbreaking the phone.</li>
              <li>Factory resetting the device.</li>
              <li>Removing the supervision profile.</li>
            </ul>
            <p className="mt-2 text-xs italic text-text-medium opacity-70">
               If any of these actions result in the device being locked, you must return it for reconfiguration and pay an unlocking fee of UGX 100,000.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-primary text-base mb-2">6. Eligibility Criteria</h3>
            <p className="leading-relaxed opacity-90 text-text-medium">
              Applicants must be between 18 and 45 years of age and have a stable source of income. Students, interns, and those without regular income should not proceed. All documents must be authentic; falsification leads to legal liability.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-primary text-base mb-2">7. Usage Rights and Restrictions</h3>
            <p className="leading-relaxed opacity-90 text-text-medium mb-2">During the lease period, you may not:</p>
            <ul className="list-disc pl-5 space-y-1 opacity-90 text-text-medium">
               <li>Sell, lend, sublease, pledge, or gift the device.</li>
               <li>Disassemble or replace parts.</li>
               <li>Install unauthorized applications.</li>
            </ul>
            <p className="mt-2 opacity-90 text-text-medium">Violations are a breach of contract and may lead to police reporting or legal action.</p>
          </section>

          <div className="bg-gray-100 dark:bg-white/5 p-4 rounded-xl border border-border">
             <h4 className="font-bold text-primary mb-2">Required Documents for WhatsApp Submission:</h4>
             <ul className="space-y-2 text-sm text-text-medium">
                <li className="flex items-center gap-2">
                   <CheckCircle size={16} className="text-green-500" />
                   <span>Photo of National ID / Passport</span>
                </li>
                <li className="flex items-center gap-2">
                   <CheckCircle size={16} className="text-green-500" />
                   <span>Proof of Income (Bank/Mobile Money Statement)</span>
                </li>
             </ul>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-border bg-surface flex-shrink-0">
           <label className="flex items-start gap-3 cursor-pointer mb-6 group select-none">
              <div className="relative flex items-center mt-0.5">
                 <input 
                   type="checkbox" 
                   className="peer sr-only"
                   checked={hasAgreed}
                   onChange={(e) => setHasAgreed(e.target.checked)}
                 />
                 <div className="w-5 h-5 border-2 border-border rounded transition-colors peer-checked:bg-accent peer-checked:border-accent"></div>
                 <CheckCircle className="w-3.5 h-3.5 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none" />
              </div>
              <span className="text-sm text-text-medium group-hover:text-primary transition-colors">
                 I have thoroughly read and understood the above terms. I voluntarily apply for this installment service and agree to bear all related legal responsibilities.
              </span>
           </label>

           <div className="flex gap-3">
              <Button variant="ghost" onClick={onClose} fullWidth className="border border-border">Cancel</Button>
              <a 
                 href={hasAgreed ? whatsappLink : undefined} 
                 target="_blank" 
                 rel="noreferrer"
                 className={`flex-1 ${!hasAgreed ? 'pointer-events-none opacity-50' : ''}`}
                 onClick={hasAgreed ? onClose : (e) => e.preventDefault()}
              >
                 <Button 
                   variant="primary" 
                   fullWidth 
                   disabled={!hasAgreed}
                   icon={<Smartphone size={18} />}
                   className="shadow-glow"
                 >
                    Agree & Submit Documents
                 </Button>
              </a>
           </div>
        </div>

      </div>
    </div>,
    document.body
  );
};

export default ConsentModal;
