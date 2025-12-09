import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="pt-32 pb-20 animate-fade-in min-h-screen">
      <div className="max-w-[800px] mx-auto px-6 lg:px-8 prose prose-lg prose-blue">
        <h1 className="text-4xl font-bold text-primary mb-8">Terms of Service</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
          <p className="text-text-medium">
            Welcome to Mobanja. By accessing our website and using our services, you agree to be bound by these Terms of Service. Please read them carefully.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">2. Eligibility</h2>
          <p className="text-text-medium">
            To use our instalment services, you must be at least 18 years old, have a valid government ID, and a demonstrable source of income.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">3. Payments</h2>
          <p className="text-text-medium">
            Instalment payments are due on the agreed-upon date each month. Failure to pay may result in late fees and suspension of service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">4. Device Ownership</h2>
          <p className="text-text-medium">
            The device remains the property of Mobanja (or its financing partners) until the final payment is made. Once the loan is fully repaid, ownership transfers to you.
          </p>
        </section>
        
        <p className="text-sm text-gray-500 mt-12">Last updated: January 2025</p>
      </div>
    </div>
  );
};

export default Terms;