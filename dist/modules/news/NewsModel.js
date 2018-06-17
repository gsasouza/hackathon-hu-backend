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
    title: {
      type: String,
    },
    abstract: {
      type: String,
    },
    tag: {
      type: String,
    },
    link: {
      type: String,
    },
    time: {
      type: String,
    },
    date: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'news',
  },
);

exports.default = _mongoose2.default.model('news', Schema);
