const express = require('express');
const Empresa = require('../models/Empresa');
const router = express.Router();

// Express route to get company data
router.get('/', async (req, res) => {
  try {
    const companies = await Empresa.findAll();
    res.json(companies);
  } catch (error) {
    console.error('Error fetching companies:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;