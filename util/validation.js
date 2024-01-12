const isEmpty = (value) => {
	return value === undefined || value === null || value === '';
};

const isString = (value) => {
	return typeof value === 'string' || value instanceof String;
};
const isEmailValid = (email) => {
	return (
		typeof email === 'string' &&
		email.includes('@') &&
		email.toLowerCase() === email &&
		!/\s/.test(email)
	);
};

const userDetailAreValid = (
	fullName,
	username,
	email,
	password,
	phoneNumber,
	birthDate
) => {
	console.log(!isEmailValid(email));
	return (
		!isEmpty(fullName) &&
		!isEmpty(username) &&
		!isEmpty(email) &&
		!isEmpty(password) &&
		!isEmpty(phoneNumber) &&
		!isEmpty(birthDate)
	);
};

const userLoginAreValid = (email, password) => {
	return !isEmpty(email) && !isEmpty(password);
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
