import React from 'react';
import { useApp } from '../context/AppContext';

export default function MyBookings() {
  const { activeBookings, setCurrentPage } = useApp();

  return (
    <div className="w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        
        <div className="flex items-center justify-between pb-6 border-b border-neutral-200 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
              My Bookings
            </h1>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
              Track live dispatches, verify arrival OTPs and download past service receipts.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('directory')}
            className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-container transition-colors shadow-2xs"
          >
            + New Service
          </button>
        </div>

        <div className="space-y-6">
          {activeBookings.map((booking) => {
            const isEnRoute = booking.status === 'en_route';
            return (
              <div
                key={booking.id}
                className={`p-6 rounded-2xl bg-surface-container-lowest border transition-all ${
                  isEnRoute
                    ? 'border-emerald-700/50 shadow-md ring-1 ring-emerald-500/20'
                    : 'border-neutral-200/80 shadow-xs'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-100">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-primary-fixed/60 text-primary flex items-center justify-center font-bold">
                      <span className="material-symbols-outlined text-xl">
                        {isEnRoute ? 'local_shipping' : 'done_all'}
                      </span>
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-base text-on-surface">{booking.serviceName}</h3>
                        <span className="text-xs text-outline font-mono">#{booking.id}</span>
                      </div>
                      <p className="text-xs text-on-surface-variant">Slot: {booking.slotTime}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                      isEnRoute
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'bg-neutral-100 text-neutral-700'
                    }`}>
                      {isEnRoute && <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>}
                      {booking.statusLabel}
                    </span>
                  </div>
                </div>

                <div className="py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="text-on-surface-variant block">Assigned Specialist:</span>
                    <span className="font-bold text-on-surface mt-0.5 block">{booking.proName}</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant block">Service Location:</span>
                    <span className="font-medium text-on-surface mt-0.5 block truncate max-w-xs">{booking.address}</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant block">Advance Paid (40%):</span>
                    <span className="font-bold text-emerald-800 mt-0.5 block">₹{booking.advancePaid}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
                  {isEnRoute && booking.otp && (
                    <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-xl text-xs">
                      <span className="text-on-surface-variant">Doorstep Arrival OTP:</span>
                      <span className="font-mono font-bold text-primary text-sm">{booking.otp}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-3 ml-auto">
                    {isEnRoute ? (
                      <button
                        onClick={() => setCurrentPage('confirmation')}
                        className="px-4 py-2 rounded-xl bg-secondary text-white text-xs font-bold hover:bg-secondary/90 transition-colors shadow-xs"
                      >
                        Track Live Technician &rarr;
                      </button>
                    ) : (
                      <button
                        onClick={() => setCurrentPage('directory')}
                        className="px-4 py-2 rounded-xl bg-surface-container text-primary text-xs font-bold hover:bg-surface-container-high transition-colors"
                      >
                        Book Again
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
