'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Schema = new _mongoose2.default.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    verifiedCode: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'signFeed',
  },
);

exports.default = _mongoose2.default.model('SignFeed', Schema);
