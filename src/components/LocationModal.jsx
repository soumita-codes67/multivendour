import React from 'react';
import { useApp } from '../context/AppContext';
import { BENGALURU_LOCATIONS } from '../data/mockData';

export default function LocationModal() {
  const { isLocationModalOpen, setIsLocationModalOpen, selectedLocation, setSelectedLocation } = useApp();

  if (!isLocationModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-surface-container-lowest w-full max-w-md rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-neutral-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-xl">location_city</span>
            <div>
              <h3 className="font-bold text-base text-primary">Select Bengaluru Neighborhood</h3>
              <p className="text-xs text-on-surface-variant">Guaranteed arrival times tuned for your locality</p>
            </div>
          </div>
          <button
            onClick={() => setIsLocationModalOpen(false)}
            className="p-1 rounded-full text-outline hover:text-on-surface hover:bg-surface-container"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Locality list */}
        <div className="p-4 space-y-2 max-h-96 overflow-y-auto">
          {BENGALURU_LOCATIONS.map((loc) => {
            const isSelected = selectedLocation.id === loc.id;
            return (
              <button
                key={loc.id}
                onClick={() => {
                  setSelectedLocation(loc);
                  setIsLocationModalOpen(false);
                }}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'border-primary bg-primary-fixed/30 ring-1 ring-primary'
                    : 'border-neutral-200/80 hover:border-neutral-300 hover:bg-surface-container-low'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`material-symbols-outlined text-xl ${isSelected ? 'text-primary' : 'text-outline'}`}>
                    location_on
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-on-surface">{loc.name}</h4>
                    <p className="text-xs text-on-surface-variant">{loc.subtext}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                    {loc.activePros} Pros Active
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-surface-container-low border-t border-neutral-100 flex items-center justify-between text-xs text-on-surface-variant">
          <span>Expanding to North Bengaluru soon!</span>
          <span className="font-semibold text-primary">Fixzo Hyperlocal Network</span>
        </div>
      </div>
    </div>
  );
}
