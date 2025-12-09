import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-32 pb-20 animate-fade-in min-h-screen">
      <div className="max-w-[800px] mx-auto px-6 lg:px-8 prose prose-lg">
        <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
        
        <p className="text-text-medium mb-8">
          At Mobanja, we take your privacy seriously. This policy explains how we collect, use, and protect your personal information.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Information We Collect</h2>
          <ul className="list-disc pl-6 text-text-medium space-y-2">
            <li>Personal identification (Name, ID number, Phone number)</li>
            <li>Financial information (Bank statements, income proof)</li>
            <li>Contact information (Address, Email)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Data</h2>
          <p className="text-text-medium">
            We use your data to:
          </p>
          <ul className="list-disc pl-6 text-text-medium space-y-2 mt-2">
            <li>Assess creditworthiness and approve applications</li>
            <li>Process payments and manage accounts</li>
            <li>Communicate with you regarding your plan</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Data Security</h2>
          <p className="text-text-medium">
            We implement industry-standard security measures to protect your data against unauthorized access, alteration, or destruction.
          </p>
        </section>

         <p className="text-sm text-gray-500 mt-12">Last updated: January 2025</p>
      </div>
    </div>
  );
};

export default Privacy;