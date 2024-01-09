const express = require("express");
const router = express.Router();

const userModel = require("../controllers/users");
const {
  getUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

const {
  getProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
} = require("../controllers/products");

// const {
//   getImages,
//   getImagesById,
//   createImage,
//   updateImage,
//   deleteImage,
// } = require("../controllers/images");

router.get("/", userModel.home);
router.get("/users", getUsers);
router.get("/users/:id", getUsersById);
router.post("/users", createUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

router.get("/products", getProducts);
router.get("/products/:id", getProductsById);
router.post("/products", createProduct);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

module.exports = router;
