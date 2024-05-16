const authenticateUser = async (req, res, next) => {
    try {
        // Get the authorization header from the request
        const authHeader = req.headers.authorization;

        // Check if the authorization header exists
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            // Redirect to student login page if unauthorized
            return res.redirect('/estudiantes');
        }

        // Extract the token from the authorization header
        const token = authHeader.split(' ')[1];

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the decoded token contains a user ID
        if (!decoded || !decoded.userId) {
            // Redirect to student login page if unauthorized
            return res.redirect('/estudiantes');
        }

        // Fetch the user from the appropriate model based on the route
        let user;
        if (req.path.startsWith('/routes/s')) {
            user = await Student.findByPk(decoded.userId);
        } else if (req.path.startsWith('/routes/c')) {
            user = await Empresa.findByPk(decoded.userId);
        }

        // Check if the user exists
        if (!user) {
            // Redirect to appropriate login page based on route
            if (req.path.startsWith('/routes/s')) {
                return res.redirect('/estudiantes');
            } else if (req.path.startsWith('/routes/c')) {
                return res.redirect('/empresas');
            }
        }

        // Attach the user object to the request for further use
        req.user = user;

        // Call the next middleware
        next();
    } catch (error) {
        console.error('Error authenticating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { authenticateUser };

