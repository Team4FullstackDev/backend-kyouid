const { Image_Products } = require("../db/models");

module.exports.getImages = async (req, res) => {
  try {
    const productId = req.params.productId;
    const response = await Image_Products.findAll({
      where: { productsId: productId },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports.getImagesById = async (req, res) => {
  try {
    const response = await Image_Products.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports.createImage = async (req, res) => {
  try {
    const { thumbnail, images, productsId } = req.body;
    const response = await Image_Products.create({
      thumbnail,
      images,
      productsId,
    });
    res.status(201).json({ msg: "Image was created successfully", response });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports.updateImage = async (req, res) => {
  try {
    const image = await Image_Products.findByPk(req.params.id);

    if (!image) {
      return res.status(404).json({ msg: "Image not found" });
    }

    const { thumbnail, images, productsId } = req.body;

    await image.update({
      thumbnail,
      images,
      productsId,
    });

    res.status(200).json({ msg: "Image was updated successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports.deleteImage = async (req, res) => {
  try {
    const image = await Image_Products.findByPk(req.params.id);

    if (!image) {
      return res.status(404).json({ msg: "Image not found" });
    }

    await image.destroy();
    res.status(200).json({ msg: "Image was deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
