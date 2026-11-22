import React, { createContext, useContext, useState } from 'react';
import { SERVICES, PROS, BENGALURU_LOCATIONS, SAMPLE_BOOKINGS } from '../data/mockData';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Navigation: 'directory' | 'profile' | 'checkout' | 'confirmation' | 'my-bookings' | 'wallet' | 'partner'
  const [currentPage, setCurrentPage] = useState('directory');

  // Selected Location
  const [selectedLocation, setSelectedLocation] = useState(BENGALURU_LOCATIONS[0]);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  // Selected Service & Pro Flow
  const [selectedService, setSelectedService] = useState(SERVICES[0]);
  const [selectedPro, setSelectedPro] = useState(PROS['priya-sundaram']);
  const [selectedPackage, setSelectedPackage] = useState(SERVICES[0].packages[2]); // 3 BHK default

  // Booking Specs
  const [selectedDate, setSelectedDate] = useState('Today, Nov 22');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('11:30 AM');
  const [dispatchMode, setDispatchMode] = useState('instant'); // 'instant' (~25 mins) | 'scheduled'

  // Service Address
  const [serviceAddress, setServiceAddress] = useState({
    house: 'Flat 402, Orchid Heights',
    street: '12th Main, 100ft Road',
    locality: 'Indiranagar, Bengaluru - 560038',
    landmark: 'Near Toit Brewpub',
    phone: '+91 98765 43210'
  });

  // Coupons & Pricing
  const [appliedCoupon, setAppliedCoupon] = useState('FIRSTFIX');
  const [walletBalance, setWalletBalance] = useState(450);
  const [useWalletBalance, setUseWalletBalance] = useState(false);

  // Active Live Booking
  const [activeBookings, setActiveBookings] = useState(SAMPLE_BOOKINGS);
  const [currentBooking, setCurrentBooking] = useState(SAMPLE_BOOKINGS[0]);

  // AI Diagnostic Helpdesk Modal
  const [isAiHelpdeskOpen, setIsAiHelpdeskOpen] = useState(false);

  // Notifications
  const [notificationCount, setNotificationCount] = useState(1);

  // Select service helper
  const handleSelectService = (service) => {
    setSelectedService(service);
    if (service.packages && service.packages.length > 0) {
      // Pick popular or first package
      const popular = service.packages.find(p => p.popular) || service.packages[0];
      setSelectedPackage(popular);
    }
    const proKey = service.assignedPro || 'priya-sundaram';
    setSelectedPro(PROS[proKey] || PROS['priya-sundaram']);
  };

  // Price calculations
  const basePrice = selectedPackage ? selectedPackage.price : selectedService.price;
  const safetyFee = 49;
  const primeDiscount = 100;
  const couponDiscount = appliedCoupon === 'FIRSTFIX' ? 150 : appliedCoupon === 'FESTIVE300' ? 300 : 0;
  const walletDeduction = useWalletBalance ? Math.min(walletBalance, 100) : 0;
  const totalPayable = Math.max(0, basePrice + safetyFee - primeDiscount - couponDiscount - walletDeduction);
  
  // 40% Refundable Advance split
  const advancePayable = Math.round(totalPayable * 0.40);
  const balanceOnCompletion = totalPayable - advancePayable;

  // Confirm booking
  const confirmBooking = (paymentMethod) => {
    const newBookingId = `FXZ-${Math.floor(10000 + Math.random() * 90000)}`;
    const newBooking = {
      id: newBookingId,
      serviceName: `${selectedService.name} (${selectedPackage?.name || 'Standard'})`,
      serviceCategory: selectedService.category,
      proName: selectedPro.name,
      proAvatar: selectedPro.checkoutAvatar || selectedPro.avatar,
      status: 'en_route',
      statusLabel: 'Technician En Route',
      eta: dispatchMode === 'instant' ? '22 mins' : `${selectedDate} at ${selectedTimeSlot}`,
      slotTime: `${selectedDate}, ${selectedTimeSlot}`,
      address: `${serviceAddress.house}, ${serviceAddress.street}, ${serviceAddress.locality}`,
      amount: totalPayable,
      advancePaid: advancePayable,
      balanceDue: balanceOnCompletion,
      paymentMethod,
      otp: `${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toISOString()
    };

    setActiveBookings([newBooking, ...activeBookings]);
    setCurrentBooking(newBooking);
    setCurrentPage('confirmation');
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        selectedLocation,
        setSelectedLocation,
        isLocationModalOpen,
        setIsLocationModalOpen,
        selectedService,
        setSelectedService,
        handleSelectService,
        selectedPro,
        setSelectedPro,
        selectedPackage,
        setSelectedPackage,
        selectedDate,
        setSelectedDate,
        selectedTimeSlot,
        setSelectedTimeSlot,
        dispatchMode,
        setDispatchMode,
        serviceAddress,
        setServiceAddress,
        appliedCoupon,
        setAppliedCoupon,
        walletBalance,
        useWalletBalance,
        setUseWalletBalance,
        activeBookings,
        currentBooking,
        confirmBooking,
        basePrice,
        safetyFee,
        primeDiscount,
        couponDiscount,
        walletDeduction,
        totalPayable,
        advancePayable,
        balanceOnCompletion,
        isAiHelpdeskOpen,
        setIsAiHelpdeskOpen,
        notificationCount,
        setNotificationCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
