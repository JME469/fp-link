const jwt = require('jsonwebtoken');
const Estudiante = require('../models/Estudiante');
const Empresa = require('../models/Empresa');

const authenticateUser = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Unauthorized: No token provided' });
        }

        const token = authHeader.split(' ')[1]; 

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log(decoded)

        if (!decoded || !decoded.userId) {
            return res.status(401).json({ error: 'Unauthorized: Invalid token' });
        }
        
        // Dependiendo de la ruta de origen, busca el usuario en una tabla u otra
        let user;
        if (req.originalUrl.startsWith('/routes/s')) {
            user = await Estudiante.findByPk(decoded.userId);
        } else if (req.originalUrl.startsWith('/routes/c') || req.originalUrl.startsWith('/routes/posts')) {
            user = await Empresa.findByPk(decoded.userId);
        }

        if (!user) {
            return res.status(401).json({ error: 'Unauthorized: User not found' });
        }

        req.user = user;

        next();
    } catch (error) {
        console.error('Error authenticating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { authenticateUser };



