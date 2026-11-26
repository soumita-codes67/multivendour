import React from 'react';
import { useApp } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import LocationModal from './components/LocationModal';
import AIHelpdeskModal from './components/AIHelpdeskModal';
import ServicesDirectory from './pages/ServicesDirectory';
import ProProfileBooking from './pages/ProProfileBooking';
import InstantCheckout from './pages/InstantCheckout';
import SlotConfirmation from './pages/SlotConfirmation';
import PartnerOnboarding from './pages/PartnerOnboarding';
import MyBookings from './pages/MyBookings';
import WalletOffers from './pages/WalletOffers';
import Login from './pages/Login';
export default function App() {
  const { currentPage } = useApp();

  return (
    <div className="min-h-screen bg-surface flex flex-col font-sans text-on-surface selection:bg-primary-fixed selection:text-primary">
      {/* Fixed Header */}
      <Header />

      {/* Main Content Area (padding-top accounts for fixed 116px header) */}
      <main className="flex-1 w-full pt-[116px] min-h-[calc(100vh-116px)]">
        {currentPage === 'directory' && <ServicesDirectory />}
        {currentPage === 'login' && <Login />}
        {currentPage === 'profile' && <ProProfileBooking />}
        {currentPage === 'checkout' && <InstantCheckout />}
        {currentPage === 'confirmation' && <SlotConfirmation />}
        {currentPage === 'partner' && <PartnerOnboarding />}
        {currentPage === 'my-bookings' && <MyBookings />}
        {currentPage === 'wallet' && <WalletOffers />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <LocationModal />
      <AIHelpdeskModal />
    </div>
  );
}
