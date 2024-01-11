const CustomeAPIError = require('./customApiErrors');

class NotFoundError extends CustomeAPIError {
	constructor(message) {
		super(message);
	}
}

module.exports = NotFoundError;
