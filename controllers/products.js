const { Products, Image_Products } = require("../db/models");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/"); // Menentukan folder penyimpanan untuk file yang diunggah
  },
  filename: function (req, file, cb) {
    // Menentukan nama file yang disimpan
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

module.exports.getProducts = async (req, res) => {
  try {
    const { status, category, character, series } = req.query;
    const whereClause = {};
    if (status) whereClause.status = status;
    if (category) whereClause.category = category;
    if (character) whereClause.character = character;
    if (series) whereClause.series = series;
    const response = await Products.findAll({
      include: [
        {
          model: Image_Products,
          attributes: ["image", "productsId", "thumbnail"],
        },
      ],
      where: whereClause,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
module.exports.getProductsById = async (req, res) => {
  try {
    const response = await Products.findOne({
      include: [
        {
          model: Image_Products,
          attributes: ["image"],
        },
      ],
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports.handleUploadImages = async (req, res) => {};

module.exports.createProduct = async (req, res) => {
  try {
    const {
      title,
      price,
      description,
      minimumCredits,
      stock,
      category,
      series,
      character,
      manufacture,
      status,
    } = req.body;
    const product = await Products.create({
      title,
      price,
      description,
      minimumCredits,
      stock,
      category,
      series,
      character,
      manufacture,
      status,
    });
    res
      .status(201)
      .json({ msg: "Product and images were created successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
module.exports.updateProduct = async (req, res) => {
  try {
    const {
      status,
      title,
      price,
      description,
      minimumCredits,
      stock,
      category,
      series,
      character,
      manufacture,
    } = req.body;
    const product = await Products.findOne({ where: { id: req.params.id } });
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    await product.update({
      status,
      title,
      price,
      description,
      minimumCredits,
      stock,
      category,
      series,
      character,
      manufacture,
    });

    res
      .status(200)
      .json({ msg: "Product and images were updated successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports.deleteProduct = async (req, res) => {
  const product = await Products.findOne({
    where: {
      id: req.params.id,
    },
  });
  try {
    await Products.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Product was deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
