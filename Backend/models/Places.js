import mongoose from 'mongoose';

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  images: [
    {
      type: String // You can store image URLs or Cloudinary IDs here
    }
  ],
  openingTime: {
    type: String // or Date if you want strict time format
  },
  closingTime: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Place = mongoose.model('Place', placeSchema);

export default Place;
