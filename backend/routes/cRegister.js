const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Empresa = require('../models/Empresa');


router.post('/', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate data
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Check if user already exists
        const existingUser = await Empresa.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user record
        const newUser = await Empresa.create({
            name,
            email,
            password: hashedPassword
        });

        // Send success response
        console.log({ message: 'User registered successfully', user: newUser })
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;