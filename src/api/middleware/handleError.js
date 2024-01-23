const errorHandler = (err, req, res, next) => {
	let costumeError = {
		statusCode: err.statusCode || 500,
		message: err.message || 'Something went wrong try again',
	};

	if (err.name === 'ValidationError') {
		costumeError.message = Object.values(err.errors)
			.map((item) => item.message)
			.join(', ');
		costumeError.statusCode = 400;
	}

	if (err.code && err.code === 11000) {
		costumeError.message = `Duplicated value entered for ${Object.keys(
			err.keyValue
		)} field, please aqnother value`;

		costumeError.statusCode = 400;
	}

	if (err.name === 'CastError') {
		costumeError.message = `No item found with id: ${err.value}`;
		costumeError.statusCode = 404;
	}
	return res.status(costumeError.statusCode).json({
		message: costumeError.message,
	});
};

module.exports = errorHandler;
