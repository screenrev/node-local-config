# local config

**`require`** your local config file easily from anywhere in your project
without having to navigate directories.

**painful**

```javascript
	var config = require('../../../../config');
```

**the local config way**

```javascript
	var config = require('local-config');
```


## Installation

	npm install local-config


## Usage

Create a `config.js` or `config.json` file in your project root.
Or you can create `config/` folder (with an `index.js` or `package.json` file).

JSON files are imported as plain JavaScript objects, `.js` files should export
your config in the format which you would prefer.


## Example

**`config.js`**

```javascript
	module.exports = {
		environment: 'live',
		password: 'y0uW0ntGu355'
	}
```
