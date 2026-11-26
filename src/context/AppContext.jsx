
import React, { createContext, useContext, useState, useEffect } from 'react';
import { SERVICES, PROS, KOLKATA_LOCATIONS, SAMPLE_BOOKINGS } from '../data/mockData';

const AppContext = createContext();
const API_URL = 'http://localhost:5000/api';

export function AppProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('directory');

  const [currentUser, setCurrentUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('fixzoUser')) || null;
    } catch {
      return null;
    }
  });

  // Backend currently returns the ID as "id", not "_id".
  const currentUserId = currentUser?._id || currentUser?.id || null;

  const [selectedLocation, setSelectedLocation] = useState(KOLKATA_LOCATIONS[0]);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  const [selectedService, setSelectedService] = useState(SERVICES[0]);
  const [services, setServices] = useState(SERVICES);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await fetch(`${API_URL}/services`);
        const data = await response.json();

        if (data.success) {
          const updatedServices = SERVICES.map((mockService) => {
            const databaseService = data.services.find(
              (service) => service.name === mockService.name
            );

            return databaseService
              ? { ...mockService, ...databaseService, id: mockService.id }
              : mockService;
          });

          setServices(updatedServices);
        }
      } catch (error) {
        console.error('Could not load services:', error);
      }
    };

    loadServices();
  }, []);

  const [selectedPro, setSelectedPro] = useState(PROS['priya-sundaram']);
  const [selectedPackage, setSelectedPackage] = useState(SERVICES[0].packages[2]);

  const [selectedDate, setSelectedDate] = useState('Today, Nov 22');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('11:30 AM');
  const [dispatchMode, setDispatchMode] = useState('instant');

  const [serviceAddress, setServiceAddress] = useState({
    house: 'Flat 402, Orchid Heights',
    street: '12th Main, 100ft Road',
    locality: 'Indiranagar, Kolkata - 560038',
    landmark: 'Near Toit Brewpub',
    phone: '+91 98765 43210'
  });

  const [appliedCoupon, setAppliedCoupon] = useState('FIRSTFIX');
  const [walletBalance, setWalletBalance] = useState(450);
  const [useWalletBalance, setUseWalletBalance] = useState(false);

  const [activeBookings, setActiveBookings] = useState(SAMPLE_BOOKINGS);
  const [currentBooking, setCurrentBooking] = useState(SAMPLE_BOOKINGS[0]);

  useEffect(() => {
    const loadBookings = async () => {
      if (!currentUserId) {
        setActiveBookings([]);
        setCurrentBooking(null);
        return;
      }

      try {
        const response = await fetch(`${API_URL}/bookings`);
        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.message || 'Could not load bookings.');
        }

        const userBookings = data.bookings.filter((booking) => {
          const bookingCustomerId =
            booking.customer?._id || booking.customer?.id || booking.customer;

          return String(bookingCustomerId) === String(currentUserId);
        });

        const bookings = userBookings.map((booking) => ({
          id: booking._id,
          serviceName: booking.service?.name || 'Service',
          proName: booking.provider?.name || 'Not assigned',
          proAvatar: '',
          status: booking.status,
          statusLabel: booking.status,
          slotTime: booking.timeSlot,
          address: booking.address,
          amount: booking.totalAmount,
          advancePaid: Math.round(booking.totalAmount * 0.4),
          balanceDue: booking.totalAmount - Math.round(booking.totalAmount * 0.4),
          createdAt: booking.createdAt
        }));

        setActiveBookings(bookings);
        setCurrentBooking(bookings.length > 0 ? bookings[0] : null);
      } catch (error) {
        console.error('Could not load bookings:', error);
      }
    };

    loadBookings();
  }, [currentUserId]);

  const [isAiHelpdeskOpen, setIsAiHelpdeskOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(1);

  const handleSelectService = (service) => {
    setSelectedService(service);

    if (service.packages?.length > 0) {
      const popular = service.packages.find(p => p.popular) || service.packages[0];
      setSelectedPackage(popular);
    }

    const proKey = service.assignedPro || 'priya-sundaram';
    setSelectedPro(PROS[proKey] || PROS['priya-sundaram']);
  };

  const basePrice = selectedPackage ? selectedPackage.price : selectedService.price;
  const safetyFee = 49;
  const primeDiscount = 100;

  const couponDiscount =
    appliedCoupon === 'FIRSTFIX' ? 150 :
    appliedCoupon === 'FESTIVE300' ? 300 : 0;

  const walletDeduction = useWalletBalance ? Math.min(walletBalance, 100) : 0;

  const totalPayable = Math.max(
    0,
    basePrice + safetyFee - primeDiscount - couponDiscount - walletDeduction
  );

  const advancePayable = Math.round(totalPayable * 0.40);
  const balanceOnCompletion = totalPayable - advancePayable;

  const confirmBooking = async (paymentMethod) => {
    try {
      if (!currentUserId) {
        throw new Error('Please log in again before booking.');
      }

      const servicesResponse = await fetch(`${API_URL}/services`);
      const servicesData = await servicesResponse.json();

      if (!servicesResponse.ok || !servicesData.success) {
        throw new Error('Could not load services from the backend.');
      }

      let databaseService = servicesData.services.find(
        service => service.name === selectedService.name
      );

      if (!databaseService) {
        const createServiceResponse = await fetch(`${API_URL}/services`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: selectedService.name,
            category: selectedService.category,
            description: selectedService.description,
            price: selectedService.price,
            duration: selectedService.duration,
            image: selectedService.image,
            features: selectedService.features || []
          })
        });

        const createServiceData = await createServiceResponse.json();

        if (!createServiceResponse.ok || !createServiceData.success) {
          throw new Error(createServiceData.message || 'Could not save the service.');
        }

        databaseService = createServiceData.service;
      }

      if (!databaseService?._id) {
        throw new Error('Service ID was not returned by the backend.');
      }

      const address = [
        serviceAddress.house,
        serviceAddress.street,
        serviceAddress.locality
      ].filter(Boolean).join(', ');

      const bookingResponse = await fetch(`${API_URL}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer: currentUserId,
          service: databaseService._id,
          bookingDate: new Date().toISOString(),
          timeSlot: `${selectedDate}, ${selectedTimeSlot}`,
          address,
          totalAmount: totalPayable
        })
      });

      const bookingData = await bookingResponse.json();

      if (!bookingResponse.ok || !bookingData.success) {
        throw new Error(bookingData.message || 'Could not save the booking.');
      }

      const savedBooking = bookingData.booking;

      const newBooking = {
        id: savedBooking._id,
        serviceName: `${selectedService.name} (${selectedPackage?.name || 'Standard'})`,
        serviceCategory: selectedService.category,
        proName: selectedPro.name,
        proAvatar: selectedPro.checkoutAvatar || selectedPro.avatar,
        status: 'en_route',
        statusLabel: 'Technician En Route (Demo)',
        eta: dispatchMode === 'instant'
          ? '22 mins'
          : `${selectedDate} at ${selectedTimeSlot}`,
        slotTime: `${selectedDate}, ${selectedTimeSlot}`,
        address,
        amount: totalPayable,
        advancePaid: advancePayable,
        balanceDue: balanceOnCompletion,
        paymentMethod,
        otp: `${Math.floor(1000 + Math.random() * 9000)}`,
        createdAt: savedBooking.createdAt || new Date().toISOString()
      };

      setActiveBookings(previous => [newBooking, ...previous]);
      setCurrentBooking(newBooking);
      setCurrentPage('confirmation');

      return true;
    } catch (error) {
      console.error('Booking error:', error);
      alert(`Booking failed: ${error.message}`);
      return false;
    }
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        currentUser,
        setCurrentUser,
        selectedLocation,
        setSelectedLocation,
        isLocationModalOpen,
        setIsLocationModalOpen,
        selectedService,
        setSelectedService,
        services,
        setServices,
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
        setNotificationCount
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
