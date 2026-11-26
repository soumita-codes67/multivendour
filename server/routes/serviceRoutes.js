import express from 'express';
import Service from '../models/Service.js';

const router = express.Router();

// Get all active services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find({ isActive: true });

    res.json({
      success: true,
      count: services.length,
      services
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Add a new service
router.post('/', async (req, res) => {
  try {
    const { name, category, description, price, duration, image, features } = req.body;

    if (!name || !category || price === undefined) {
      return res.status(400).json({
        success: false,
        message: 'Name, category and price are required'
      });
    }

    const service = await Service.create({
      name,
      category,
      description,
      price,
      duration,
      image,
      features
    });

    res.status(201).json({
      success: true,
      message: 'Service added successfully',
      service
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

export default router;