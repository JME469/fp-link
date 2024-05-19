const express = require('express');
const router = express.Router();
const multer = require('multer');
const Estudiante = require('../models/Estudiante');

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

// Middleware to fetch student data
async function fetchstudentData(req, res, next) {
  try {
    const student = await Estudiante.findByPk(req.user.id); // Assuming req.user.id contains the student ID
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    req.student = student;
    next();
  } catch (error) {
    console.error('Error fetching student data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Use the middleware for routes that need student data
router.use(fetchstudentData);

// Fetch student profile data
router.get('/', async (req, res) => {
  try {
    const studentData = req.student;
    res.json({ studentData, profilePicFilename: studentData.profilePic });
  } catch (error) {
    console.error('Error fetching student data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update student profile
router.put('/', async (req, res) => {
  try {
    let student = req.student;
    const { name, email, profile_pic, studies_center, presentation } = req.body;
    student.name = name || student.name;
    student.email = email || student.email;
    student.profile_pic = profile_pic || student.profile_pic;
    student.studies_center = studies_center || student.studies_center;
    student.presentation = presentation || student.presentation;

    // Save the updated student data
    await student.save();

    res.json({ message: 'Student profile updated successfully' });
  } catch (error) {
    console.error('Error updating student profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to serve the profile picture
router.get('/uploads/:filename', (req, res) => {
  const { filename } = req.params;
  res.sendFile(filename, { root: 'uploads/' });
});

module.exports = router;