const express = require('express');
const cors = require('cors');
require('dotenv').config();
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/database');


const app = express();
const PORT = process.env.PORT || 3000;

const sessionStore = new SequelizeStore({
  db: sequelize, // Pass your Sequelize instance
});

app.use(session({
  secret: process.env.JWT_SECRET, // Set a secret key for session encryption
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: { maxAge: 2 * 60 * 60 * 1000 },
}));

sessionStore.sync();

app.use(cors({
    origin: 'http://localhost', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow only specified methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow only specified headers
  }));

app.options('*', cors());

const registerRoute = require('./routes/sRegister');
const loginRoute = require('./routes/sLogin');
const logoutRoute = require('./routes/logout');
const companiesRoute = require('./routes/empresas');
const cRegisterRoute = require('./routes/cRegister');
const cLoginRoute = require('./routes/cLogin');
const uploadsRoute = require('./routes/uploads');
const cProfile = require('./routes/cProfile');
const sProfile = require('./routes/sProfile');
const postRoutes = require('./routes/postRoutes');
const ramas = require('./routes/ramas');

const { authenticateUser } = require('./middlewares/authMiddleware');

app.use(express.json());

// Routes
app.use('/routes/sRegister', registerRoute);
app.use('/routes/sLogin', loginRoute);
app.use('/routes/cRegister', cRegisterRoute);
app.use('/routes/cLogin', cLoginRoute);
app.use('/routes/cProfile', authenticateUser, cProfile);
app.use('/routes/sProfile', authenticateUser, sProfile);
app.use('/routes/logout', authenticateUser, logoutRoute);
app.use('/routes/empresas', companiesRoute);
app.use('/routes/uploads', uploadsRoute);
app.use('/routes/posts', authenticateUser, postRoutes);
app.use('/routes/ramas', ramas);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

