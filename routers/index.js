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

const shipmentController = require("../controllers/shipments");

const wishlistController = require("../controllers/wishlist");

const cartController = require("../controllers/cart");

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

// shipments
router.get("/shipments", shipmentController.getShipments);
router.get("/shipments/:id", shipmentController.getShipmentsById);
router.post("/shipments", shipmentController.createShipment);
router.put("/shipments/:id", shipmentController.updateShipment);
router.delete("/shipments/:id", shipmentController.deleteShipment);

// Wishlist

// TODO must add middleware for admin only
router.get("/wishlists", wishlistController.getWishlist);
// TODO must add middleware for logged in user only
router.get("/wishlists/:userId", wishlistController.getWishlishByUserId);
router.post("/wishlists", wishlistController.createWishlish);
router.delete("/wishlists/:id", wishlistController.deleteWishlish);

// TODO must add middleware for logged in user only
router.get("/carts/:userId", cartController.cartsByUserId);
router.post("/carts", cartController.addCart);
router.patch("/carts/:id", cartController.updateQuantity);
router.delete("/carts/:id", cartController.deleteCart);


module.exports = router;
