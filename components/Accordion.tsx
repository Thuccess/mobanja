import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-xl overflow-hidden mb-4 bg-surface transition-all duration-300 hover:shadow-md">
      <button
        className="w-full px-6 py-5 text-left flex justify-between items-center bg-surface hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-text-dark text-lg">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-accent" />
        ) : (
          <ChevronDown className="w-5 h-5 text-text-medium" />
        )}
      </button>
      <div
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out bg-surface ${
          isOpen ? 'max-h-96 py-5 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        <p className="text-text-medium leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

export default AccordionItem;