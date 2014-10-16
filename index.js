var path = require('path');

module.exports = function (fileName) {
	var configPath = path.join('../../', fileName || 'config'),
		conf,
		local;

	conf = require(configPath);

	try {
		local = require(configPath + '.local');
	} catch (e) {
		return conf;
	}

	Object.keys(local).forEach(function (key) {
		conf[key] = local[key];
	});

	return local;
};
