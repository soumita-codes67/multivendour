import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SERVICES } from '../data/mockData';

export default function AIHelpdeskModal() {
  const { isAiHelpdeskOpen, setIsAiHelpdeskOpen, handleSelectService, setCurrentPage } = useApp();
  const [selectedIssue, setSelectedIssue] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [diagnosis, setDiagnosis] = useState(null);

  if (!isAiHelpdeskOpen) return null;

  const COMMON_ISSUES = [
    { id: 'water-leak', text: 'Water dripping from kitchen tap or bathroom pipe', category: 'plumbing', serviceId: 'srv-7' },
    { id: 'ac-cooling', text: 'AC is blowing warm air and making mild buzzing noise', category: 'appliances', serviceId: 'srv-8' },
    { id: 'mcb-trip', text: 'Power tripped in half the house and switchboard sparked', category: 'electrical', serviceId: 'srv-5' },
    { id: 'deep-clean', text: 'Moving into a new rental flat, needs full dust & grout sanitizing', category: 'cleaning', serviceId: 'srv-1' },
  ];

  const handleDiagnose = (issue) => {
    setSelectedIssue(issue.text);
    setAnalyzing(true);
    setDiagnosis(null);

    setTimeout(() => {
      setAnalyzing(false);
      const matchedService = SERVICES.find(s => s.id === issue.serviceId) || SERVICES[0];
      setDiagnosis({
        issue: issue.text,
        urgency: issue.category === 'electrical' ? 'High Emergency (Within 30 mins)' : 'Standard Dispatch (~25 mins)',
        safetyTip: issue.category === 'electrical' 
          ? '⚠️ Do not touch the switchboard with wet hands. Please switch off the main MCB if sparking continues.'
          : '💡 Turn off the isolation valve below the fixture to minimize water wastage while pro arrives.',
        recommendation: matchedService,
        estimatedCost: `₹${matchedService.price}`,
        rationale: `Fixzo AI verified that ${matchedService.name} addresses this fault directly with genuine tools and parts.`
      });
    }, 1200);
  };

  const handleBookNow = (service) => {
    handleSelectService(service);
    setIsAiHelpdeskOpen(false);
    setCurrentPage('profile');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-surface-container-lowest w-full max-w-lg rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-primary to-primary-container text-on-primary flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-primary-fixed">
              <span className="material-symbols-outlined text-2xl animate-pulse">smart_toy</span>
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Fixzo AI Diagnostic Helpdesk</h3>
              <p className="text-xs text-primary-fixed-dim">Instant automated home issue troubleshooting & dispatch</p>
            </div>
          </div>
          <button
            onClick={() => setIsAiHelpdeskOpen(false)}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-5 overflow-y-auto space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">
              Select or describe what happened in your home:
            </label>
            <div className="space-y-2">
              {COMMON_ISSUES.map(issue => (
                <button
                  key={issue.id}
                  onClick={() => handleDiagnose(issue)}
                  className={`w-full text-left p-3 rounded-xl border text-xs font-medium transition-all flex items-center justify-between gap-2 ${
                    selectedIssue === issue.text
                      ? 'border-primary bg-primary-fixed/20 text-primary font-bold'
                      : 'border-neutral-200 hover:border-neutral-300 hover:bg-surface-container-low text-on-surface'
                  }`}
                >
                  <span>{issue.text}</span>
                  <span className="material-symbols-outlined text-sm text-outline">arrow_forward</span>
                </button>
              ))}
            </div>
          </div>

          {/* Analyzing state */}
          {analyzing && (
            <div className="p-6 rounded-xl bg-surface-container-low flex flex-col items-center justify-center gap-3 text-center">
              <div className="w-8 h-8 rounded-full border-3 border-primary border-t-transparent animate-spin"></div>
              <p className="text-xs font-semibold text-primary">Analyzing symptoms and finding nearest certified Kolkata pro...</p>
            </div>
          )}

          {/* Diagnosis result */}
          {diagnosis && (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-4 space-y-3 animate-in fade-in slide-in-from-bottom-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                  AI Diagnosis Complete
                </span>
                <span className="text-xs font-bold text-secondary">{diagnosis.urgency}</span>
              </div>

              <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200/80 text-xs text-amber-900 leading-relaxed">
                {diagnosis.safetyTip}
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-neutral-200 shadow-xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    alt={diagnosis.recommendation.name}
                    src={diagnosis.recommendation.image}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-on-surface">{diagnosis.recommendation.name}</h4>
                    <p className="text-xs text-on-surface-variant">Standard Rate: <span className="font-bold text-primary">{diagnosis.estimatedCost}</span></p>
                  </div>
                </div>

                <button
                  onClick={() => handleBookNow(diagnosis.recommendation)}
                  className="px-4 py-2 rounded-xl bg-primary text-on-primary font-bold text-xs hover:bg-primary-container transition-colors shadow-sm shrink-0"
                >
                  Book Pro Now &rarr;
                </button>
              </div>

              <p className="text-[11px] text-on-surface-variant italic">
                {diagnosis.rationale}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
