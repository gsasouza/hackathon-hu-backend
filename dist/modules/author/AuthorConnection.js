'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _graphql = require('graphql');

var _graphqlRelay = require('graphql-relay');

var _AuthorType = require('./AuthorType');

var _AuthorType2 = _interopRequireDefault(_AuthorType);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = (0, _graphqlRelay.connectionDefinitions)({
  name: 'Author',
  nodeType: _AuthorType2.default,
  connectionFields: {
    count: {
      type: _graphql.GraphQLInt,
    },
  },
});
