const { Image_Products } = require("../db/models");

module.exports.saveImagesToDatabase = async (req, res) => {
  try {
    if (req.files && req.files.length > 0) {
      const { id: productsId } = req.params;

      const savePromises = [];

      for (const file of req.files) {
        const { filename } = file;

        savePromises.push(
          Image_Products.create({
            thumbnail: req.body.thumbnail,
            image: `images/${filename}`,
            productsId,
          })
        );
      }

      await Promise.all(savePromises);

      res.send("Images uploaded and saved to the database successfully!");
    } else {
      res.status(400).send("No files uploaded");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.getAllImages = async (req, res) => {
  try {
    const images = await Image_Products.findAll();
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.deleteImage = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Image_Products.findOne({ where: { id } });
    if (!image) return res.status(404).send("Image not found");

    await Image_Products.destroy({ where: { id } });
    res.send("Image deleted successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
