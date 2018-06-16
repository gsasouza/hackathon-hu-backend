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
      required: true,
    },
    authors: {
      type: [String],
      required: true,
    },
    doiCode: {
      type: String,
      required: true,
      default: '00',
    },
    publishDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    category: {
      type: String,
    },
    magazine: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'article',
  },
);

exports.default = _mongoose2.default.model('Article', Schema);
