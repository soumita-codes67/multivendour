import express from 'express';
import Provider from '../models/Provider.js';

const router = express.Router();

// Get all verified providers
router.get('/', async (req, res) => {
  try {
    const providers = await Provider.find({
      isVerified: true,
      isAvailable: true
    });

    res.json({
      success: true,
      count: providers.length,
      providers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Add a new provider
router.post('/', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      skills,
      experience,
      serviceAreas
    } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Name, email and phone are required'
      });
    }

    const provider = await Provider.create({
      name,
      email,
      phone,
      skills,
      experience,
      serviceAreas
    });

    res.status(201).json({
      success: true,
      message: 'Provider added successfully',
      provider
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

export default router;