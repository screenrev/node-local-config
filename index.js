var path = require('path');

module.exports = function (fileName) {
	return require(path.join('../../', fileName || 'config'));
};
