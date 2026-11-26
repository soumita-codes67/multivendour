import mongoose from 'mongoose';

const providerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  skills: [{
    type: String
  }],
  experience: {
    type: Number,
    default: 0
  },
  serviceAreas: [{
    type: String
  }],
  rating: {
    type: Number,
    default: 0
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  isAvailable: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const Provider = mongoose.model('Provider', providerSchema);

export default Provider;