'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _graphql = require('graphql');

var _graphqlRelay = require('graphql-relay');

var _FollowType = require('./FollowType');

var _FollowType2 = _interopRequireDefault(_FollowType);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = (0, _graphqlRelay.connectionDefinitions)({
  name: 'Follow',
  nodeType: _FollowType2.default,
  connectionFields: {
    count: {
      type: _graphql.GraphQLInt,
    },
  },
});
