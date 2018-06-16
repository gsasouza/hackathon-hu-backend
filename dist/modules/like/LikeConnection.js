'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _graphql = require('graphql');

var _graphqlRelay = require('graphql-relay');

var _LikeType = require('./LikeType');

var _LikeType2 = _interopRequireDefault(_LikeType);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = (0, _graphqlRelay.connectionDefinitions)({
  name: 'Like',
  nodeType: _LikeType2.default,
  connectionFields: {
    count: {
      type: _graphql.GraphQLInt,
    },
  },
});
