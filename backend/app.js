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

const registerRoute = require('./routes/sRegister');
const loginRoute = require('./routes/sLogin');
const logoutRoute = require('./routes/logout');
const companiesRoute = require('./routes/empresas');

const { authenticateUser } = require('./middlewares/authMiddleware');

app.use(express.json());

// Routes
app.use('/routes/sRegister', registerRoute);
app.use('/routes/sLogin', loginRoute);
app.use('/routes/logout', authenticateUser, logoutRoute);
app.use('/routes/empresas', companiesRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

