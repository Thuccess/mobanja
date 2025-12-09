import React, { useState } from 'react';
import { Phone } from '../types';
import Button from './Button';
import { Check, Eye, ArrowRight, MessageCircle, Sparkles, Calendar } from 'lucide-react';
import PhoneDetailModal from './PhoneDetailModal';
import ConsentModal from './ConsentModal';

interface PhoneCardProps {
  phone: Phone;
}

const PhoneCard: React.FC<PhoneCardProps> = ({ phone }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConsentOpen, setIsConsentOpen] = useState(false);

  // Default select 12 weeks if phone.durationMonths is undefined
  const [selectedDuration, setSelectedDuration] = useState(12);

  const displayImage = phone.image;

  // Calculate weekly payment
  const calculateWeeklyPrice = (weeks: number) => {
    let markup = 0.10;

    if (weeks === 10) markup = 0.06;
    if (weeks === 12) markup = 0.10;
    if (weeks === 16) markup = 0.14;
    if (weeks === 24) markup = 0.18;

    const totalWithInterest = phone.price * (1 + markup);

    // Payment per week
    return Math.ceil((totalWithInterest / weeks) / 500) * 500;
  };

  const currentWeeklyPrice = calculateWeeklyPrice(selectedDuration);
  const currentTotal = currentWeeklyPrice * selectedDuration;

  const formatUGX = (amount: number) =>
    new Intl.NumberFormat('en-UG', {
      style: 'decimal',
      maximumFractionDigits: 0,
    }).format(amount);

  const badgeText =
    selectedDuration === 10
      ? 'Save on interest'
      : selectedDuration === 12
      ? 'Best Value'
      : selectedDuration === 16
      ? 'Flexible'
      : 'Lowest weekly';

  const getBadgeStyles = (text: string) => {
    if (text === 'Best Value')
      return 'bg-accent text-white shadow-md shadow-accent/20';
    if (text === 'Save on interest')
      return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
    return 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400';
  };

  const whatsappMessage = `Hello Mobanja, I am applying for the ${phone.name} on the ${selectedDuration} weeks plan. Weekly: UGX ${formatUGX(
    currentWeeklyPrice
  )}.`;

  const whatsappLink = `https://wa.me/256709477930?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      <article className="group relative bg-surface rounded-3xl border border-white/50 dark:border-white/10 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-black/30 hover:-translate-y-1 flex flex-col h-full">

        {/* Image */}
        <div
          className="relative pt-[85%] bg-[#F5F5F7] dark:bg-[#121212] overflow-hidden cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          {displayImage ? (
            <img
              src={displayImage}
              alt={phone.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 origin-center"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-text-medium">
              <span>No Image Available</span>
            </div>
          )}

          {/* Brand Badge */}
          <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-md text-text-dark dark:text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm uppercase tracking-wider z-10">
            {phone.brand}
          </div>

          {/* Hover Buttons */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 z-10 backdrop-blur-[2px]">
            <button
              className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/90 dark:bg-black/90 backdrop-blur-md text-text-dark dark:text-white px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 shadow-xl hover:scale-105"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
            >
              <Eye className="w-4 h-4" /> Quick View
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsConsentOpen(true);
              }}
              className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 bg-accent hover:bg-accent-hover text-white px-8 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 shadow-xl shadow-accent/30 hover:scale-105"
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Text Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-text-dark mb-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-left hover:text-accent transition-colors"
              >
                {phone.name}
              </button>
            </h3>

            <div className="flex items-end gap-1.5 mb-1">
              <span className="text-2xl font-bold text-text-dark tracking-tight">
                UGX {formatUGX(currentWeeklyPrice)}
              </span>
              <span className="text-sm text-text-medium font-medium mb-1.5">
                /week
              </span>
            </div>

            <div className="flex justify-between items-center text-xs text-text-medium">
              <span>Total Price:</span>
              <span className="font-semibold text-text-dark">
                UGX {formatUGX(currentTotal)}
              </span>
            </div>
          </div>

          {/* Payment Plan Selector (UPDATED) */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold text-text-medium uppercase tracking-wider flex items-center gap-1">
                <Calendar className="w-3 h-3" /> Payment Plan
              </span>

              <span
                className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${getBadgeStyles(
                  badgeText
                )}`}
              >
                {badgeText}
              </span>
            </div>

            <div className="p-1 bg-bg rounded-xl flex justify-between items-center">
              {[
                { label: "10 Weeks", value: 10 },
                { label: "12 Weeks", value: 12 },
                { label: "16 Weeks", value: 16 },
                { label: "24 Weeks", value: 24 },
              ].map((plan) => (
                <button
                  key={plan.value}
                  onClick={() => setSelectedDuration(plan.value)}
                  className={`flex-1 py-2 text-[10px] sm:text-xs font-bold rounded-lg transition-all duration-300 ${
                    selectedDuration === plan.value
                      ? 'bg-white dark:bg-gray-700 text-accent shadow-sm'
                      : 'text-text-medium hover:text-text-dark hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {plan.label}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-auto pt-4 border-t border-border/40">
            <div className="grid grid-cols-2 gap-3">
              <Button variant="ghost" size="sm" className="text-xs" onClick={() => setIsModalOpen(true)}>
                Details
              </Button>

              <button onClick={() => setIsConsentOpen(true)}>
                <Button
                  variant="primary"
                  size="sm"
                  fullWidth
                  className="text-xs shadow-glow"
                  icon={<MessageCircle size={14} />}
                >
                  Apply via WhatsApp
                </Button>
              </button>
            </div>
          </div>
        </div>
      </article>

      {isModalOpen && (
        <PhoneDetailModal
          phone={{
            ...phone,
            image: displayImage,
            weeklyPrice: currentWeeklyPrice,
            durationWeeks: selectedDuration,
          }}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {isConsentOpen && (
        <ConsentModal
          phone={phone}
          duration={selectedDuration}
          weeklyPrice={currentWeeklyPrice}
          onClose={() => setIsConsentOpen(false)}
        />
      )}
    </>
  );
};

export default PhoneCard;
