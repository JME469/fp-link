const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const registerRoute = require('./routes/register.js');
const loginRoute = require('./routes/login');
const logoutRoute = require('./routes/logout');
const { authenticateUser } = require('./middlewares/authMiddleware');

app.use(express.json());

// Routes
app.use('/api/register', registerRoute);
app.use('/api/login', loginRoute);
app.use('/api/logout', authenticateUser, logoutRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

