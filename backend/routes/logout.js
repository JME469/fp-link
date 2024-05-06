const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        // If the request reaches here, it means the user is authenticated
        // So you can perform any additional cleanup or logout logic here if needed
        
        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.error('Error logging out user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;

