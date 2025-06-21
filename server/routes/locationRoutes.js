const express = require('express');
const router = express.Router();

// Updated data with proper names (spaces included)
const data = {
  India: {
    "Uttar Pradesh": ["Noida", "Lucknow", "Varanasi"],
    Maharashtra: ["Mumbai", "Pune"]
  },
  USA: {
    California: ["Los Angeles", "San Francisco"],
    Texas: ["Austin", "Dallas"]
  }
};

// Get list of countries
router.get('/countries', (req, res) => {
  res.json(Object.keys(data));
});

// Get states for selected country
router.get('/states', (req, res) => {
  const { country } = req.query;
  const states = data[country] ? Object.keys(data[country]) : [];
  res.json(states);
});

// Get cities for selected state
router.get('/cities', (req, res) => {
  const { country, state } = req.query;
  const cities = data[country] && data[country][state] ? data[country][state] : [];
  res.json(cities);
});

module.exports = router;
