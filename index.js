var config = {};

try {
	config = require('../../config');
}
catch (e) {
	console.log('ERROR: missing config file in project root');
}

module.exports = config;
