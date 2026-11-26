import express from 'express';
import Booking from '../models/Booking.js';
import User from '../models/User.js';
import Service from '../models/Service.js';

const router = express.Router();

// Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate('customer', 'name email')
      .populate('service', 'name price')
      .populate('provider', 'name phone');

    res.json({
      success: true,
      count: bookings.length,
      bookings
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Create a booking
router.post('/', async (req, res) => {
  try {
    const {
      customer,
      service,
      bookingDate,
      timeSlot,
      address,
      totalAmount
    } = req.body;

    if (
      !customer ||
      !service ||
      !bookingDate ||
      !timeSlot ||
      !address ||
      totalAmount === undefined
    ) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required booking details'
      });
    }

    const customerExists = await User.findById(customer);
    const serviceExists = await Service.findById(service);

    if (!customerExists || !serviceExists) {
      return res.status(404).json({
        success: false,
        message: 'Customer or service not found'
      });
    }

    const booking = await Booking.create({
      customer,
      service,
      bookingDate,
      timeSlot,
      address,
      totalAmount
    });

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      booking
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

export default router;