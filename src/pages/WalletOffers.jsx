import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { AVAILABLE_COUPONS } from '../data/mockData';

export default function WalletOffers() {
  const { walletBalance, setAppliedCoupon, setCurrentPage } = useApp();
  const [copiedCode, setCopiedCode] = useState('');

  const handleCopy = (code) => {
    setAppliedCoupon(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  return (
    <div className="w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        
        {/* Header */}
        <div className="pb-6 border-b border-neutral-200 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
            Fixzo Wallet & Offers
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
            Cashback credits, Prime membership perks and verified neighborhood discounts.
          </p>
        </div>

        {/* Balance Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="md:col-span-2 bg-gradient-to-r from-primary to-primary-container text-white p-6 sm:p-8 rounded-2xl shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-primary-fixed font-bold">Fixzo Balance</span>
                <span className="inline-flex items-center gap-1 text-[11px] bg-white/20 px-2 py-0.5 rounded-full font-bold">
                  ★ Prime Member
                </span>
              </div>
              <div className="mt-3">
                <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">₹{walletBalance}</span>
                <p className="text-xs text-primary-fixed-dim mt-1">
                  Usable on any cleaning, electrician, plumbing or AC booking.
                </p>
              </div>
            </div>

            <div className="pt-6 flex items-center gap-3">
              <button
                onClick={() => alert('Fixzo Wallet recharged with ₹500!')}
                className="px-4 py-2 bg-secondary text-white text-xs font-bold rounded-xl shadow-xs hover:bg-secondary/90 transition-colors"
              >
                + Add Money
              </button>
              <button
                onClick={() => setCurrentPage('directory')}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-colors"
              >
                Use on Service
              </button>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-2xl border border-neutral-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-sm text-primary mb-2">Prime Benefits Active</h3>
              <ul className="text-xs space-y-2 text-on-surface-variant">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-emerald-700">check_circle</span>
                  ₹100 instant off on every booking
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-emerald-700">check_circle</span>
                  Priority technician dispatch (~25 mins)
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-emerald-700">check_circle</span>
                  Zero cancellation fee policy
                </li>
              </ul>
            </div>
            <span className="text-[11px] text-outline pt-4">Membership valid till Nov 2027</span>
          </div>
        </div>

        {/* Coupons List */}
        <div>
          <h2 className="text-lg font-bold text-primary mb-4">Available Discount Vouchers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {AVAILABLE_COUPONS.map((coupon) => (
              <div
                key={coupon.code}
                className="bg-surface-container-lowest p-5 rounded-2xl border border-neutral-200/80 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm font-extrabold text-primary bg-primary-fixed/50 px-2.5 py-1 rounded-lg">
                      {coupon.code}
                    </span>
                    <span className="text-[11px] font-bold text-secondary">
                      {coupon.discount ? `₹${coupon.discount} OFF` : `${coupon.discountPercent}% OFF`}
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-2">{coupon.label}</p>
                </div>

                <div className="pt-4 border-t border-neutral-100 mt-4 flex items-center justify-between">
                  <span className="text-[10px] text-outline">Min. cart: ₹{coupon.minAmount || 0}</span>
                  <button
                    onClick={() => handleCopy(coupon.code)}
                    className="text-xs font-bold text-primary hover:underline"
                  >
                    {copiedCode === coupon.code ? 'Applied!' : 'Apply Code'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
