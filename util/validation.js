const isEmpty = (value) => {
	return value === undefined || value === null || value === '';
};

const isString = (value) => {
	return typeof value === 'string' || value instanceof String;
};

const userDetailAreValid = (
	fullName,
	username,
	email,
	password,
	phoneNumber,
	birthDate,
	isAdmin
) => {
	return (
		isEmpty(fullName) &&
		isEmpty(username) &&
		isEmpty(email) &&
		isEmpty(password) &&
		isEmpty(phoneNumber) &&
		isEmpty(birthDate) &&
		isEmpty(isAdmin) &&
		String(phoneNumber) &&
		username !== username.trim() &&
		email !== email.trim() &&
		email !== email.toLowerCase() &&
		email !== email.includes('@') &&
		password.length <= 6
	);
};

const userLoginAreValid = (email, password) => {
	return (
		isEmpty(email) &&
		isEmpty(password) &&
		email !== email.trim() &&
		password.length <= 6 &&
		email !== email.includes('@')
	);
};

const productDetailAreValid = (
	status,
	title,
	price,
	description,
	minimumCredits,
	stock,
	category,
	series,
	character,
	manufacture
) => {
	console.log(isEmpty(status) && isEmpty(title));
	return (
		!isEmpty(title) &&
		!isEmpty(price) &&
		!isEmpty(description) &&
		!isEmpty(minimumCredits) &&
		!isEmpty(stock) &&
		!isEmpty(category) &&
		!isEmpty(series) &&
		!isEmpty(character) &&
		!isEmpty(manufacture) &&
		!isString(stock) &&
		!isString(minimumCredits) &&
		!isString(price)
	);
};

module.exports = {
	userDetailAreValid,
	userLoginAreValid,
	productDetailAreValid,
};
