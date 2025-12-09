
import React from 'react';
import { Database, Server, Cloud, Lock, Globe, Smartphone } from 'lucide-react';

const SystemArchitecture: React.FC = () => {
  return (
    <div className="pt-32 pb-20 animate-fade-in bg-bg min-h-screen">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
        
        <div className="mb-16">
           <h1 className="text-4xl font-bold text-primary mb-6">System Architecture & Integration</h1>
           <p className="text-xl text-text-medium">
              Technical specifications for the Mobanja WhatsApp-First Platform.
           </p>
        </div>

        {/* 1. High Level Architecture */}
        <Section title="1. High-Level Infrastructure" icon={Cloud}>
           <div className="bg-surface p-6 rounded-2xl border border-border mb-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center text-sm font-bold font-mono text-text-medium">
                 <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-900 w-full">
                    <Smartphone className="mx-auto mb-2 text-green-500" />
                    WhatsApp User
                 </div>
                 <div className="h-8 w-0.5 bg-border md:w-8 md:h-0.5"></div>
                 <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-900 w-full">
                    <Cloud className="mx-auto mb-2 text-blue-500" />
                    Meta Cloud API
                 </div>
                 <div className="h-8 w-0.5 bg-border md:w-8 md:h-0.5"></div>
                 <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-900 w-full">
                    <Server className="mx-auto mb-2 text-purple-500" />
                    Mobanja Core API (Node.js)
                 </div>
                 <div className="h-8 w-0.5 bg-border md:w-8 md:h-0.5"></div>
                 <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-100 dark:border-orange-900 w-full">
                    <Database className="mx-auto mb-2 text-orange-500" />
                    PostgreSQL + Redis
                 </div>
              </div>
           </div>
           <p className="text-text-medium leading-relaxed">
              The system uses a webhook-based architecture. User messages sent to the WhatsApp Business Number are forwarded by Meta's Cloud API to our Node.js/Express webhook endpoint. The core engine processes natural language, maintains session state in Redis, and persists transactional data in PostgreSQL.
           </p>
        </Section>

        {/* 2. Database Schema */}
        <Section title="2. Database Schema (PostgreSQL)" icon={Database}>
           <div className="bg-[#1e1e1e] text-gray-300 p-6 rounded-2xl font-mono text-sm overflow-x-auto shadow-inner mb-4">
{`// Users Table
Table users {
  id uuid [pk]
  phone_number varchar [unique]
  national_id_number varchar
  kyc_status enum ('PENDING', 'VERIFIED', 'REJECTED')
  credit_limit decimal
  created_at timestamp
}

// Applications Table
Table applications {
  id uuid [pk]
  user_id uuid [ref: > users.id]
  device_model varchar
  instalment_plan_months int
  status enum ('DRAFT', 'APPROVED', 'active', 'COMPLETED')
  outstanding_balance decimal
}

// Transactions Table
Table transactions {
  id uuid [pk]
  application_id uuid [ref: > applications.id]
  amount decimal
  provider enum ('MTN', 'AIRTEL')
  transaction_ref varchar
  status enum ('SUCCESS', 'FAILED')
  created_at timestamp
}`}
           </div>
        </Section>

        {/* 3. API Integrations */}
        <Section title="3. Critical API Integrations" icon={Globe}>
           <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-surface p-6 rounded-2xl border border-border">
                 <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    WhatsApp Cloud API
                 </h4>
                 <ul className="text-sm text-text-medium space-y-2 list-disc pl-4">
                    <li>Endpoint: <code>POST /messages</code></li>
                    <li>Features: Interactive Lists, Templates, Media Uploads</li>
                    <li>Webhooks: Message Status, Incoming Messages</li>
                 </ul>
              </div>
              <div className="bg-surface p-6 rounded-2xl border border-border">
                 <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    Mobile Money (OpenAPI)
                 </h4>
                 <ul className="text-sm text-text-medium space-y-2 list-disc pl-4">
                    <li>Providers: MTN MoMo API, Airtel Money</li>
                    <li>Flow: Collections (Request to Pay) & Disbursements (B2B)</li>
                    <li>Security: Mutual TLS, OAuth 2.0</li>
                 </ul>
              </div>
              <div className="bg-surface p-6 rounded-2xl border border-border">
                 <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Identity Verification (SmileID)
                 </h4>
                 <ul className="text-sm text-text-medium space-y-2 list-disc pl-4">
                    <li>Endpoint: <code>POST /verify_id</code></li>
                    <li>Input: ID Image (Base64) + Selfie</li>
                    <li>Output: Match Score (0-100), Fraud Signals</li>
                 </ul>
              </div>
           </div>
        </Section>

        {/* 4. Security */}
        <Section title="4. Security & Compliance" icon={Lock}>
           <div className="bg-surface p-6 rounded-2xl border border-border">
             <ul className="space-y-3 text-text-medium">
                <li className="flex items-start gap-3">
                   <CheckMark />
                   <span><strong>End-to-End Encryption:</strong> WhatsApp messages are encrypted. PII stored in DB is encrypted at rest (AES-256).</span>
                </li>
                <li className="flex items-start gap-3">
                   <CheckMark />
                   <span><strong>Rate Limiting:</strong> API Gateway throttles requests to prevent abuse (Redis-based).</span>
                </li>
                <li className="flex items-start gap-3">
                   <CheckMark />
                   <span><strong>Webhook Signature Verification:</strong> All incoming payloads from Meta are verified using the SHA256 signature.</span>
                </li>
             </ul>
           </div>
        </Section>

      </div>
    </div>
  );
};

const Section = ({ title, icon: Icon, children }: { title: string, icon: any, children?: React.ReactNode }) => (
  <div className="mb-16 animate-slide-up">
     <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
        <div className="p-2 bg-accent/10 rounded-lg text-accent">
           <Icon size={24} />
        </div>
        <h2 className="text-2xl font-bold text-primary">{title}</h2>
     </div>
     {children}
  </div>
);

const CheckMark = () => (
  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
     <div className="w-2 h-2 bg-green-500 rounded-full"></div>
  </div>
);

export default SystemArchitecture;
