const express = require('express');
const router = express.Router();

const userModel = require('../controllers/users');

router.get('/', userModel.home);
router.post('/users', userModel.createUser);
router.get('/users', userModel.getAll);

module.exports = router;
