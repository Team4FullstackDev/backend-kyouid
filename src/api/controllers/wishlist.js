const { Whishlist, Users, Products } = require("../db/models");

module.exports.getWishlist = async (req, res) => {
  // Route for admin only
  try {
    const response = await Whishlist.findAll({
      attributes: ["id", "userId", "productsId"],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports.getWishlishByUserId = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await Users.findByPk(userId);

    if (!user) {
      return res.status(404).json({ msg: "User not found." });
    }

    const response = await Whishlist.findAll({
      where: { userId: userId },
      attributes: ["id", "userId", "productsId"],
      include: [Products],
    });

    if (!response) {
      return res.status(404).json({ msg: "No wishlist found for this user." });
    }
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg:
        error.message ||
        "An unexpected error occurred. Please try again later.",
    });
  }
};

module.exports.createWishlish = async (req, res) => {
  const { userId, productsId } = req.body;
  if (!userId || !productsId) {
    return res.status(400).json({ msg: "All fields are required" });
  }
  try {

    const user = await Users.findByPk(userId);
    const product = await Products.findByPk(productsId);

    if (!user) {
      return res.status(404).json({ msg: "User not found." });
    }

    if (!product) {
      return res.status(404).json({ msg: "Product not found." });
    }

    const response = await Whishlist.create({
      userId: userId,
      productsId: productsId,
    });
    res.status(201).json({ msg: "Wishlist was created successfully", response });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports.deleteWishlish = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await Whishlist.destroy({
      where: { id: id },
    });
    if (!response) {
      return res.status(404).json({ msg: "Wishlist not found" });
    }
    res.status(200).json({ msg: "Wishlist was deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
