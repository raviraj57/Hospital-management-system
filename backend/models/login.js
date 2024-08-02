const mongoose = require('mongoose');
const validator = require('validator');

const registerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure emails are unique
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email',
    },
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: (v) => validator.isMobilePhone(v, 'any', { strictMode: false }), // Validate phone number
      message: '{VALUE} is not a valid phone number',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Minimum password length
  },
  role: {
    type: String,
    enum: ['patient', 'doctor', 'admin', 'others'], // Define the roles
    default: 'patient', // Default role if not specified
    required: true,
  },
});

const Register = mongoose.model('Registration', registerSchema);

module.exports = Register;
