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
    code: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    situation: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'action',
  },
);

exports.default = _mongoose2.default.model('Action', Schema);
