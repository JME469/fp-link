const express = require('express');
const multer = require('multer');
const router = express.Router();

// Set up Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the destination directory for uploaded files
  },
  filename: function (req, file, cb) {
    // Generate a unique filename for the uploaded file
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Initialize Multer middleware with the configured storage options
const upload = multer({ storage: storage });

// Define a route to handle file uploads
router.post('/', upload.single('profilePic'), (req, res) => {
  // Access the uploaded file via req.file
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // Optionally, process the uploaded file further (e.g., save to database, resize, etc.)
  // Example: const filePath = req.file.path;

  // Send a success response
  res.json({ message: 'File uploaded successfully', filename: req.file.filename });
});

module.exports = router;
