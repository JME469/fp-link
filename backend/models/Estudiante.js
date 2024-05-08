const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Estudiante = sequelize.define('estudiante', {
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
    profile_pic: {
        type: DataTypes.STRING
    },
    studies_center: {
        type: DataTypes.STRING
    },
    presentation: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'estudiantes',
    timestamps: false,
});

module.exports = Estudiante;
