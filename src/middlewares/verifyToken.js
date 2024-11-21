const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(403).json({ error: 'No token provided' });
    }

    const token = authHeader.split(' ')[1]; // Extract token after 'Bearer '
    if (!token) {
        return res.status(403).json({ error: 'Token missing in Authorization header' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        req.user = decoded; // Attach decoded payload to request
        next(); // Pass to the next middleware
    } catch (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};
