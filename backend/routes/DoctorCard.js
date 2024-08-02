const express = require('express');
const router = express.Router();
const Doctor = require('../models/DoctorCard');

// Add a new doctor
router.post('/', async (req, res) => {
  const { category, imgSrc, badges, name, link } = req.body;

  const newDoctor = new Doctor({
    category,
    imgSrc,
    badges,
    name,
    link,
  });

  try {
    const savedDoctor = await newDoctor.save();
    res.status(201).json(savedDoctor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
