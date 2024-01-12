const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cart");
// TODO must add middleware for logged in user only
router.get("/:userId", cartController.cartsByUserId);
router.post("/", cartController.addCart);
router.patch("/:id", cartController.updateQuantity);
router.delete("/:id", cartController.deleteCart);

module.exports = router;
