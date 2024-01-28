function convertBase(file) {
	const convert = JSON.parse(Buffer(file, 'base64').toString('utf-8'));
	return convert;
}

module.exports = convertBase;
