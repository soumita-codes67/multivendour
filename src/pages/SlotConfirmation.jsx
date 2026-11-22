import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import confetti from 'canvas-confetti';

export default function SlotConfirmation() {
  const { currentBooking, setCurrentPage } = useApp();
  const [etaMinutes, setEtaMinutes] = useState(22);
  const [copiedOtp, setCopiedOtp] = useState(false);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);

  useEffect(() => {
    // Launch celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback
    }

    // Dynamic countdown timer for ETA
    const interval = setInterval(() => {
      setEtaMinutes((prev) => (prev > 1 ? prev - 1 : 1));
    }, 45000);

    return () => clearInterval(interval);
  }, []);

  const handleCopyOtp = () => {
    if (currentBooking?.otp) {
      navigator.clipboard?.writeText(currentBooking.otp);
      setCopiedOtp(true);
      setTimeout(() => setCopiedOtp(false), 2000);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        
        {/* Step Tracker Bar (Completed state) */}
        <div className="w-full mb-8 sm:mb-10">
          <div className="flex items-center justify-between relative max-w-xl mx-auto">
            {/* Connecting Line Background */}
            <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-0.5 bg-primary-container z-0"></div>
            
            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-xs font-semibold shadow-sm ring-4 ring-surface">
                <span className="material-symbols-outlined text-sm font-bold">check</span>
              </div>
              <span className="mt-2 text-[11px] font-semibold text-primary">1. Service</span>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-xs font-semibold shadow-sm ring-4 ring-surface">
                <span className="material-symbols-outlined text-sm font-bold">check</span>
              </div>
              <span className="mt-2 text-[11px] font-semibold text-primary">2. Schedule</span>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-xs font-semibold shadow-sm ring-4 ring-surface">
                <span className="material-symbols-outlined text-sm font-bold">check</span>
              </div>
              <span className="mt-2 text-[11px] font-semibold text-primary">3. Confirmed</span>
            </div>
          </div>
        </div>

        {/* Success Header Card */}
        <div className="bg-gradient-to-r from-emerald-50 via-surface-container-lowest to-surface-container-lowest border border-emerald-200/90 rounded-2xl p-6 sm:p-8 shadow-sm mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-md">
              <span className="material-symbols-outlined text-2xl font-bold">check_circle</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-headline-lg text-2xl text-primary font-bold tracking-tight">
                  Booking Confirmed!
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                  {currentBooking?.id || '#FXZ-84920'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
                Technician has accepted your dispatch request and is preparing equipment.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-stretch sm:self-auto">
            <button
              onClick={() => setShowInvoiceModal(true)}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-neutral-200 hover:border-neutral-300 bg-white text-xs font-bold text-on-surface flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
            >
              <span className="material-symbols-outlined text-base">receipt_long</span>
              Invoice
            </button>
            <button
              onClick={() => alert('Calendar invite (.ics) sent to arjun.k@example.com')}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-neutral-200 hover:border-neutral-300 bg-white text-xs font-bold text-on-surface flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
            >
              <span className="material-symbols-outlined text-base">event</span>
              Add to Cal
            </button>
          </div>
        </div>

        {/* Live Dispatch Map & Tracking Card */}
        <div className="bg-surface-container-lowest rounded-2xl border border-neutral-200/90 shadow-sm overflow-hidden mb-8">
          
          {/* Top Status Banner */}
          <div className="p-4 sm:p-5 bg-primary text-on-primary flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary-fixed-dim block">
                  Live Dispatch Status
                </span>
                <span className="text-sm font-bold text-white">
                  Technician En Route • ETA ~{etaMinutes} mins
                </span>
              </div>
            </div>

            {/* Arrival OTP Badge */}
            <div className="flex items-center gap-2 bg-emerald-900/60 px-3.5 py-1.5 rounded-xl border border-emerald-700/60">
              <span className="text-[11px] text-neutral-300 font-medium">Arrival OTP:</span>
              <span className="font-mono text-base font-extrabold text-white tracking-widest">
                {currentBooking?.otp || '4920'}
              </span>
              <button
                onClick={handleCopyOtp}
                className="text-[10px] text-emerald-300 hover:text-white underline pl-1"
              >
                {copiedOtp ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          {/* Interactive Simulated Map View */}
          <div className="relative h-64 sm:h-72 bg-neutral-100 overflow-hidden flex items-center justify-center">
            {/* Map Background Grid */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#1b4332_1px,transparent_1px)] [background-size:16px_16px]"></div>

            {/* Street Line Vector */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 100 200 Q 250 80, 450 140 T 750 90"
                fill="none"
                stroke="#1b4332"
                strokeWidth="4"
                strokeDasharray="6,6"
              />
            </svg>

            {/* Destination Pin (Customer Flat in Indiranagar) */}
            <div className="absolute right-12 sm:right-24 top-16 flex flex-col items-center animate-bounce">
              <div className="bg-primary text-white p-2 rounded-xl shadow-lg flex items-center gap-1.5 text-xs font-bold">
                <span className="material-symbols-outlined text-sm">home</span>
                <span>Your Door (Flat 402)</span>
              </div>
              <div className="w-2 h-2 bg-primary rotate-45 -mt-1"></div>
            </div>

            {/* Live Moving Pro Van / Bike Pin */}
            <div className="absolute left-20 sm:left-36 bottom-16 flex flex-col items-center">
              <div className="bg-secondary text-white px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2 text-xs font-bold ring-4 ring-secondary/20">
                <span className="material-symbols-outlined text-sm">electric_moped</span>
                <span>Priya Sundaram (2.1 km away)</span>
              </div>
              <div className="w-2 h-2 bg-secondary rotate-45 -mt-1"></div>
            </div>

            {/* Bottom Floating Map Controls */}
            <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-white/95 backdrop-blur-sm p-1.5 rounded-xl border border-neutral-200 shadow-sm text-xs">
              <span className="px-2 text-on-surface-variant font-medium">GPS Signal: Strong</span>
              <button
                onClick={() => alert('Opening live Google Maps route...')}
                className="px-2.5 py-1 bg-surface-container rounded-lg font-bold text-primary hover:bg-neutral-200"
              >
                Full Map
              </button>
            </div>
          </div>

          {/* Pro Contact & Arrival Checklist */}
          <div className="p-6 border-t border-neutral-100 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex items-center gap-4">
              <img
                alt={currentBooking?.proName || 'Priya Sundaram'}
                src={currentBooking?.proAvatar || 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq_080G4RIQ7K_bfB9iW7geas9pmikGOLNc99YdRbUKkVWDladC3OMEdujZzmqEuZkWJEdOSXMsMhWeRaRjZ99BNCrrRcOB5Ck5-cNYcwmrCjwkk8QS59K1rrQBvGq2tfqG-ov4_FiRyKHzglPGXiopb-AWxGj1pRTsVWcc6GWx3sbAF_IyVTb0TzpHTtJi1tD5GSIZCRP9sKBUVlv7Y2TQPjdRUkYWpvQQBVcWzYU'}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-emerald-500 shadow-sm"
              />
              <div>
                <h4 className="text-sm font-bold text-on-surface">{currentBooking?.proName || 'Priya Sundaram'}</h4>
                <p className="text-xs text-on-surface-variant">Assigned Fixzo Pro • 520+ verified cleans</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-primary bg-primary-fixed px-2.5 py-0.5 rounded-full hover:bg-primary-fixed-dim"
                  >
                    <span className="material-symbols-outlined text-xs">call</span>
                    Call Pro
                  </a>
                  <button
                    onClick={() => alert('Opening in-app secure chat with Priya Sundaram...')}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-on-surface bg-surface-container px-2.5 py-0.5 rounded-full hover:bg-surface-container-high"
                  >
                    <span className="material-symbols-outlined text-xs">chat</span>
                    Chat
                  </button>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-surface-container-low border border-neutral-200/60 text-xs space-y-1.5">
              <span className="font-bold text-primary flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">shield</span>
                At Doorstep Verification:
              </span>
              <p className="text-[11px] text-on-surface-variant">
                1. Check Pro's green Fixzo ID card.<br/>
                2. Share OTP <strong>{currentBooking?.otp || '4920'}</strong> only after technician reaches your apartment.<br/>
                3. Inspect the completed job before releasing final 60% balance.
              </p>
            </div>
          </div>
        </div>

        {/* Order Breakdown Recap */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 border border-neutral-200/90 shadow-sm space-y-4">
          <h3 className="font-bold text-sm text-primary">Booking Recap</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-3 rounded-xl bg-surface-container-low">
              <span className="text-on-surface-variant block">Service Booked</span>
              <span className="font-bold text-on-surface mt-0.5 block">{currentBooking?.serviceName}</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low">
              <span className="text-on-surface-variant block">Slot Confirmed</span>
              <span className="font-bold text-on-surface mt-0.5 block">{currentBooking?.slotTime}</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low">
              <span className="text-on-surface-variant block">Advance Authorized</span>
              <span className="font-bold text-emerald-800 mt-0.5 block">₹{currentBooking?.advancePaid} (40% Escrow)</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-100">
            <button
              onClick={() => setCurrentPage('my-bookings')}
              className="text-xs font-bold text-primary hover:underline"
            >
              View in My Bookings &rarr;
            </button>

            <button
              onClick={() => setCurrentPage('directory')}
              className="px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-container transition-colors"
            >
              Book Another Service
            </button>
          </div>
        </div>

        {/* Tax Invoice Modal */}
        {showInvoiceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white max-w-md w-full rounded-2xl p-6 shadow-2xl border border-neutral-200 space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <span className="font-bold text-base text-primary">Tax Invoice (Advance Escrow)</span>
                <button onClick={() => setShowInvoiceModal(false)}>
                  <span className="material-symbols-outlined text-outline">close</span>
                </button>
              </div>

              <div className="text-xs space-y-2">
                <p><strong>Invoice No:</strong> INV-{currentBooking?.id}</p>
                <p><strong>Customer:</strong> Arjun K. (Prime Member)</p>
                <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
                <div className="p-3 bg-surface-container-low rounded-xl space-y-1 my-3">
                  <div className="flex justify-between">
                    <span>{currentBooking?.serviceName}</span>
                    <span>₹{currentBooking?.amount}</span>
                  </div>
                  <div className="flex justify-between font-bold text-primary">
                    <span>40% Refundable Advance Received:</span>
                    <span>₹{currentBooking?.advancePaid}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  alert('Invoice downloaded as PDF.');
                  setShowInvoiceModal(false);
                }}
                className="w-full py-2.5 rounded-xl bg-primary text-white text-xs font-bold"
              >
                Download PDF
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
