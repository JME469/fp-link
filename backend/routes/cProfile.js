const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Empresa = require('../models/Empresa');

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// Fetch company profile data
router.get('/', async (req, res) => {
  try {
    // Fetch company data from the database
    const companyData = await Empresa.findOne({ where: { id: req.user.id } });
    // Send the company data as JSON response
    res.json({companyData, profilePicFilename: companyData.profilePic});
  } catch (error) {
    console.error('Error fetching company data:', error);
    // Send an error response if fetching data fails
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update company profile
router.put('/', async (req, res) => {
  try {

    let company = await Empresa.findOne({ where: { id: req.user.id } });
    if (!company) {
        return res.status(404).json({ error: 'Company not found' });
      }
      
      // Update company data with the fields provided in the request body
      const { name, email, logo, banner, actividad, description } = req.body;
      company.name = name || company.name;
      company.email = email || company.email;
      company.logo = logo || company.logo;
      company.banner = banner || company.banner;
      company.actividad = actividad || company.actividad;
      company.description = description || company.description;
  
      // Save the updated company data
      await company.save();

    // Send a success response
    res.json({ message: 'Company profile updated successfully' });
  } catch (error) {
    console.error('Error updating company profile:', error);
    // Send an error response if updating data fails
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to serve the profile picture
router.get('/uploads/:filename', (req, res) => {
  const { filename } = req.params;
  res.sendFile(filename, { root: 'uploads/' }); // Assuming the profile pictures are stored in the 'uploads/' directory
});

module.exports = router;
