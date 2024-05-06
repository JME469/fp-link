const { Sequelize } = require('sequelize');

// Initialize Sequelize with database credentials
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost', // Change this to your database host
  port: 3306, // Change this to your database port
  username: 'root', // Change this to your database username
  password: '', // Change this to your database password
  database: 'fp_link', // Change this to your database name
});

module.exports = sequelize;
