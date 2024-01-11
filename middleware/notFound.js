const notFound = (req, res) => {
	res.status(404).send({
		message: 'Router doest exist',
	});
};

module.exports = notFound;
