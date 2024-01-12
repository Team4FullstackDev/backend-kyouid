const multer = require('multer');

const storageProducts = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'upload/public/products');
	},
	filename: (req, file, cb) => {
		cb(null, Math.floor(Math.random() * 10000) + file.originalname);
	},
});

const storageAvatar = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'upload/private/profiles');
	},
	filename: (req, file, cb) => {
		cb(null, Math.floor(Math.random() * 10000) + file.originalname);
	},
});

const fileFilter = (req, file, cb) => {
	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
		cb(null, true);
	} else {
		cb(
			{
				message:
					'Unsupported file format. Only JPEG, JPG, and PNG files are allowed.',
			},
			false
		);
	}
};

const uploadProducts = multer({
	storage: storageProducts,
	limits: {
		fileSize: 1024 * 1024 * 5,
	},
	fileFilter: fileFilter,
});

const uploadAvatar = multer({
	storage: storageAvatar,
	limits: {
		fileSize: 1024 * 1024 * 5,
	},
	fileFilter: fileFilter,
});

module.exports = { uploadProducts, uploadAvatar };
