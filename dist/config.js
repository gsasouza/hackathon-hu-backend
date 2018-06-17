'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.mailGunDomain = exports.mailGunKey = exports.jwtSecret = exports.graphqlPort = exports.databaseConfig = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _dotenvSafe = require('dotenv-safe');

var _dotenvSafe2 = _interopRequireDefault(_dotenvSafe);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var root = _path2.default.join.bind(undefined, __dirname, '../');

_dotenvSafe2.default.load({
  path: root('.env'),
  sample: root('.env.example'),
});

// Database Settings
var dBdevelopment = process.env.MONGO_URL || 'mongodb://localhost/hackathon-hu';
var dBproduction = process.env.MONGO_URL || 'mongodb://localhost/hackathon-hu';

// Test Database Settings
// const test = 'mongodb://localhost/awesome-test';

// Export DB Settings
var databaseConfig = (exports.databaseConfig = process.env.NODE_ENV === 'production' ? dBproduction : dBdevelopment);

// Export GraphQL Server settings
var graphqlPort = (exports.graphqlPort = process.env.PORT || 5000);
var jwtSecret = (exports.jwtSecret = process.env.JWT_KEY || 'secret_key');

//mail
var mailGunKey = (exports.mailGunKey = process.env.MAILGUN_KEY || '');
var mailGunDomain = (exports.mailGunDomain = process.env.MAILGUN_DOMAIN || '');
