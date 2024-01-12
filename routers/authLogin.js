const express = require('express');
const router = express.Router();

const { login } = require('../controllers/authLogin');

router.post = ('/', login);

module.exports = router;
