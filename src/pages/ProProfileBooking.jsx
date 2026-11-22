import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function ProProfileBooking() {
  const {
    selectedService,
    selectedPro,
    selectedPackage,
    setSelectedPackage,
    selectedDate,
    setSelectedDate,
    selectedTimeSlot,
    setSelectedTimeSlot,
    dispatchMode,
    setDispatchMode,
    setCurrentPage,
    totalPayable
  } = useApp();

  const DATES = [
    { label: 'Today, Nov 22', day: 'Today', date: '22 Nov', fast: true },
    { label: 'Tomorrow, Nov 23', day: 'Tomorrow', date: '23 Nov', fast: false },
    { label: 'Wed, Nov 24', day: 'Wed', date: '24 Nov', fast: false },
    { label: 'Thu, Nov 25', day: 'Thu', date: '25 Nov', fast: false },
    { label: 'Fri, Nov 26', day: 'Fri', date: '26 Nov', fast: false },
  ];

  const TIME_SLOTS = [
    { time: '08:00 AM', slot: 'Morning', fast: false },
    { time: '10:00 AM', slot: 'Morning', fast: false },
    { time: '11:30 AM', slot: 'Morning', fast: true },
    { time: '02:00 PM', slot: 'Afternoon', fast: false },
    { time: '03:30 PM', slot: 'Afternoon', fast: false },
    { time: '05:00 PM', slot: 'Evening', fast: false },
    { time: '06:30 PM', slot: 'Evening', fast: false },
  ];

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-10">
        
        {/* Breadcrumb & Live Dispatch Radius Pill */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-on-surface-variant">
            <button onClick={() => setCurrentPage('directory')} className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">home</span>
              Home
            </button>
            <span>/</span>
            <button onClick={() => setCurrentPage('directory')} className="hover:text-primary transition-colors">
              {selectedService.name}
            </button>
            <span>/</span>
            <span className="text-primary font-bold">{selectedPro.name}</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-surface-container-low px-3.5 py-1.5 rounded-full shadow-2xs border border-neutral-200/70">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="text-xs font-semibold text-primary tracking-wide">
              Available for Dispatch: 25 mins radius
            </span>
          </div>
        </div>

        {/* Main Two-Column Layout (5 cols Left / 7 cols Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Verified Specialist Dossier (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Hero Pro Card */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 lg:p-8 shadow-sm border border-neutral-200/80 flex flex-col gap-6 relative overflow-hidden">
              {/* Background Accent Ring */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary-fixed/20 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-start gap-5">
                <div className="relative shrink-0">
                  <img
                    alt={selectedPro.name}
                    src={selectedPro.avatar}
                    className="w-20 h-20 rounded-2xl object-cover shadow-md ring-2 ring-emerald-500/20"
                  />
                  <span className="absolute -bottom-1.5 -right-1.5 bg-primary text-on-primary w-6 h-6 rounded-full flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                      verified
                    </span>
                  </span>
                </div>

                <div className="flex flex-col min-w-0">
                  <h1 className="font-headline-lg text-2xl text-primary font-bold tracking-tight truncate">
                    {selectedPro.name}
                  </h1>
                  <p className="text-xs text-on-surface-variant font-medium mt-0.5">
                    {selectedPro.role}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="inline-flex items-center gap-1 bg-surface-container-high px-2.5 py-0.5 rounded-full text-xs font-semibold text-on-surface">
                      <span className="material-symbols-outlined text-xs text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="font-bold">{selectedPro.rating}</span>
                      <span className="text-on-surface-variant font-normal">({selectedPro.cleansCount})</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badges Pill Row */}
              <div className="flex flex-wrap items-center gap-2">
                {selectedPro.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 bg-surface-container-low px-3 py-1 rounded-full text-xs font-semibold text-primary border border-neutral-200/60"
                  >
                    <span className="material-symbols-outlined text-sm text-primary">verified</span>
                    {badge}
                  </span>
                ))}
              </div>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-3 gap-3 bg-surface-container-low p-3.5 rounded-xl text-center border border-neutral-200/60">
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-primary">{selectedPro.onTimeRate}</span>
                  <span className="text-[11px] text-on-surface-variant font-medium">On-time rate</span>
                </div>
                <div className="flex flex-col border-x border-neutral-200/80">
                  <span className="text-lg font-bold text-primary">{selectedPro.distance}</span>
                  <span className="text-[11px] text-on-surface-variant font-medium">From your door</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-primary">{selectedPro.experience}</span>
                  <span className="text-[11px] text-on-surface-variant font-medium">Field exp</span>
                </div>
              </div>

              {/* Pricing Package Selector */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                  Select Scope & Package
                </span>
                
                {selectedService.packages && selectedService.packages.map(pkg => {
                  const isPkgSelected = selectedPackage?.id === pkg.id;
                  return (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg)}
                      className={`p-4 rounded-xl flex items-center justify-between cursor-pointer transition-all border ${
                        isPkgSelected
                          ? 'bg-primary-fixed/20 border-primary ring-1 ring-primary'
                          : 'bg-surface-container-low hover:bg-surface-container border-neutral-200/70'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          isPkgSelected ? 'bg-primary text-white' : 'bg-surface-container text-primary'
                        }`}>
                          <span className="material-symbols-outlined text-base">check</span>
                        </span>
                        <div>
                          <h4 className="text-xs font-bold text-primary">{pkg.name}</h4>
                          <p className="text-[11px] text-on-surface-variant">{pkg.desc}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-base font-bold text-primary">₹{pkg.price}</span>
                        <span className="block text-[10px] text-on-surface-variant">~{pkg.duration}</span>
                      </div>
                    </div>
                  );
                })}

                <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low rounded-lg text-xs text-on-surface-variant">
                  <span>Hourly standard technician rate:</span>
                  <span className="font-bold text-primary">₹{selectedPro.hourlyRate} / hour</span>
                </div>
              </div>

              {/* Customer Verdict */}
              {selectedPro.testimonial && (
                <div className="bg-surface-container-low p-4 rounded-xl flex flex-col gap-2 border border-neutral-200/60">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[1, 2, 3, 4, 5].map(i => (
                      <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-on-surface italic leading-relaxed">
                    “{selectedPro.testimonial.text}”
                  </p>
                  <span className="text-[11px] font-bold text-primary">
                    — {selectedPro.testimonial.author}, {selectedPro.testimonial.locality}
                  </span>
                </div>
              )}

              {/* Fixzo Guarantee Bar */}
              <div className="flex items-center gap-3 bg-primary-container text-on-primary p-3.5 rounded-xl">
                <span className="material-symbols-outlined text-secondary-container text-2xl shrink-0">
                  verified_user
                </span>
                <div className="flex flex-col text-xs">
                  <span className="font-bold text-white">Fixzo 30-Day Rework Guarantee</span>
                  <span className="text-primary-fixed-dim">Free return inspection & touchup if not completely satisfied.</span>
                </div>
              </div>
            </div>

            {/* Equipment Dossier */}
            <div className="bg-surface-container-low p-4 rounded-xl flex items-center justify-between gap-4 border border-neutral-200/70">
              <div className="flex items-center gap-3 text-xs text-on-surface">
                <span className="material-symbols-outlined text-primary text-xl">sanitizer</span>
                <span>{selectedPro.equipment}</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant text-base">info</span>
            </div>
          </div>

          {/* Right Column: Schedule & Slot Picker (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-surface-container-lowest rounded-2xl p-6 lg:p-8 shadow-sm border border-neutral-200/80 flex flex-col gap-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <div>
                  <h2 className="font-headline-lg text-2xl text-primary font-bold tracking-tight">
                    Select Slot & Dispatch
                  </h2>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    Choose arrival window for technician visit in Indiranagar
                  </p>
                </div>
                <span className="px-3 py-1 bg-surface-container text-primary font-bold text-xs rounded-full">
                  Step 2 of 3
                </span>
              </div>

              {/* Dispatch Mode Toggle: Instant (~25m) vs Scheduled */}
              <div className="grid grid-cols-2 gap-3 p-1.5 bg-surface-container-low rounded-2xl border border-neutral-200/80">
                <button
                  onClick={() => setDispatchMode('instant')}
                  className={`py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    dispatchMode === 'instant'
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  <span className="material-symbols-outlined text-base">bolt</span>
                  Instant Dispatch (~25 mins)
                </button>

                <button
                  onClick={() => setDispatchMode('scheduled')}
                  className={`py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    dispatchMode === 'scheduled'
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  <span className="material-symbols-outlined text-base">calendar_month</span>
                  Schedule Later Slot
                </button>
              </div>

              {/* Date Pills */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2.5">
                  1. Select Arrival Date
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {DATES.map((d, idx) => {
                    const isDateActive = selectedDate === d.label;
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedDate(d.label)}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          isDateActive
                            ? 'bg-primary text-on-primary border-primary shadow-sm ring-1 ring-primary'
                            : 'bg-surface-container-lowest border-neutral-200 hover:border-neutral-300 text-on-surface'
                        }`}
                      >
                        <span className="block text-[11px] font-medium opacity-80">{d.day}</span>
                        <span className="block text-sm font-bold mt-0.5">{d.date}</span>
                        {d.fast && (
                          <span className={`inline-block text-[9px] font-bold px-1.5 py-0.2 rounded mt-1 ${
                            isDateActive ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800'
                          }`}>
                            Fastest
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slot Picker */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2.5">
                  2. Select Time Window
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {TIME_SLOTS.map((slot, idx) => {
                    const isTimeActive = selectedTimeSlot === slot.time;
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedTimeSlot(slot.time)}
                        className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                          isTimeActive
                            ? 'bg-primary text-on-primary border-primary shadow-sm ring-1 ring-primary'
                            : 'bg-surface-container-lowest border-neutral-200 hover:border-neutral-300 text-on-surface'
                        }`}
                      >
                        <div>
                          <span className="block text-xs font-bold">{slot.time}</span>
                          <span className={`text-[10px] ${isTimeActive ? 'text-primary-fixed-dim' : 'text-outline'}`}>
                            {slot.slot}
                          </span>
                        </div>
                        {slot.fast && (
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                            isTimeActive ? 'bg-white/20 text-white' : 'bg-emerald-50 text-emerald-800'
                          }`}>
                            Popular
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Safety & Covid Protocols Checklist */}
              <div className="p-4 rounded-xl bg-surface-container-low border border-neutral-200/80 space-y-2 text-xs">
                <span className="font-bold text-primary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">verified_user</span>
                  Fixzo Domestic Visit Standard
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-on-surface-variant">
                  <li className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-xs text-emerald-700">check</span>
                    Technician temperature verified daily
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-xs text-emerald-700">check</span>
                    Shoe covers & sanitized gear standard
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-xs text-emerald-700">check</span>
                    Digital arrival OTP check at door
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-xs text-emerald-700">check</span>
                    100% Free cancellation up to 2 hrs
                  </li>
                </ul>
              </div>

              {/* Bottom Continue Button */}
              <div className="pt-2">
                <button
                  onClick={() => setCurrentPage('checkout')}
                  className="w-full py-4 px-6 rounded-xl bg-secondary hover:bg-secondary/90 text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 group"
                >
                  <span>Proceed to Instant Checkout (₹{totalPayable})</span>
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
                <p className="text-center text-[11px] text-outline mt-2">
                  No payment required to hold slot. Only 40% advance authorized next.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
