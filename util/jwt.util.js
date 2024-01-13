const jwt = require('jsonwebtoken')
const jwtConfig = require('../config/jwt')

exports.generateToken = (payload) => jwt.sign(payload, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn })
exports.verifyToken = (token) => jwt.verify(token, jwtConfig.secret)