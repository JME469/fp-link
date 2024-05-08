const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:8080'
}));

app.options('*', cors());

const registerRoute = require('/fp-link/backend/routes/register');
const loginRoute = require('/fp-link/backend/routes/login');
const logoutRoute = require('/fp-link/backend/routes/logout');

const { authenticateUser } = require('/fp-link/backend/middlewares/authMiddleware');

app.use(express.json());

// Routes
app.use('/fp-link/backend/routes/register', registerRoute);
app.use('/fp-link/backend/routes/login', loginRoute);
app.use('/fp-link/backend/routes/logout', authenticateUser, logoutRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

