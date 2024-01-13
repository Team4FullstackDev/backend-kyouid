const express = require('express');
const router = express.Router();
const AuthGuard = require('../middleware/auth');
const {
	getUsers,
	getUsersById,
	createUser,
	updateUser,
	deleteUser,
} = require('../controllers/users');

// * User Router
router.get('/', AuthGuard, getUsers);
router.get('/:id', AuthGuard, getUsersById);
router.post('/', createUser);
router.patch('/:id', AuthGuard, updateUser);
router.delete('/:id', AuthGuard, deleteUser);

module.exports = router;
