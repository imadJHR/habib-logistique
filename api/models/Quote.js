import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
  serviceType: {
    type: String,
    required: true,
    enum: [
      "Transport National",
      "Transport International",
      "Stockage",
      "Livraison Express",
      "Dédouanement",
      "Autre"
    ]
  },
  packageInfo: {
    weight: { type: Number, required: true },
    dimensions: {
      length: { type: Number, required: true },
      width: { type: Number, required: true },
      height: { type: Number, required: true }
    }
  },
  addresses: {
    from: { type: String, required: true },
    to: { type: String, required: true }
  },
  additionalInfo: String,
  contactInfo: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true }
  },
  termsAccepted: { type: Boolean, required: true },
  status: {
    type: String,
    enum: ['pending', 'processing', 'completed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Quote', quoteSchema);