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
    article: {
      type: _mongoose2.default.Schema.Types.ObjectId,
      ref: 'Article',
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    createdBy: {
      type: _mongoose2.default.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'post',
  },
);

exports.default = _mongoose2.default.model('post', Schema);
