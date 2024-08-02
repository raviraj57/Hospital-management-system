const express = require('express');
const Register = require('../models/login'); // Adjust path as per your project structure

const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
  const { name, email, phone, password, role } = req.body;
  try {
    const existingUser = await Register.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    const newUser = new Register({ name, email, phone, password, role });
    await newUser.save();
    res.status(201).json({ message: 'Successfully registered' });
  } catch (err) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

// Login an existing user
router.post('/login', async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const user = await Register.findOne({ email });
    if (user) {
      if (password === user.password) {
        if (role && role !== user.role) {
          return res.status(403).json({ message: 'Role mismatch' });
        }
        res.json({ message: 'Login success', user });
      } else {
        res.status(401).json({ message: 'Wrong password' });
      }
    } else {
      res.status(404).json({ message: 'Wrong email' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
