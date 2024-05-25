// Post.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  rama: {
    type: Sequelize.ENUM,
    values: [
      'DAW',
      'DAM',
      'ASIR',
      'Administración y finanzas',
      'Comercio internacional',
      'Marketing',
      'Transporte y logística',
    ],
    allowNull: true,
  },
  image: DataTypes.STRING,
  empresa_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Empresas',
      key: 'id'
    }
  }
}, {
  tableName: 'posts',
  timestamps: false,
});

const Empresa = require('./Empresa'); // Assuming this is the path to your Empresa model

Post.belongsTo(Empresa, {
  foreignKey: 'empresa_id',
  onDelete: 'CASCADE' // If a company is deleted, delete its associated posts
});

module.exports = Post;


