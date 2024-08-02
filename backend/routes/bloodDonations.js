const express = require("express");
const router = express.Router();
const BloodDonation = require("../models/BloodDonation");

// GET all blood donations
router.get("/", async (req, res) => {
  try {
    const donations = await BloodDonation.find();
    res.json(donations);
  } catch (err) {
    res.status(400).json({ error: "Error fetching donations: " + err });
  }
});

// GET a specific blood donation by ID
router.get("/:id", async (req, res) => {
  try {
    const donation = await BloodDonation.findById(req.params.id);
    if (!donation) return res.status(404).json({ error: "Donation not found" });
    res.json(donation);
  } catch (err) {
    res.status(400).json({ error: "Error fetching donation: " + err });
  }
});

// POST add new blood donation
router.post("/add", async (req, res) => {
  const { donorName, bloodGroup, quantity, phoneNumber, date, time, gender } = req.body;
  const newDonation = new BloodDonation({ donorName, bloodGroup, quantity, phoneNumber, date, time, gender });

  try {
    const savedDonation = await newDonation.save();
    res.json(savedDonation);
  } catch (err) {
    res.status(400).json({ error: "Error saving donation: " + err });
  }
});

// PUT update blood donation by ID
router.put("/update/:id", async (req, res) => {
  try {
    const donation = await BloodDonation.findById(req.params.id);
    if (!donation) return res.status(404).json({ error: "Donation not found" });

    donation.donorName = req.body.donorName;
    donation.bloodGroup = req.body.bloodGroup;
    donation.quantity = req.body.quantity;
    donation.phoneNumber = req.body.phoneNumber;
    donation.date = req.body.date;
    donation.time = req.body.time;
    donation.gender = req.body.gender;

    const updatedDonation = await donation.save();
    res.json(updatedDonation);
  } catch (err) {
    res.status(400).json({ error: "Error updating donation: " + err });
  }
});

// DELETE blood donation by ID
router.delete("/delete/:id", async (req, res) => {
  try {
    const donation = await BloodDonation.findByIdAndDelete(req.params.id);
    if (!donation) return res.status(404).json({ error: "Donation not found" });
    res.json({ message: "Blood donation deleted." });
  } catch (err) {
    res.status(400).json({ error: "Error deleting donation: " + err });
  }
});

module.exports = router;
