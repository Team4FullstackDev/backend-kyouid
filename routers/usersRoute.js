const express = require('express');
const router = express.Router();

const userModel = require('../controllers/users');
const {
	getUsers,
	getUsersById,
	createUser,
	updateUser,
	deleteUser,
} = require('../controllers/users');

// * User Router
router.get('/', userModel.home);
router.get('/', getUsers);
router.get('/:id', getUsersById);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
