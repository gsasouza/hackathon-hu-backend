'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _graphql = require('graphql');

var _graphqlRelay = require('graphql-relay');

var _ActionType = require('./ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = (0, _graphqlRelay.connectionDefinitions)({
  name: 'Action',
  nodeType: _ActionType2.default,
  connectionFields: {
    count: {
      type: _graphql.GraphQLInt,
    },
  },
});
