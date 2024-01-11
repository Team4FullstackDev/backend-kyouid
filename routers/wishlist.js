const express = require('express');
const router = express.Router();

const wishlistController = require('../controllers/wishlist');

// TODO must add middleware for admin only
router.get('/', wishlistController.getWishlish);
// TODO must add middleware for logged in user only
router.get('/:userId', wishlistController.getWishlishByUserId);
router.post('/', wishlistController.createWishlish);
router.delete('/:id', wishlistController.deleteWishlish);

module.exports = router;
