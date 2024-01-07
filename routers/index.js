const express = require('express');
const router = express.Router();

const userModel = require('../controllers/users');

router.get('/', userModel.home);

module.exports = router;
