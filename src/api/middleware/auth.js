const { verifyToken } = require('../util/jwt.util');

module.exports = async (req, res, next) => {
    
    let token = req.headers.authorization;

    if(token && token.startsWith('Bearer')) {
        token = token.split(' ')[1];
    }

    console.log(token)
    if (!token) {
        return res
          .status(403)
          .json({ message: "Authorization header is missing." , status: "403 forbidden"});
    }

    try {
        const decodedToken = await verifyToken(token, process.env.JWT_SECRET);
        req.user = decodedToken
        req.token = token
        next();
    } catch(error) {
        res.status(401).json({
            error: new Error('Invalid request!'),
            status: "401 unauthorized",
            message: error.message
        });
    }
}