const express = require("express");
const router = express.Router();

const statusTransactionController = require("../controllers/statusTransaction");

router.get("/", statusTransactionController.getStatusTransactions);
router.get("/:id", statusTransactionController.getStatusTransactionById);
router.post("/", statusTransactionController.createStatusTransaction);
router.put("/:id", statusTransactionController.updateStatusTransaction);
router.delete("/:id", statusTransactionController.deleteStatusTransaction);

module.exports = router;
