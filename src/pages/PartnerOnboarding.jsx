
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function PartnerOnboarding() {
  const { setCurrentPage } = useApp();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    trade: 'electrician',
    experience: '3-5',
    zone: 'salt-lake'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const experienceYears = {
      '1-2': 2,
      '3-5': 5,
      '5+': 5
    };

    try {
      const response = await fetch('http://localhost:5000/api/providers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone,
          skills: [formData.trade],
          experience: experienceYears[formData.experience],
          serviceAreas: [formData.zone]
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Could not submit your application.');
      }

      setFormSubmitted(true);
    } catch (error) {
      setErrorMessage(
        error.message || 'Could not connect to the backend. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <section className="w-full bg-surface-container-low/70 border-b border-neutral-200/60 py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-wrap items-center justify-between gap-3 text-xs text-on-surface-variant">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-fixed text-primary">
              <span className="material-symbols-outlined text-[13px]">shield</span>
            </span>
            <span className="font-semibold text-on-surface text-[13px] tracking-tight">Fixzo Partner Program</span>
            <span className="text-neutral-300">•</span>
            <span className="text-[13px]">Dedicated Onboarding Desk: <strong className="text-on-surface font-semibold">+91 98765 43219</strong></span>
          </div>

          <div className="flex items-center gap-3 text-[13px]">
            <span className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-500/20 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              Accepting new applications in Kolkata (All Zones)
            </span>
          </div>
        </div>
      </section>

      <section className="w-full py-10 lg:py-16 relative overflow-hidden bg-gradient-to-b from-surface via-surface-container-lowest/50 to-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2.5 self-start px-3.5 py-1.5 rounded-full bg-primary-fixed/50 border border-primary/10 text-on-primary-fixed text-xs font-medium shadow-sm backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span className="tracking-wide text-[11px] font-semibold uppercase text-primary">Zero Joining Fee</span>
                <span className="text-neutral-300">•</span>
                <span className="text-[11px] font-medium text-emerald-900">100% Retained Tips</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-[52px] text-primary tracking-tight leading-[1.1] font-extrabold">
                  Earn up to <span className="text-secondary bg-secondary-fixed/40 px-2 py-0.5 rounded-lg border border-secondary/15">₹45,000</span>/mo on your own schedule.
                </h1>
                <p className="text-sm sm:text-base text-on-surface-variant max-w-xl leading-relaxed">
                  Join <strong className="text-on-surface font-semibold">8,000+ verified</strong> electricians, plumbers, and home service pros in Kolkata. Transparent orders, guaranteed neighborhood radius, and same-day direct bank deposits.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3.5 sm:gap-4 pt-1">
                <div className="bg-surface-container-lowest border border-neutral-200/80 hover:shadow-md transition-all p-4 rounded-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-8 h-8 rounded-xl bg-primary-fixed/60 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-lg">payments</span>
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60">+18% MoM</span>
                  </div>
                  <span className="block text-xl lg:text-2xl text-primary font-bold tracking-tight">₹1,850+</span>
                  <span className="text-xs text-on-surface-variant font-medium">Avg. Daily Earnings</span>
                </div>

                <div className="bg-surface-container-lowest border border-neutral-200/80 hover:shadow-md transition-all p-4 rounded-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                      <span className="material-symbols-outlined text-lg">near_me</span>
                    </span>
                    <span className="text-[10px] font-semibold text-primary bg-primary-fixed/40 px-1.5 py-0.5 rounded">Local</span>
                  </div>
                  <span className="block text-xl lg:text-2xl text-primary font-bold tracking-tight">3-5 km</span>
                  <span className="text-xs text-on-surface-variant font-medium">Hyper-local Radius</span>
                </div>

                <div className="bg-surface-container-lowest border border-neutral-200/80 hover:shadow-md transition-all p-4 rounded-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-8 h-8 rounded-xl bg-secondary-fixed/50 text-secondary flex items-center justify-center">
                      <span className="material-symbols-outlined text-lg">account_balance</span>
                    </span>
                    <span className="text-[10px] font-semibold text-secondary bg-secondary-fixed/30 px-1.5 py-0.5 rounded">Auto</span>
                  </div>
                  <span className="block text-xl lg:text-2xl text-secondary font-bold tracking-tight">6:00 PM</span>
                  <span className="text-xs text-on-surface-variant font-medium">Daily Direct Payout</span>
                </div>
              </div>

              <div className="relative bg-surface-container-lowest border border-neutral-200/90 p-5 rounded-2xl shadow-sm flex items-start gap-4">
                <div className="relative shrink-0">
                  <img
                    alt="Manjunath Swamy"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQOFViuzh_xCushGBeHh-E_UEPoP_Snzo92mEZ1vBbsGW8zyoWPcqvFkoI-gjz1nOKojUaeDdKF_SuHJyZZ4q9hib_PFJz9rMUbrulc9nOan4teFdspf4_HqO-z3LlvGkMOY8rXq7X9zl7ihJtljaE1uRhGedpsYURq6_mGHKqbucbn7Kn9PgFN8Z8x8d4UPmSgCym0VAP-zQRadW_o4WFhMqtSV2hxAw2peDo3A7M"
                    className="w-14 h-14 rounded-2xl object-cover ring-2 ring-primary-fixed shadow-sm"
                  />
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-primary text-on-primary ring-2 ring-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[12px]">verified</span>
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-bold text-sm text-on-surface">Manjunath Swamy</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-primary-fixed/50 text-primary">★ 4.96 rating</span>
                    <span className="text-xs text-on-surface-variant font-medium">Electrician • Jayanagar</span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    "Completed 420+ bookings this year. Payout hits my Canara Bank account every single evening at 6:00 PM without any deductions or holdbacks."
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl shadow-xl border border-neutral-200/90 relative z-10">

                {!formSubmitted ? (
                  <>
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-1.5">
                        <h2 className="text-xl font-bold text-primary">Partner Fast-Track Sign-Up</h2>
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-secondary-fixed text-on-secondary-fixed">2 Mins Form</span>
                      </div>
                      <p className="text-xs text-on-surface-variant">
                        No fee, no paper lock-in. Verification via simple phone callback.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-on-surface mb-1">Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full text-xs p-3 rounded-xl bg-surface-container-low border border-neutral-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-on-surface mb-1">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="example@email.com"
                          className="w-full text-xs p-3 rounded-xl bg-surface-container-low border border-neutral-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-on-surface mb-1">WhatsApp Mobile Number</label>
                        <div className="flex items-center">
                          <span className="px-3 py-3 bg-surface-container rounded-l-xl border border-r-0 border-neutral-200 text-xs font-bold text-outline">+91</span>
                          <input
                            type="tel"
                            required
                            pattern="[0-9]{10}"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="98765 43210"
                            className="w-full text-xs p-3 rounded-r-xl bg-surface-container-low border border-neutral-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-on-surface mb-1">Primary Skill</label>
                          <select
                            value={formData.trade}
                            onChange={(e) => setFormData({ ...formData, trade: e.target.value })}
                            className="w-full text-xs p-3 rounded-xl bg-surface-container-low border border-neutral-200"
                          >
                            <option value="cleaning">Cleaning Specialist</option>
                            <option value="electrician">Electrician</option>
                            <option value="plumbing">Plumber</option>
                            <option value="ac">AC & Appliance Tech</option>
                            <option value="painting">Painter</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-on-surface mb-1">Experience</label>
                          <select
                            value={formData.experience}
                            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                            className="w-full text-xs p-3 rounded-xl bg-surface-container-low border border-neutral-200"
                          >
                            <option value="1-2">1 - 2 Years</option>
                            <option value="3-5">3 - 5 Years</option>
                            <option value="5+">5+ Years (Master)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-on-surface mb-1">Preferred Working Zone in Kolkata</label>
                        <select
                          value={formData.zone}
                          onChange={(e) => setFormData({ ...formData, zone: e.target.value })}
                          className="w-full text-xs p-3 rounded-xl bg-surface-container-low border border-neutral-200"
                        >
                          <option value="salt-lake">Salt Lake</option>
                          <option value="new-town">New Town</option>
                          <option value="rajarhat">Rajarhat</option>
                          <option value="behala">Behala</option>
                          <option value="ballygunge">Ballygunge</option>
                          <option value="howrah">Howrah</option>
                          <option value="tollygunge">Tollygunge</option>
                        </select>
                      </div>

                      {errorMessage && (
                        <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
                          {errorMessage}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 px-4 rounded-xl bg-secondary hover:bg-secondary/90 disabled:opacity-60 text-white font-bold text-sm transition-all shadow-md mt-2 flex items-center justify-center gap-2"
                      >
                        <span>{loading ? 'Submitting...' : 'Submit Application & Get Call'}</span>
                        {!loading && <span className="material-symbols-outlined text-base">arrow_forward</span>}
                      </button>

                      <p className="text-[11px] text-center text-outline">
                        Fixzo team will verify your details before onboarding.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-sm">
                      <span className="material-symbols-outlined text-3xl font-bold">check_circle</span>
                    </div>

                    <h3 className="text-xl font-bold text-primary">Application Received!</h3>
                    <p className="text-xs text-on-surface-variant max-w-xs mx-auto">
                      Thank you, <strong>{formData.name}</strong>. Your application for <strong>{formData.trade}</strong> in Kolkata has been saved.
                    </p>

                    <div className="p-3 bg-surface-container-low rounded-xl text-xs text-emerald-900 border border-emerald-200/60 text-left">
                      ✓ Your application has been submitted successfully.<br />
                      ✓ Your details are awaiting provider verification.
                    </div>

                    <button
                      onClick={() => setCurrentPage('directory')}
                      className="px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-bold"
                    >
                      Return to Fixzo App
                    </button>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
