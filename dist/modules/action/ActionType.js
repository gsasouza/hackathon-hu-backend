'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _graphql = require('graphql');

var _graphqlRelay = require('graphql-relay');

var _NodeInterface = require('../../interface/NodeInterface');

exports.default = new _graphql.GraphQLObjectType({
  name: 'Action',
  description: 'Action data',
  fields: function fields() {
    return {
      id: (0, _graphqlRelay.globalIdField)('Action'),
      _id: {
        type: _graphql.GraphQLString,
        resolve: function resolve(action) {
          return action._id;
        },
      },
      title: {
        type: _graphql.GraphQLString,
        resolve: function resolve(action) {
          return action.title;
        },
      },
      description: {
        type: _graphql.GraphQLString,
        resolve: function resolve(action) {
          console.log(action);
          return action.description;
        },
      },
      code: {
        type: _graphql.GraphQLString,
        resolve: function resolve(action) {
          return action.code;
        },
      },
      unit: {
        type: _graphql.GraphQLString,
        resolve: function resolve(action) {
          return action.unit;
        },
      },
      situation: {
        type: _graphql.GraphQLString,
        resolve: function resolve(action) {
          return action.situation;
        },
      },
    };
  },
  interfaces: function interfaces() {
    return [_NodeInterface.NodeInterface];
  },
});
