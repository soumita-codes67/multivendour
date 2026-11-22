import React from 'react';
import { useApp } from '../context/AppContext';

export default function Footer() {
  const { setCurrentPage } = useApp();

  return (
    <footer className="w-full bg-[#012d1d] text-white pt-16 pb-12 mt-16 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-900/60">
          {/* Brand Dossier */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                alt="Fixzo Logo"
                className="h-9 w-auto brightness-200"
                src="https://lh3.googleusercontent.com/aida/ALJJyrBcYfNekVyTIV5wVwVum4c1Mgg9AHlXPtIe0ezfwGBb4gJMKDa5Q_9ikBL-8egntLswr6Afuf4Xq5pnzNvh2lpe4Nh-7RpKamgCf1Stc2CCV_-r0DbVojGUwqOabWceyHjwXco0KoWVcuX40iVco36d2Z436PIMe7Ug-386QFgYteFB9q3fq3LvXeuI0HPkDoVBsQUr75Kjz_ZD9RZDcw9-Eomd9P5tzNJ26fj5F6O6qg"
              />
              <span className="font-headline-md text-2xl font-extrabold tracking-tight text-white">Fixzo</span>
            </div>
            <p className="text-sm text-neutral-300 max-w-sm leading-relaxed">
              Hyper-local on-demand home services engineered for Bengaluru neighborhoods. Aadhaar-verified technicians, upfront transparent pricing, and 30-day rework satisfaction guarantee.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-700/50 text-xs font-semibold text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Bengaluru Licensed Platform
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-700/50 text-xs font-semibold text-emerald-300">
                ★ 4.9 Rating (48k+ Reviews)
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Services</h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li><button onClick={() => setCurrentPage('directory')} className="hover:text-white transition-colors">Deep Home Cleaning</button></li>
              <li><button onClick={() => setCurrentPage('directory')} className="hover:text-white transition-colors">Electricians & Wiring</button></li>
              <li><button onClick={() => setCurrentPage('directory')} className="hover:text-white transition-colors">Plumbing & Leakages</button></li>
              <li><button onClick={() => setCurrentPage('directory')} className="hover:text-white transition-colors">AC Foam Jet Servicing</button></li>
              <li><button onClick={() => setCurrentPage('directory')} className="hover:text-white transition-colors">Painting & Waterproofing</button></li>
            </ul>
          </div>

          {/* Locations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Neighborhood Hubs</h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>Indiranagar (100ft Rd Hub)</li>
              <li>Koramangala (5th Block Hub)</li>
              <li>HSR Layout (Sector 3 Hub)</li>
              <li>Whitefield (ITPB Hub)</li>
              <li>Jayanagar (4th Block Hub)</li>
              <li>Malleshwaram Hub</li>
            </ul>
          </div>

          {/* Partner & Trust */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Professionals</h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>
                <button
                  onClick={() => setCurrentPage('partner')}
                  className="text-secondary-fixed font-bold hover:underline"
                >
                  Join as Fixzo Partner &rarr;
                </button>
              </li>
              <li>Daily 6:00 PM Direct Payout</li>
              <li>Zero Joining Fee Policy</li>
              <li>Safety & Tool Assistance</li>
              <li>Partner Helpline: +91 98765 43219</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 Fixzo Technologies India Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Trust & Safety Guidelines</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
