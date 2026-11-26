import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SERVICES, CATEGORIES } from '../data/mockData';

export default function ServicesDirectory() {
  const {
    selectedLocation,
    setIsLocationModalOpen,
    selectedService,
    services,
    handleSelectService,
    selectedPackage,
    setCurrentPage,
    totalPayable,
    advancePayable,
    balanceOnCompletion,
    basePrice,
    safetyFee,
    primeDiscount
  } = useApp();

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [instantDispatchOnly, setInstantDispatchOnly] = useState(false);

  // Filter services
  const filteredServices = services.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full">
      {/* Catalog Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-10">
        
        {/* Top Context & Locality Header */}
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/70 text-xs font-semibold tracking-tight shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping"></span>
                  Verified Local Coverage
                </span>
                <span className="text-xs text-on-surface-variant flex items-center gap-1.5 bg-surface-container-lowest/80 px-2.5 py-1 rounded-full border border-neutral-200/70">
                  <span className="material-symbols-outlined text-sm text-primary">schedule</span>
                  Next arrival slot in 28 mins
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl text-primary font-extrabold tracking-tight">
                Services in {selectedLocation.name}, Kolkata
              </h1>
            </div>

            {/* Location Switch Pill */}
            <button
              onClick={() => setIsLocationModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-surface-container-lowest hover:bg-surface-container-low border border-neutral-200/90 hover:border-neutral-300 rounded-full text-on-surface text-xs font-semibold transition-all shadow-2xs text-left group"
            >
              <span className="material-symbols-outlined text-primary text-base group-hover:scale-110 transition-transform">location_on</span>
              <span className="truncate max-w-[190px] font-semibold">{selectedLocation.subtext}</span>
              <span className="material-symbols-outlined text-outline text-sm group-hover:rotate-180 transition-transform">swap_horiz</span>
            </button>
          </div>

          {/* Compact Search & Filter Toolbar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            <div className="md:col-span-9 lg:col-span-9 relative flex items-center group">
              <span className="material-symbols-outlined absolute left-4 text-outline text-xl pointer-events-none group-focus-within:text-primary transition-colors">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cleaning, electrician, plumbing, AC servicing..."
                className="w-full pl-12 pr-10 py-3.5 bg-surface-container-lowest text-on-surface placeholder:text-outline/80 rounded-2xl text-sm border border-neutral-200/90 shadow-2xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 p-1 rounded-full text-outline hover:text-on-surface bg-surface-container/60"
                >
                  <span className="material-symbols-outlined text-base">close</span>
                </button>
              )}
            </div>

            <div className="md:col-span-3 lg:col-span-3 flex items-center gap-2">
              <button
                onClick={() => {
                  // Cycle categories or clear
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-surface-container-lowest hover:bg-surface-container-low border border-neutral-200/90 text-on-surface text-xs font-semibold rounded-2xl shadow-2xs transition-all hover:border-neutral-300"
              >
                <span className="material-symbols-outlined text-base text-outline">tune</span>
                Filter Catalog
                <span className="w-5 h-5 rounded-full bg-primary text-on-primary text-[10px] flex items-center justify-center font-bold">
                  {filteredServices.length}
                </span>
              </button>

              <button
                onClick={() => setInstantDispatchOnly(!instantDispatchOnly)}
                title="Toggle Instant Dispatch Mode"
                className={`p-3.5 rounded-2xl border shadow-2xs transition-all ${
                  instantDispatchOnly
                    ? 'bg-amber-100 border-amber-300 text-amber-800'
                    : 'bg-surface-container-lowest hover:bg-amber-50 border-neutral-200/90 text-amber-700'
                }`}
              >
                <span className="material-symbols-outlined text-xl">bolt</span>
              </button>
            </div>
          </div>

          {/* Quick Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none" id="category-chips">
            {CATEGORIES.map(cat => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 shadow-2xs ${
                    isActive
                      ? 'bg-primary text-on-primary shadow-xs'
                      : 'bg-surface-container-lowest border border-neutral-200/80 text-on-surface-variant hover:border-neutral-300 hover:text-on-surface'
                  }`}
                >
                  <span className="material-symbols-outlined text-base">{cat.icon}</span>
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Workspace: Service Grid (Left 8 cols) + Summary Drawer (Right 4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Service Grid */}
          <section className="lg:col-span-8 flex flex-col gap-5">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2.5">
                <span className="font-headline-md text-xl text-primary font-bold tracking-tight">
                  {CATEGORIES.find(c => c.id === activeCategory)?.name || 'All Services'}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high/70 border border-neutral-200/70 text-on-surface-variant text-[11px] font-semibold">
                  {filteredServices.length} Curated
                </span>
              </div>
              <span className="text-xs text-on-surface-variant font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-emerald-700">eco</span>
                Includes hospital-grade eco solutions
              </span>
            </div>

            {filteredServices.map(service => {
              const isSelected = selectedService.id === service.id;
              return (
                <article
                  key={service.id}
                  onClick={() => handleSelectService(service)}
                  className={`group p-5 rounded-2xl bg-surface-container-lowest border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'border-emerald-800/40 ring-2 ring-primary/20 shadow-md'
                      : 'border-neutral-200/80 hover:border-neutral-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row gap-5 items-start">
                    {/* Service Image */}
                    <div className="relative w-full sm:w-48 h-36 rounded-xl overflow-hidden shrink-0 bg-surface-container border border-neutral-200/80">
                      <img
                        alt={service.name}
                        src={service.image}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {service.bestseller && (
                        <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-primary/90 backdrop-blur-md text-on-primary text-[11px] font-semibold tracking-wider uppercase shadow-xs">
                          Bestseller
                        </div>
                      )}
                    </div>

                    {/* Service Details */}
                    <div className="flex-1 flex flex-col justify-between w-full h-full">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-headline-md text-lg text-on-surface font-bold tracking-tight group-hover:text-primary transition-colors">
                            {service.name}
                          </h3>
                          <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container text-on-surface text-xs font-semibold">
                            <span className="material-symbols-outlined text-amber-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                              star
                            </span>
                            {service.rating} <span className="text-outline font-normal">({service.reviewsCount})</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 mt-1.5 text-on-surface-variant text-xs">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm text-outline">timelapse</span>
                            ~{service.duration}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm text-outline">group</span>
                            {service.prosCount}
                          </span>
                        </div>

                        {/* Checklist tags */}
                        <div className="flex flex-wrap items-center gap-1.5 mt-3">
                          {service.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-md bg-surface-container-low text-[11px] font-medium text-on-surface-variant border border-neutral-100"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Pricing & Selection CTA */}
                      <div className="flex items-center justify-between pt-4 mt-2 border-t border-neutral-100">
                        <div>
                          <span className="text-[11px] text-outline block leading-none">Starting from</span>
                          <div className="flex items-baseline gap-2 mt-0.5">
                            <span className="font-headline-lg text-2xl font-extrabold text-primary">
                              ₹{service.price}
                            </span>
                            {service.originalPrice && (
                              <span className="text-xs text-outline line-through">
                                ₹{service.originalPrice}
                              </span>
                            )}
                          </div>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelectService(service);
                            setCurrentPage('profile');
                          }}
                          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 ${
                            isSelected
                              ? 'bg-primary text-on-primary hover:bg-primary-container'
                              : 'bg-surface-container text-on-surface hover:bg-primary hover:text-white'
                          }`}
                        >
                          <span className="material-symbols-outlined text-base">
                            {isSelected ? 'check_circle' : 'add'}
                          </span>
                          {isSelected ? 'View Pro & Slots' : 'Select Service'}
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>

          {/* Clean Sticky Summary Drawer (Right 4 cols) */}
          <aside className="lg:col-span-4 sticky top-28 space-y-5">
            <div className="bg-surface-container-lowest rounded-2xl p-6 border border-neutral-200/90 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                <div>
                  <h3 className="font-bold text-base text-primary">Booking Order Preview</h3>
                  <p className="text-xs text-on-surface-variant">Instant dispatch or pick date slot</p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200/60">
                  Ready
                </span>
              </div>

              {/* Selected Service Card */}
              <div className="py-4 border-b border-neutral-100 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-on-surface">{selectedService.name}</h4>
                    <p className="text-xs text-on-surface-variant mt-0.5">
                      {selectedPackage ? selectedPackage.name : 'Standard Full Package'}
                    </p>
                  </div>
                  <span className="text-sm font-bold text-primary">₹{basePrice}</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-on-surface-variant bg-surface-container-low p-2 rounded-lg">
                  <span className="material-symbols-outlined text-sm text-primary">person</span>
                  <span>Assigned: <strong>Priya Sundaram</strong> (★ 4.8)</span>
                </div>
              </div>

              {/* Price Calculation Transparency */}
              <div className="py-4 border-b border-neutral-100 space-y-2 text-xs">
                <div className="flex items-center justify-between text-on-surface-variant">
                  <span>Package Base Price</span>
                  <span className="font-semibold text-on-surface">₹{basePrice}</span>
                </div>
                <div className="flex items-center justify-between text-on-surface-variant">
                  <span className="flex items-center gap-1">
                    Safety & Insurance Fee
                    <span className="material-symbols-outlined text-xs text-outline">verified</span>
                  </span>
                  <span className="font-semibold text-on-surface">₹{safetyFee}</span>
                </div>
                <div className="flex items-center justify-between text-emerald-700 font-medium">
                  <span>Prime Member Instant Off</span>
                  <span>-₹{primeDiscount}</span>
                </div>

                {/* 40% Refundable Domestic Advance Split */}
                <div className="p-3 mt-2 rounded-xl bg-amber-50/80 border border-amber-200/70 text-[11px] space-y-1">
                  <div className="flex items-center justify-between font-bold text-amber-900">
                    <span>40% Refundable Advance Now:</span>
                    <span>₹{advancePayable}</span>
                  </div>
                  <div className="flex items-center justify-between text-amber-800">
                    <span>Remaining 60% on completion:</span>
                    <span>₹{balanceOnCompletion}</span>
                  </div>
                  <p className="text-[10px] text-amber-700 italic pt-1">
                    Advance is held securely in escrow until you approve the work.
                  </p>
                </div>
              </div>

              {/* Total & Action */}
              <div className="pt-4 space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-semibold text-on-surface">Total Estimation:</span>
                  <span className="text-2xl font-extrabold text-primary">₹{totalPayable}</span>
                </div>

                <button
                  onClick={() => setCurrentPage('profile')}
                  className="w-full py-3.5 px-4 rounded-xl bg-secondary hover:bg-secondary/90 text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 group"
                >
                  <span>Select Slot & Pro</span>
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            {/* Happiness Guarantee Card */}
            <div className="bg-primary-container text-on-primary p-4 rounded-2xl flex items-center gap-3 shadow-xs">
              <span className="material-symbols-outlined text-secondary-container text-2xl shrink-0">
                verified_user
              </span>
              <div className="text-xs">
                <p className="font-bold text-white">Fixzo 30-Day Guarantee</p>
                <p className="text-primary-fixed-dim leading-snug mt-0.5">
                  Free inspection and rework if anything isn't 100% satisfactory.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
