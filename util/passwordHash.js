const bycrypt = require('bcrypt');
const hashPassword = (password) => {
	return new Promise((resolve, reject) => {
		bycrypt.genSalt(12, (err, salt) => {
			if (err) {
				console.log(err);
				reject(err);
			}
			if (salt) {
				bycrypt.hash(password, salt, (err, hash) => {
					if (err) {
						console.log(err);
						reject(err);
					}
					resolve(hash);
				});
			}
		});
	});
};

const comparePassword = (password, hash) => {
	return new Promise((resolve, reject) => {
		bycrypt.compare(password, hash, (err, result) => {
			if (err) {
				reject(err);
			} else {
				console.log(password, result);
				resolve(result);
			}
		});
	});
};

module.exports = { hashPassword, comparePassword };
