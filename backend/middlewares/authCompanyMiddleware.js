// authCompanyMiddleware.js

const jwt = require('jsonwebtoken');
const { Empresa } = require('../models/Empresa');

const authenticateCompany = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded || !decoded.companyId) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const company = await Empresa.findByPk(decoded.companyId);
        if (!company) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        req.company = company;
        next();
    } catch (error) {
        console.error('Error authenticating company:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { authenticateCompany };
