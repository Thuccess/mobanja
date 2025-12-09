
import React, { useState, useMemo } from 'react';
import PhoneCard from '../components/PhoneCard';
import { PHONES } from '../constants';
import { Search, ArrowUpDown, Smartphone, X, Filter } from 'lucide-react';
import Button from '../components/Button';
import DownpaymentList from '../components/DownpaymentList';

const Phones: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const categories = [
    { id: 'All', label: 'All Models' },
    { id: 'iPhone 17', label: 'iPhone 17 Series' },
    { id: 'iPhone 15', label: 'iPhone 15 Series' },
    { id: 'iPhone 14', label: 'iPhone 14 Series' },
    { id: 'Budget', label: 'Budget Friendly' },
  ];

  const filteredPhones = useMemo(() => {
    return PHONES.filter(phone => {
      // Category Logic
      let matchesCategory = true;
      if (activeCategory === 'iPhone 17') matchesCategory = phone.name.includes('17');
      else if (activeCategory === 'iPhone 15') matchesCategory = phone.name.includes('15');
      else if (activeCategory === 'iPhone 14') matchesCategory = phone.name.includes('14');
      else if (activeCategory === 'Budget') matchesCategory = !phone.name.includes('17') && !phone.name.includes('16') && !phone.name.includes('15') && !phone.name.includes('14');

      // Search Logic
      const matchesSearch = phone.name.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.monthlyPrice - b.monthlyPrice;
      if (sortBy === 'price-desc') return b.monthlyPrice - a.monthlyPrice;
      return 0;
    });
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="pt-32 pb-20 min-h-screen animate-fade-in bg-bg">
      {/* Hero Section */}
      <div className="relative bg-surface border-b border-border mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 dark:bg-accent/10 opacity-50 pointer-events-none" />
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16 md:py-20 relative z-10">
           <div className="max-w-2xl">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 dark:bg-black/20 border border-border backdrop-blur-md mb-6">
                <Smartphone className="w-4 h-4 text-accent" />
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Premium Inventory</span>
             </div>
             <h1 className="text-4xl lg:text-6xl font-extrabold text-primary mb-6 tracking-tight leading-tight">
               Find your perfect <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">iPhone Upgrade</span>
             </h1>
             <p className="text-text-medium text-lg md:text-xl leading-relaxed">
               Browse our extensive collection of authentic Apple devices. 
               All available on flexible instalment plans approved in 2 hours.
             </p>
           </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* Controls Bar */}
        <div className="sticky top-24 z-30 bg-bg/80 backdrop-blur-xl py-4 -mx-4 px-4 md:mx-0 md:px-0 rounded-none md:rounded-2xl mb-8 transition-all border-y md:border border-border/50 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Search & Mobile Filter Toggle */}
            <div className="flex gap-3 w-full md:w-auto">
              <div className="relative w-full md:w-80 group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-text-medium group-focus-within:text-accent transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="Search devices..."
                  className="block w-full pl-11 pr-4 py-3 rounded-xl bg-surface border border-border text-text-dark placeholder-text-medium focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all shadow-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-text-medium hover:text-primary"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              <button 
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="md:hidden p-3 bg-surface border border-border rounded-xl text-text-dark hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <Filter className="w-5 h-5" />
              </button>
            </div>

            {/* Desktop Categories & Sort */}
            <div className="hidden md:flex items-center gap-4 w-full md:w-auto justify-end">
               {/* Category Pills */}
               <div className="flex bg-surface p-1.5 rounded-xl border border-border shadow-sm">
                 {categories.map((cat) => (
                   <button
                     key={cat.id}
                     onClick={() => setActiveCategory(cat.id)}
                     className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                       activeCategory === cat.id
                         ? 'bg-primary dark:text-black text-white shadow-md'
                         : 'text-text-medium hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800'
                     }`}
                   >
                     {cat.label}
                   </button>
                 ))}
               </div>
               
               {/* Divider */}
               <div className="w-px h-8 bg-border" />

               {/* Sort */}
               <div className="relative group">
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="appearance-none bg-surface border border-border text-text-dark py-3 pl-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent font-medium cursor-pointer hover:border-primary transition-colors"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                  <ArrowUpDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-medium pointer-events-none" />
               </div>
            </div>
          </div>

          {/* Mobile Filters Drawer (Expandable) */}
          {showMobileFilters && (
            <div className="md:hidden pt-4 mt-4 border-t border-border animate-fade-in">
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold text-text-medium uppercase tracking-wider mb-2">Categories</p>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all ${
                          activeCategory === cat.id
                            ? 'bg-primary text-white border-primary'
                            : 'bg-surface text-text-medium border-border'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-text-medium uppercase tracking-wider mb-2">Sort By</p>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="w-full bg-surface border border-border text-text-dark py-2 px-4 rounded-lg"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Stats */}
        <div className="flex justify-between items-center mb-6 px-1">
           <p className="text-text-medium">
             Showing <span className="font-bold text-primary">{filteredPhones.length}</span> results
             {searchQuery && <span> for "<span className="text-primary">{searchQuery}</span>"</span>}
           </p>
        </div>

        {/* Grid */}
        {filteredPhones.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPhones.map(phone => (
              <PhoneCard key={phone.id} phone={phone} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-surface rounded-3xl border border-border border-dashed">
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
               <Search className="w-8 h-8 text-text-medium" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">No devices found</h3>
            <p className="text-text-medium max-w-md mx-auto mb-6">
              We couldn't find any devices matching your criteria. Try changing your search or filter settings.
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>

      {/* Official Price List Reference */}
      <DownpaymentList />

    </div>
  );
};

export default Phones;
