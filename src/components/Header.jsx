import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function Header() {
  const {
    currentPage,
    setCurrentPage,
    selectedLocation,
    setIsLocationModalOpen,
    setIsAiHelpdeskOpen,
    currentBooking,
    notificationCount
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-neutral-200/80 shadow-[0_1px_8px_rgba(0,0,0,0.02)] transition-all">
      {/* Top Universal Announcement & Trust Bar */}
      <div className="w-full bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-9 flex items-center justify-between text-xs font-medium">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 opacity-90">
              <span className="material-symbols-outlined text-sm">support_agent</span>
              <span className="hidden xs:inline">24/7 Domestic Helpline:</span> <strong>+91 98765 43210</strong>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-primary-fixed-dim">
              <span className="material-symbols-outlined text-sm">verified</span>
              Fixzo 30-Day Happiness Guarantee
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentPage(currentPage === 'partner' ? 'directory' : 'partner')}
              className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded transition-colors ${
                currentPage === 'partner' 
                  ? 'bg-secondary text-white' 
                  : 'text-secondary-fixed hover:text-on-primary'
              }`}
            >
              <span className="material-symbols-outlined text-sm">handyman</span>
              {currentPage === 'partner' ? 'Back to Customer App' : 'Switch to Provider Mode (Earn)'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Logo & Locality Picker */}
        <div className="flex items-center gap-4 lg:gap-6">
          <button 
            onClick={() => setCurrentPage('directory')}
            className="flex items-center gap-2.5 transition-opacity hover:opacity-90 group text-left"
          >
            <img
              alt="Fixzo Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida/ALJJyrBcYfNekVyTIV5wVwVum4c1Mgg9AHlXPtIe0ezfwGBb4gJMKDa5Q_9ikBL-8egntLswr6Afuf4Xq5pnzNvh2lpe4Nh-7RpKamgCf1Stc2CCV_-r0DbVojGUwqOabWceyHjwXco0KoWVcuX40iVco36d2Z436PIMe7Ug-386QFgYteFB9q3fq3LvXeuI0HPkDoVBsQUr75Kjz_ZD9RZDcw9-Eomd9P5tzNJ26fj5F6O6qg"
            />
            <span className="font-headline-md text-2xl text-primary font-extrabold tracking-tight">Fixzo</span>
          </button>

          {/* Bengaluru Locality Selector */}
          <button
            onClick={() => setIsLocationModalOpen(true)}
            className="hidden sm:flex items-center gap-2 bg-surface-container-low/80 border border-neutral-200/90 px-3.5 py-1.5 rounded-full hover:border-neutral-300 hover:bg-surface-container transition-all text-left shadow-xs group"
          >
            <span className="material-symbols-outlined text-primary text-base group-hover:scale-110 transition-transform">location_on</span>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold tracking-wider text-on-surface-variant uppercase leading-none">Bengaluru</span>
              <span className="text-xs font-semibold text-on-surface truncate max-w-[150px]">{selectedLocation.name}</span>
            </div>
            <span className="material-symbols-outlined text-outline text-base">expand_more</span>
          </button>
        </div>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1 bg-surface-container-low/60 rounded-xl border border-neutral-200/80">
          <button
            onClick={() => setCurrentPage('directory')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              currentPage === 'directory' || currentPage === 'profile'
                ? 'bg-surface-container-lowest text-primary shadow-xs'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Services
          </button>

          <button
            onClick={() => setCurrentPage('my-bookings')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              currentPage === 'my-bookings' || currentPage === 'confirmation'
                ? 'bg-surface-container-lowest text-primary shadow-xs'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            My Bookings
          </button>

          <button
            onClick={() => setCurrentPage('wallet')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              currentPage === 'wallet'
                ? 'bg-surface-container-lowest text-primary shadow-xs'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Wallet & Offers
          </button>

          <button
            onClick={() => setIsAiHelpdeskOpen(true)}
            className="px-3.5 py-1.5 text-xs font-semibold rounded-lg text-emerald-800 bg-emerald-50/80 hover:bg-emerald-100/70 border border-emerald-200/50 transition-all flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
            <span className="material-symbols-outlined text-sm text-emerald-700">smart_toy</span>
            AI Helpdesk
          </button>
        </nav>

        {/* Right Status & Profile Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Active Pro Dispatch Status Pill */}
          {currentBooking && currentBooking.status === 'en_route' && (
            <button
              onClick={() => setCurrentPage('confirmation')}
              className="hidden md:flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs font-semibold hover:bg-emerald-100 transition-colors shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
              <span className="font-semibold tracking-tight">{currentBooking.proName.split(' ')[0]} in ~22m</span>
            </button>
          )}

          {/* Notifications Button */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              aria-label="Notifications"
              className="relative p-2 rounded-full text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
            >
              <span className="material-symbols-outlined text-xl">notifications</span>
              {notificationCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-secondary rounded-full ring-2 ring-white"></span>
              )}
            </button>

            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-surface-container-lowest rounded-2xl shadow-xl border border-neutral-200/80 p-4 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                  <span className="font-bold text-sm text-primary">Notifications</span>
                  <span className="text-[10px] bg-primary-fixed text-primary px-2 py-0.5 rounded-full font-bold">1 New</span>
                </div>
                <div className="py-2.5 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-sm">local_shipping</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-on-surface">Priya Sundaram is en route!</p>
                    <p className="text-[11px] text-on-surface-variant mt-0.5">Estimated arrival in ~22 mins at Indiranagar.</p>
                    <span className="text-[10px] text-outline mt-1 block">Just now</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Profile Pill */}
          <div className="flex items-center gap-2 sm:gap-2.5 pl-1 sm:pl-2 border-l border-neutral-200/80">
            <img
              alt="Arjun K. Profile"
              className="w-8 h-8 rounded-full object-cover ring-1 ring-neutral-200 shadow-2xs"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm8o7W_uHzl_OHBVeQ_SaG2YVn4SYa4UVeyze5Qk48qtpk76QNNxBJFPOYuH9oeqjcxO2oMUP6hzW2mmMd9fcawfsev_6S7H8RF59i1-6W45JBbsGaj62jqYnguNxmZJnbfgIy-hpO8E8NjJIpBPxBFJsg6ukdew3fh02d6WrDi2QAw18-4K51_P-ulOEdZE4AgPgksqieqwTuK-JQR3vsmCLfxSOLBCQnCW17eYVr"
            />
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-bold text-on-surface leading-tight">Arjun K.</span>
              <span className="text-[11px] text-primary font-semibold leading-tight flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[12px] text-amber-600">verified</span>
                Prime Member
              </span>
            </div>
          </div>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-on-surface-variant hover:text-on-surface rounded-lg"
          >
            <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-b border-neutral-200 p-4 space-y-3">
          <button
            onClick={() => { setIsLocationModalOpen(true); setMobileMenuOpen(false); }}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-surface-container-low text-xs font-semibold"
          >
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-base">location_on</span>
              <span>{selectedLocation.name} ({selectedLocation.subtext})</span>
            </div>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => { setCurrentPage('directory'); setMobileMenuOpen(false); }}
              className="p-2.5 rounded-xl text-left bg-surface-container text-xs font-semibold text-primary"
            >
              Services Directory
            </button>
            <button
              onClick={() => { setCurrentPage('my-bookings'); setMobileMenuOpen(false); }}
              className="p-2.5 rounded-xl text-left bg-surface-container text-xs font-semibold text-on-surface"
            >
              My Bookings
            </button>
            <button
              onClick={() => { setCurrentPage('wallet'); setMobileMenuOpen(false); }}
              className="p-2.5 rounded-xl text-left bg-surface-container text-xs font-semibold text-on-surface"
            >
              Wallet & Offers
            </button>
            <button
              onClick={() => { setIsAiHelpdeskOpen(true); setMobileMenuOpen(false); }}
              className="p-2.5 rounded-xl text-left bg-emerald-50 text-xs font-semibold text-emerald-800"
            >
              AI Helpdesk
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
