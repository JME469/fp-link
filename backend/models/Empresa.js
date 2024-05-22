const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Empresa = sequelize.define('empresa', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    logo: {
        type: DataTypes.STRING
    },
    banner: {
        type: DataTypes.STRING
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
          // otras ramas que desees agregar
        ],
        allowNull: true,
      },
    description: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'empresas',
    timestamps: false,
});

module.exports = Empresa;