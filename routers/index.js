const express = require("express");
const router = express.Router();
const { upload } = require("../config/multer");

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
  handleUploadImages,
} = require("../controllers/products");
const {
  saveImagesToDatabase,
  getAllImages,
  deleteImage,
} = require("../controllers/images");

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

router.get("/images", getAllImages);

router.post("/upload/:id", upload.array("file", 5), async (req, res) => {
  try {
    await saveImagesToDatabase(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.delete("/images/:id", deleteImage);
module.exports = router;
