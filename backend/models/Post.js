// Post.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Post = sequelize.define('post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  image: DataTypes.STRING
}, {
  tableName: 'posts',
  timestamps: true // Enable timestamps for createdAt and updatedAt fields
});

const Empresa = require('./Empresa'); // Assuming this is the path to your Empresa model

Post.belongsTo(Empresa, {
  foreignKey: 'empresa_id',
  onDelete: 'CASCADE' // If a company is deleted, delete its associated posts
});

module.exports = Post;

