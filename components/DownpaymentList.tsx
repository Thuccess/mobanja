
import React from 'react';
import { Flame, Info, Calendar } from 'lucide-react';

// Newest models first (iPhone 17 series) down to the oldest (XR)
const INSTALLMENT_DATA = [
  { model: 'iPhone 17 Pro Max', full: '4,800,000', down: '2,400,000', w10: '432,000', w12: '408,000', w16: '324,000', w24: '192,000', note: '50% Down' },
  { model: 'iPhone 17 Pro', full: '4,200,000', down: '2,100,000', w10: '378,000', w12: '357,000', w16: '283,500', w24: '168,000', note: '50% Down' },
  { model: 'iPhone 17', full: '3,600,000', down: '1,800,000', w10: '324,000', w12: '306,000', w16: '243,000', w24: '144,000', note: '50% Down' },
  { model: 'iPhone 16 Pro Max', full: '4,400,000', down: '2,200,000', w10: '396,000', w12: '374,000', w16: '297,000', w24: '176,000', note: '50% Down' },
  { model: 'iPhone 16 128GB', full: '3,900,000', down: '1,950,000', w10: '351,000', w12: '331,500', w16: '263,250', w24: '156,000', note: '50% Down' },
  { model: 'iPhone 15 Pro Max 256GB', full: '4,500,000', down: '2,250,000', w10: '405,000', w12: '382,500', w16: '303,750', w24: '180,000', note: '50% Down' },
  { model: 'iPhone 15 Pro', full: '2,950,000', down: '1,475,000', w10: '265,500', w12: '250,750', w16: '199,125', w24: '118,000', note: '50% Down' },
  { model: 'iPhone 15 128GB', full: '2,450,000', down: '1,225,000', w10: '220,500', w12: '208,250', w16: '165,375', w24: '98,000', note: '50% Down' },
  { model: 'iPhone 14 Pro Max', full: '2,500,000', down: '1,250,000', w10: '234,000', w12: '221,000', w16: '175,500', w24: '104,000', note: '50% Down' },
  { model: 'iPhone 14 Pro', full: '2,100,000', down: '1,050,000', w10: '189,000', w12: '178,500', w16: '141,750', w24: '84,000', note: '50% Down' },
  { model: 'iPhone 14 128GB', full: '1,800,000', down: '720,000', w10: '162,000', w12: '153,000', w16: '121,500', w24: '72,000', note: '40% Down' },
  { model: 'iPhone 13 Pro Max', full: '1,850,000', down: '740,000', w10: '166,500', w12: '157,250', w16: '124,875', w24: '74,000', note: '40% Down' },
  { model: 'iPhone 13 Pro', full: '1,650,000', down: '660,000', w10: '148,500', w12: '140,250', w16: '111,375', w24: '66,000', note: '40% Down' },
  { model: 'iPhone 13 128GB', full: '1,250,000', down: '500,000', w10: '112,500', w12: '106,250', w16: '84,375', w24: '50,000', note: '40% Down' },
  { model: 'iPhone 12 Pro Max 128GB', full: '1,650,000', down: '660,000', w10: '148,500', w12: '140,250', w16: '111,375', w24: '66,000', note: '40% Down' },
  { model: 'iPhone 12 Pro', full: '1,250,000', down: '500,000', w10: '112,500', w12: '106,250', w16: '84,375', w24: '50,000', note: '40% Down' },
  { model: 'iPhone 12 64GB', full: '1,050,000', down: '420,000', w10: '94,500', w12: '89,250', w16: '70,875', w24: '42,000', note: '40% Down' },
  { model: 'iPhone 11 Pro Max 64GB', full: '1,150,000', down: '460,000', w10: '103,500', w12: '97,750', w16: '77,625', w24: '46,000', note: '40% Down' },
  { model: 'iPhone 11 Pro 64GB', full: '1,000,000', down: '400,000', w10: '90,000', w12: '85,000', w16: '67,500', w24: '40,000', note: '40% Down' },
  { model: 'iPhone 11 64GB', full: '850,000', down: '340,000', w10: '76,500', w12: '72,250', w16: '57,375', w24: '34,000', note: '40% Down' },
  { model: 'iPhone XR 64GB', full: '700,000', down: '280,000', w10: '63,000', w12: '59,500', w16: '47,250', w24: '28,000', note: '40% Down' },
];

const DownpaymentList: React.FC = () => {
  return (
    <section className="py-16 bg-bg border-t border-border">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-bold mb-4 border border-accent/20">
             <Calendar className="w-4 h-4" />
             <span>Official Weekly Instalment Plan</span>
          </div>
          <h2 className="text-3xl font-bold text-primary mb-4">Detailed Price Breakdown</h2>
          <p className="text-text-medium max-w-2xl mx-auto">
            Review our official payment structure below. Plans allow for weekly payments after the initial down payment is made. 
            <br/><span className="text-accent font-bold">Note:</span> Newer models (iPhone 14 Pro and up, including the iPhone 17 series) require a 50% down payment. Older models require 40%.
          </p>
        </div>

        <div className="bg-surface rounded-3xl shadow-xl border border-border overflow-hidden">
          <div className="overflow-x-auto custom-scrollbar pb-4">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr className="bg-gray-100 dark:bg-white/5 border-b border-border text-xs uppercase tracking-wider text-text-medium">
                  <th className="py-5 px-6 font-bold text-primary sticky left-0 bg-gray-100 dark:bg-[#1C1C1E] z-10 shadow-sm">iPhone Model</th>
                  <th className="py-5 px-4 font-bold text-primary text-right">Full Price</th>
                  <th className="py-5 px-4 font-bold text-accent text-right bg-accent/5">Down Payment</th>
                  <th className="py-5 px-4 font-bold text-primary text-right">10 Weeks</th>
                  <th className="py-5 px-4 font-bold text-primary text-right">12 Weeks</th>
                  <th className="py-5 px-4 font-bold text-primary text-right">16 Weeks</th>
                  <th className="py-5 px-4 font-bold text-primary text-right">24 Weeks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {INSTALLMENT_DATA.map((item, idx) => (
                  <tr 
                    key={idx} 
                    className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group"
                  >
                    <td className="py-4 px-6 text-text-dark font-bold sticky left-0 bg-surface group-hover:bg-gray-50 dark:group-hover:bg-white/5 transition-colors border-r border-border/50">
                      <div className="flex flex-col">
                        <span>{item.model}</span>
                        {item.note && (
                          <span className="text-[10px] text-accent font-normal mt-0.5">{item.note}</span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-text-medium font-mono text-right text-sm">
                      {item.full}
                    </td>
                    <td className="py-4 px-4 text-accent font-bold font-mono text-right text-base bg-accent/5">
                      {item.down}
                    </td>
                    <td className="py-4 px-4 text-text-dark font-mono text-right text-sm">
                      {item.w10}
                    </td>
                    <td className="py-4 px-4 text-text-dark font-mono text-right text-sm">
                      {item.w12}
                    </td>
                    <td className="py-4 px-4 text-text-dark font-mono text-right text-sm">
                      {item.w16}
                    </td>
                    <td className="py-4 px-4 text-text-dark font-mono text-right text-sm">
                      {item.w24}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 dark:bg-white/5 p-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-text-medium border-t border-border">
            <span>* All prices in Ugandan Shillings (UGX). Weekly amounts are estimates based on the remaining balance.</span>
            <div className="flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-accent"></span>
               <span>Official 2025 Rates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownpaymentList;