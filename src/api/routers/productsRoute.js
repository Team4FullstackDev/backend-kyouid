const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");
const { uploadProducts } = require("../middleware/multer");
const { guardUser, guardAdmin } = require("../config/security");

// * Product Router
router.get("/", getProducts);
router.get("/:id", getProductsById);
router.post(
  "/",

  uploadProducts.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "image", maxCount: 10 },
  ]),
  createProduct
);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
