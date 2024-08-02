const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// Get all appointments
router.route("/").get((req, res) => {
  Appointment.find()
    .then((appointments) => res.json(appointments))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Add new appointment
router.route("/add").post((req, res) => {
  const { patientName, age, doctorName, date, gender } = req.body; // Include age and gender
  const newAppointment = new Appointment({ patientName, age, doctorName, date, gender });

  newAppointment
    .save()
    .then((savedAppointment) => res.json(savedAppointment))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Update appointment data
router.route("/update/:id").post((req, res) => {
  Appointment.findById(req.params.id)
    .then((appointment) => {
      appointment.patientName = req.body.patientName;
      appointment.age = req.body.age; // Include age
      appointment.doctorName = req.body.doctorName;
      appointment.date = req.body.date;
      appointment.gender = req.body.gender; // Include gender

      appointment
        .save()
        .then(() => res.json("Appointment updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// Delete appointment
router.route("/delete/:id").delete((req, res) => {
  Appointment.findByIdAndDelete(req.params.id)
    .then(() => res.json("Appointment deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
