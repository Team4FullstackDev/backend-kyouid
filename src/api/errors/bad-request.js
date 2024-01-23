const CustomeAPIError = require('./customApiErrors');

class BadRequestError extends CustomeAPIError {
	constructor(message) {
		super(message);
	}
}

module.exports = BadRequestError;
