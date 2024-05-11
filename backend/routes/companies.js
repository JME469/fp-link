const express = require('express');
const Company = require('../models/Company');
const router = express.Router();

// Express route to get company data
router.get('/companies', async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    console.error('Error fetching companies:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;