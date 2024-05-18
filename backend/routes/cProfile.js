const express = require('express');
const router = express.Router();
const multer = require('multer');
const Empresa = require('../models/Empresa');

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// Middleware to fetch company data
async function fetchCompanyData(req, res, next) {
  try {
    const company = await Empresa.findByPk(req.user.id); // Assuming req.user.id contains the company ID
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    req.company = company;
    next();
  } catch (error) {
    console.error('Error fetching company data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Use the middleware for routes that need company data
router.use(fetchCompanyData);

// Fetch company profile data
router.get('/', async (req, res) => {
  try {
    const companyData = req.company;
    res.json({ companyData, profilePicFilename: companyData.profilePic });
  } catch (error) {
    console.error('Error fetching company data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update company profile
router.put('/', async (req, res) => {
  try {
    let company = req.company;
    const { name, email, logo, banner, actividad, description } = req.body;
    company.name = name || company.name;
    company.email = email || company.email;
    company.logo = logo || company.logo;
    company.banner = banner || company.banner;
    company.actividad = actividad || company.actividad;
    company.description = description || company.description;

    // Save the updated company data
    await company.save();

    res.json({ message: 'Company profile updated successfully' });
  } catch (error) {
    console.error('Error updating company profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to serve the profile picture
router.get('/uploads/:filename', (req, res) => {
  const { filename } = req.params;
  res.sendFile(filename, { root: 'uploads/' });
});

module.exports = router;

