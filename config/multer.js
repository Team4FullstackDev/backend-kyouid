const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/");
  },
  filename: function (req, file, cb) {
    const fileExtension = path.extname(file.originalname);
    const thumbnail = req.body.thumbnail || "default";

    cb(null, `${thumbnail}-${Date.now()}${fileExtension}`);
  },
});

const upload = multer({ storage: storage });

module.exports = { upload };
