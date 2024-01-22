const express = require('express');
const router = express.Router();

const { login, logout } = require('../controllers/authLogin');
const { guardUser } = require('../config/security');

router.post('/login', login);
router.get('/logout', guardUser, logout);

module.exports = router;
