const express = require('express');
const router = express.Router();
// const AuthGuard = require('../middleware/auth');
const { guardUser, guardAdmin } = require('../config/security');
const {
	getUsers,
	getUsersById,
	createUser,
	updateUser,
	deleteUser,
} = require('../controllers/users');

// * User Router
router.get('/', guardUser, guardAdmin, getUsers);
router.get('/:id', guardUser, guardAdmin, getUsersById);
router.post('/', createUser);
router.patch('/:id', guardUser, guardAdmin, updateUser);
router.delete('/:id', guardUser, guardAdmin, deleteUser);

module.exports = router;
