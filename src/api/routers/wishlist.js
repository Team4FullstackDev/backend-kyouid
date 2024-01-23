const express = require('express');
const router = express.Router();

const wishlistController = require('../controllers/wishlist');
const { authorizeUser } = require('../config/security');

// TODO must add middleware for admin only
router.get('/', wishlistController.getWishlist);
// TODO must add middleware for logged in user only
router.get('/:userId', authorizeUser, wishlistController.getWishlishByUserId);
router.post('/', wishlistController.createWishlish);
router.delete('/:id', wishlistController.deleteWishlish);

module.exports = router;
