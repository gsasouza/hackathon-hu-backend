'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _graphql = require('graphql');

var _graphqlRelay = require('graphql-relay');

var _ArticleType = require('./ArticleType');

var _ArticleType2 = _interopRequireDefault(_ArticleType);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = (0, _graphqlRelay.connectionDefinitions)({
  name: 'Article',
  nodeType: _ArticleType2.default,
  connectionFields: {
    count: {
      type: _graphql.GraphQLInt,
    },
  },
});
