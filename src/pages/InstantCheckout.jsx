import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { AVAILABLE_COUPONS } from '../data/mockData';

export default function InstantCheckout() {
  const {
    selectedService,
    selectedPro,
    selectedPackage,
    selectedDate,
    selectedTimeSlot,
    serviceAddress,
    setServiceAddress,
    basePrice,
    safetyFee,
    primeDiscount,
    couponDiscount,
    appliedCoupon,
    setAppliedCoupon,
    walletBalance,
    useWalletBalance,
    setUseWalletBalance,
    walletDeduction,
    totalPayable,
    advancePayable,
    balanceOnCompletion,
    confirmBooking,
    setCurrentPage
  } = useApp();

  const [paymentMethod, setPaymentMethod] = useState('upi'); // 'upi' | 'card' | 'wallet' | 'cash'
  const [upiOption, setUpiOption] = useState('gpay'); // 'gpay' | 'phonepe' | 'paytm' | 'id'
  const [customUpiId, setCustomUpiId] = useState('');
  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Address edit state
  const [tempAddress, setTempAddress] = useState({ ...serviceAddress });

  const handleApplyCoupon = (code) => {
    const coupon = AVAILABLE_COUPONS.find(c => c.code === code.toUpperCase());
    if (coupon) {
      setAppliedCoupon(coupon.code);
      setCouponError('');
      setCouponInput('');
    } else {
      setCouponError('Invalid coupon code. Try FIRSTFIX or FESTIVE300');
    }
  };

const handlePayAndConfirm = async () => {
  setIsProcessing(true);
  await confirmBooking(paymentMethod);
  setIsProcessing(false);
};

  return (
    <div className="w-full">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        
        {/* Sleek 3-Step Progress Tracker */}
        <div className="w-full mb-10">
          <div className="max-w-2xl mx-auto bg-surface-container-lowest border border-neutral-200/80 shadow-2xs rounded-2xl p-3 sm:px-6 sm:py-4">
            <div className="flex items-center justify-between relative">
              {/* Progress Line Track */}
              <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-1 bg-surface-container rounded-full -z-0">
                <div className="h-full bg-gradient-to-r from-primary-container via-primary-container to-secondary rounded-full w-full transition-all duration-500"></div>
              </div>

              {/* Step 1: Completed */}
              <div
                onClick={() => setCurrentPage('directory')}
                className="relative z-10 flex items-center gap-2.5 bg-surface-container-lowest px-2 py-1 rounded-full cursor-pointer hover:opacity-80"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-xs ring-4 ring-surface-container-lowest">
                  <span className="material-symbols-outlined text-sm sm:text-base font-bold">check</span>
                </div>
                <div className="hidden sm:flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-primary leading-none">Step 1</span>
                  <span className="text-xs font-semibold text-on-surface">Service</span>
                </div>
              </div>

              {/* Step 2: Completed */}
              <div
                onClick={() => setCurrentPage('profile')}
                className="relative z-10 flex items-center gap-2.5 bg-surface-container-lowest px-2 py-1 rounded-full cursor-pointer hover:opacity-80"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-xs ring-4 ring-surface-container-lowest">
                  <span className="material-symbols-outlined text-sm sm:text-base font-bold">check</span>
                </div>
                <div className="hidden sm:flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-primary leading-none">Step 2</span>
                  <span className="text-xs font-semibold text-on-surface">Schedule</span>
                </div>
              </div>

              {/* Step 3: Active Payment */}
              <div className="relative z-10 flex items-center gap-2.5 bg-secondary-fixed/50 px-3 py-1.5 rounded-full ring-2 ring-secondary/30 shadow-xs">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-xs shadow-sm ring-2 ring-surface-container-lowest">
                  3
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-extrabold tracking-wider text-secondary leading-none">Final Step</span>
                  <span className="text-xs font-bold text-secondary">Payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header Section with Escrow Trust Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-3 border-b border-neutral-200/80">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-headline-xl text-2xl sm:text-3xl text-primary font-extrabold tracking-tight">
                Confirm & Book
              </h1>
              <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-bold text-[11px] tracking-wide uppercase">
                Safe Slot
              </span>
            </div>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
              Review slot details and authorize the refundable 40% domestic advance.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/60 text-emerald-900 px-3.5 py-1.5 rounded-xl shadow-xs self-start sm:self-auto">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
            <span className="material-symbols-outlined text-emerald-700 text-base">verified_user</span>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 leading-tight">
                Escrow Protected
              </span>
              <span className="text-xs font-semibold text-emerald-950 leading-tight">
                256-Bit SSL Encrypted
              </span>
            </div>
          </div>
        </div>

        {/* Main Two-Column Layout (7 cols Left / 5 cols Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Order Details & Price Transparency (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Order Card */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-7 border border-neutral-200/80 shadow-xs">
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-neutral-100">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 bg-primary/10 text-primary font-bold text-[11px] rounded-md uppercase tracking-wider">
                      {selectedService.category}
                    </span>
                    <span className="text-on-surface-variant text-xs font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
                      {selectedPackage?.name || 'Standard Service'}
                    </span>
                  </div>
                  <h2 className="font-headline-md text-xl sm:text-2xl font-bold text-on-surface tracking-tight">
                    {selectedService.name}
                  </h2>
                  <p className="text-xs text-on-surface-variant mt-1">
                    {selectedService.description}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-primary-fixed/60 border border-primary-fixed flex items-center justify-center text-primary shrink-0 shadow-inner">
                  <span className="material-symbols-outlined text-2xl">sanitizer</span>
                </div>
              </div>

              {/* Assigned Specialist Row */}
              <div className="mt-5 bg-surface-container-low rounded-xl p-3.5 sm:p-4 border border-neutral-200/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="relative">
                    <img
                      alt={selectedPro.name}
                      src={selectedPro.checkoutAvatar || selectedPro.avatar}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-500/30 shadow-xs"
                    />
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white"></span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-on-surface">{selectedPro.name}</span>
                      <span className="material-symbols-outlined text-primary text-base" title="Aadhaar Verified">verified</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-on-surface-variant mt-0.5">
                      <span className="flex items-center text-amber-600 font-semibold text-xs">
                        ★ {selectedPro.rating}
                      </span>
                      <span>({selectedPro.cleansCount})</span>
                      <span>•</span>
                      <span className="text-emerald-700 font-medium">{selectedPro.onTimeRate} On-Time</span>
                    </div>
                  </div>
                </div>

                <span className="px-2.5 py-1 bg-surface-container-lowest rounded-full text-xs font-semibold text-primary border border-neutral-200/70">
                  Assigned Pro
                </span>
              </div>

              {/* Schedule & Address Row */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-surface-container-low text-primary shrink-0">
                    <span className="material-symbols-outlined text-lg">calendar_today</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider block">
                      Arrival Slot
                    </span>
                    <span className="text-xs font-bold text-on-surface block mt-0.5">
                      {selectedDate}
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      {selectedTimeSlot} • ~{selectedService.duration}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-surface-container-low text-primary shrink-0">
                    <span className="material-symbols-outlined text-lg">location_on</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider block">
                        Service Address
                      </span>
                      <button
                        onClick={() => setIsEditingAddress(!isEditingAddress)}
                        className="text-[11px] text-primary font-bold hover:underline"
                      >
                        {isEditingAddress ? 'Done' : 'Edit'}
                      </button>
                    </div>

                    {!isEditingAddress ? (
                      <>
                        <span className="text-xs font-bold text-on-surface block mt-0.5">
                          {serviceAddress.house}, {serviceAddress.street}
                        </span>
                        <span className="text-xs text-on-surface-variant">
                          {serviceAddress.locality}
                        </span>
                      </>
                    ) : (
                      <div className="space-y-1.5 mt-2">
                        <input
                          type="text"
                          value={tempAddress.house}
                          onChange={(e) => setTempAddress({ ...tempAddress, house: e.target.value })}
                          className="w-full text-xs p-1.5 rounded-lg border border-neutral-200"
                          placeholder="House/Flat No."
                        />
                        <input
                          type="text"
                          value={tempAddress.street}
                          onChange={(e) => setTempAddress({ ...tempAddress, street: e.target.value })}
                          className="w-full text-xs p-1.5 rounded-lg border border-neutral-200"
                          placeholder="Street"
                        />
                        <button
                          onClick={() => {
                            setServiceAddress(tempAddress);
                            setIsEditingAddress(false);
                          }}
                          className="px-2.5 py-1 bg-primary text-white text-[11px] rounded-md font-semibold"
                        >
                          Save Address
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Price Transparency & 40% Advance Split Card */}
              <div className="mt-6 pt-5 border-t border-neutral-100 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                  Payment Split & Transparency
                </h4>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between text-on-surface-variant">
                    <span>Base Service Rate ({selectedPackage?.name || 'Standard'})</span>
                    <span className="font-semibold text-on-surface">₹{basePrice}</span>
                  </div>
                  <div className="flex items-center justify-between text-on-surface-variant">
                    <span>Safety, Insurance & Sanitation Gear</span>
                    <span className="font-semibold text-on-surface">₹{safetyFee}</span>
                  </div>
                  <div className="flex items-center justify-between text-emerald-700">
                    <span>Fixzo Prime Benefit</span>
                    <span>-₹{primeDiscount}</span>
                  </div>
                  {couponDiscount > 0 && (
                    <div className="flex items-center justify-between text-emerald-700">
                      <span>Coupon Applied ({appliedCoupon})</span>
                      <span>-₹{couponDiscount}</span>
                    </div>
                  )}
                  {walletDeduction > 0 && (
                    <div className="flex items-center justify-between text-emerald-700">
                      <span>Fixzo Wallet Credits</span>
                      <span>-₹{walletDeduction}</span>
                    </div>
                  )}

                  <div className="flex items-baseline justify-between pt-2 border-t border-neutral-100 font-bold text-sm text-primary">
                    <span>Total Service Amount</span>
                    <span className="text-xl">₹{totalPayable}</span>
                  </div>
                </div>

                {/* Highlighted 40% Advance vs 60% Completion */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-amber-950 uppercase tracking-wide">
                      Authorize 40% Domestic Advance:
                    </span>
                    <span className="text-base font-extrabold text-secondary">
                      ₹{advancePayable}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-amber-900">
                    <span>Balance 60% payable post-inspection:</span>
                    <span className="font-bold">₹{balanceOnCompletion}</span>
                  </div>

                  <p className="text-[11px] text-amber-800 leading-tight pt-1">
                    🔒 Held securely in escrow. Transferred to provider only after your 100% sign-off.
                  </p>
                </div>

                {/* Free cancellation notice */}
                <div className="flex items-center gap-2 text-xs text-on-surface-variant bg-surface-container-low p-2.5 rounded-xl">
                  <span className="material-symbols-outlined text-sm text-primary">check_circle</span>
                  <span>100% Free cancellation or reschedule up to 2 hours before arrival window.</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Payment Authorization & Methods (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-7 border border-neutral-200/80 shadow-xs space-y-6">
              
              <div>
                <h3 className="font-headline-md text-lg text-primary font-bold tracking-tight">
                  Select Payment Method
                </h3>
                <p className="text-xs text-on-surface-variant mt-0.5">
                  Only <strong>₹{advancePayable}</strong> advance will be authorized now.
                </p>
              </div>

              {/* Payment Tabs */}
              <div className="space-y-3">
                
                {/* UPI Option */}
                <div
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === 'upi'
                      ? 'border-primary bg-primary-fixed/20 ring-1 ring-primary'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-xl">qr_code_2</span>
                      <div>
                        <span className="text-xs font-bold text-on-surface block">UPI (Fast & Direct)</span>
                        <span className="text-[11px] text-on-surface-variant">Google Pay, PhonePe, Paytm, BHIM</span>
                      </div>
                    </div>
                    <span className="w-4 h-4 rounded-full border-2 border-primary flex items-center justify-center">
                      {paymentMethod === 'upi' && <span className="w-2 h-2 rounded-full bg-primary"></span>}
                    </span>
                  </div>

                  {/* UPI sub-options */}
                  {paymentMethod === 'upi' && (
                    <div className="mt-3 pt-3 border-t border-neutral-200/60 space-y-2">
                      <div className="grid grid-cols-3 gap-2">
                        {['gpay', 'phonepe', 'paytm'].map(app => (
                          <button
                            key={app}
                            onClick={() => setUpiOption(app)}
                            className={`py-2 px-2 rounded-lg text-xs font-semibold border capitalize transition-all ${
                              upiOption === app
                                ? 'bg-primary text-white border-primary'
                                : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
                            }`}
                          >
                            {app}
                          </button>
                        ))}
                      </div>

                      <div className="pt-1">
                        <input
                          type="text"
                          value={customUpiId}
                          onChange={(e) => { setCustomUpiId(e.target.value); setUpiOption('id'); }}
                          placeholder="Or enter UPI ID (e.g. name@okhdfcbank)"
                          className="w-full text-xs p-2.5 rounded-lg border border-neutral-200 bg-white"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Credit / Debit Card Option */}
                <div
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === 'card'
                      ? 'border-primary bg-primary-fixed/20 ring-1 ring-primary'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-xl">credit_card</span>
                      <div>
                        <span className="text-xs font-bold text-on-surface block">Credit / Debit Card</span>
                        <span className="text-[11px] text-on-surface-variant">Visa, Mastercard, RuPay</span>
                      </div>
                    </div>
                    <span className="w-4 h-4 rounded-full border-2 border-primary flex items-center justify-center">
                      {paymentMethod === 'card' && <span className="w-2 h-2 rounded-full bg-primary"></span>}
                    </span>
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="mt-3 pt-3 border-t border-neutral-200/60 space-y-2">
                      <input
                        type="text"
                        placeholder="Card Number (•••• •••• •••• ••••)"
                        defaultValue="4111 2222 3333 4444"
                        className="w-full text-xs p-2.5 rounded-lg border border-neutral-200 bg-white font-mono"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          placeholder="MM/YY"
                          defaultValue="08/28"
                          className="text-xs p-2.5 rounded-lg border border-neutral-200 bg-white"
                        />
                        <input
                          type="password"
                          placeholder="CVV"
                          defaultValue="123"
                          className="text-xs p-2.5 rounded-lg border border-neutral-200 bg-white"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Fixzo Wallet */}
                <div
                  onClick={() => setPaymentMethod('wallet')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === 'wallet'
                      ? 'border-primary bg-primary-fixed/20 ring-1 ring-primary'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-xl">account_balance_wallet</span>
                      <div>
                        <span className="text-xs font-bold text-on-surface block">Fixzo Wallet Credits</span>
                        <span className="text-[11px] text-emerald-800 font-semibold">Available Balance: ₹{walletBalance}</span>
                      </div>
                    </div>
                    <span className="w-4 h-4 rounded-full border-2 border-primary flex items-center justify-center">
                      {paymentMethod === 'wallet' && <span className="w-2 h-2 rounded-full bg-primary"></span>}
                    </span>
                  </div>
                </div>

                {/* Cash on Completion */}
                <div
                  onClick={() => setPaymentMethod('cash')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === 'cash'
                      ? 'border-primary bg-primary-fixed/20 ring-1 ring-primary'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-xl">payments</span>
                      <div>
                        <span className="text-xs font-bold text-on-surface block">Pay After Service (Zero Advance)</span>
                        <span className="text-[11px] text-on-surface-variant">Pay full amount post satisfactory completion</span>
                      </div>
                    </div>
                    <span className="w-4 h-4 rounded-full border-2 border-primary flex items-center justify-center">
                      {paymentMethod === 'cash' && <span className="w-2 h-2 rounded-full bg-primary"></span>}
                    </span>
                  </div>
                </div>
              </div>

              {/* Coupon Code Section */}
              <div className="pt-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1.5">
                  Promotional Coupon
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder="e.g. FIRSTFIX or FESTIVE300"
                    className="flex-1 text-xs p-2.5 rounded-xl border border-neutral-200 bg-surface-container-low uppercase font-semibold"
                  />
                  <button
                    onClick={() => handleApplyCoupon(couponInput)}
                    className="px-4 py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-container transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {appliedCoupon && (
                  <p className="text-[11px] text-emerald-700 font-semibold mt-1">
                    ✓ Coupon {appliedCoupon} applied successfully!
                  </p>
                )}
                {couponError && (
                  <p className="text-[11px] text-red-600 font-medium mt-1">
                    {couponError}
                  </p>
                )}
              </div>

              {/* CTA Authorize Button */}
              <div className="pt-2">
                <button
                  disabled={isProcessing}
                  onClick={handlePayAndConfirm}
                  className="w-full py-4 px-6 rounded-xl bg-secondary hover:bg-secondary/90 text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                      <span>Authorizing Secure Escrow...</span>
                    </div>
                  ) : (
                    <>
                      <span>
                        {paymentMethod === 'cash'
                          ? 'Confirm Slot (Pay ₹' + totalPayable + ' After Service)'
                          : 'Authorize ₹' + advancePayable + ' Advance & Confirm'}
                      </span>
                      <span className="material-symbols-outlined text-lg">lock</span>
                    </>
                  )}
                </button>
                <p className="text-center text-[10px] text-outline mt-2">
                  By confirming, you agree to Fixzo's Domestic Terms & 30-Day Guarantee.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
