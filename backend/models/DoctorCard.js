const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  badges: {
    type: [String],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
