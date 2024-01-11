const express = require('express');
const app = express.Router();

<<<<<<< HEAD
const imageRouter = require('./imageRoute');
const productsRouter = require('./productsRoute');
const userRouter = require('./usersRoute');
=======
const userModel = require("../controllers/users");

const {
  getUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");
>>>>>>> 51bfd5676bb1d4ce83e08a1f384b4b7a6fd18f66

app.use('/images', imageRouter);
app.use('/products', productsRouter);
app.use('/users', userRouter);

<<<<<<< HEAD
module.exports = app;
=======
const shipmentController = require("../controllers/shipments");

const wishlistController = require("../controllers/wishlist");

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
router.get("/wishlist", wishlistController.getWishlish);
// TODO must add middleware for logged in user only
router.get("/wishlist/:userId", wishlistController.getWishlishByUserId);
router.post("/wishlist", wishlistController.createWishlish);
router.delete("/wishlist/:id", wishlistController.deleteWishlish);



module.exports = router;
>>>>>>> 51bfd5676bb1d4ce83e08a1f384b4b7a6fd18f66
