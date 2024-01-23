const express = require("express");
const router = express.Router();

const order = require("../controllers/order");

router.get("/", order.getAllOrders);
router.get("/:id", order.getOrderById);
router.post("/", order.createOrder);
router.put("/:id", order.updateOrder);
router.delete("/:id", order.deleteOrder);

module.exports = router;
