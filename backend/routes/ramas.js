const express = require('express');
const router = express.Router();
const Empresa = require('../models/Empresa');

router.get('/', (req, res) => {
    try {
        const modelAttributes = Empresa.getAttributes();
        const ramaOptions = modelAttributes.rama.values; // Obtener valores de ENUM
        res.status(200).json(ramaOptions);
    } catch (error) {
        console.error('Error fetching rama options:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
