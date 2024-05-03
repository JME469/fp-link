const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Set the port

// Middleware to parse JSON requests
app.use(express.json());

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// User Registration Route
app.post('/api/register', async (req, res) => {
    try {
        // Extract registration data from request body
        const { username, email, password } = req.body;

        // Validate data (for example, ensure all required fields are present)
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Hash the password
        const bcrypt = require('bcryptjs');
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

        // Create user record in the database
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword
        });

        // Send success response
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        // Handle errors
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// User Login Route
app.post('/api/login', (req, res) => {
    // Implement user login logic
});

// User Logout Route
app.post('/api/logout', (req, res) => {
    // Implement user logout logic
});

// User Authentication Middleware
function authenticateUser(req, res, next) {
    // Implement user authentication logic
}


const { Sequelize, DataTypes } = require('sequelize');

// Connect to MySQL database
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

// Define User model
const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
});

// Sync models with the database
(async () => {
    await sequelize.sync();
    console.log('Database synced');
})();
