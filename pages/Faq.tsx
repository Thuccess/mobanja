
import React from 'react';
import AccordionItem from '../components/Accordion';
import { FAQS } from '../constants';

const Faq: React.FC = () => {
  return (
    <div className="pt-32 pb-20 animate-fade-in min-h-screen">
      <div className="max-w-[800px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h1>
          <p className="text-text-medium">Answers to common questions about our instalment plans.</p>
        </div>

        <div className="space-y-2">
          {FAQS.map((faq, idx) => (
            <AccordionItem key={idx} title={faq.question} content={faq.answer} />
          ))}
          {/* Adding more specific FAQs for this page */}
          <AccordionItem 
             title="Is my data safe?" 
             content="Yes, Mobanja uses bank-grade encryption to protect your personal and financial information. We never sell your data to third parties." 
          />
          <AccordionItem 
             title="Do you accept online payments?" 
             content="No, we do not accept online payments for the initial deposit. You must visit our office at New Pioneer Mall, Shop PI 62 to pay your 40% down payment and pick up your device." 
          />
          <AccordionItem 
             title="Can I buy a phone for someone else?" 
             content="The financing agreement must be in the name of the person who will be legally responsible for the payments. However, you can gift the phone once acquired." 
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
