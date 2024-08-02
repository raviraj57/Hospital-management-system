const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  patientName: { type: String, required: true },
  age: { type: Number, required: true }, // Added age field
  doctorName: { type: String, required: true },
  date: { type: Date, required: true },
  gender: { type: String, required: true, enum: ['Male', 'Female', 'Other'] } // Added gender field
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
