const express = require('express');
const cors = require('cors');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost', // Allow requests from this origin
    methods: ['GET', 'POST'], // Allow only specified methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow only specified headers
  }));

app.options('*', cors());

const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const logoutRoute = require('./routes/logout');

const { authenticateUser } = require('./middlewares/authMiddleware');

app.use(express.json());

// Routes
app.use('/routes/register', registerRoute);
app.use('/routes/login', loginRoute);
app.use('/routes/logout', authenticateUser, logoutRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

