// models/BloodDonation.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for Blood Donation
const bloodDonationSchema = new Schema({
  donorName: { type: String, required: true },
  bloodGroup: { type: String, enum: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'], required: true },
  quantity: { type: Number, required: true },
  phoneNumber: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true }
});

// Create a Mongoose model based on the schema
const BloodDonation = mongoose.model('BloodDonation', bloodDonationSchema);

// Export the model to use it in other parts of the application
module.exports = BloodDonation;
