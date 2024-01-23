module.exports.health = (req, res, next) => {
	const healthCheck = {
		uptime: process.uptime(),
		message: 'OK',
		timestamp: Date.now(),
	};
	try {
		return res.status(200).json({
			message: {
				healthCheck,
			},
		});
	} catch (error) {
		next();
	}
};
