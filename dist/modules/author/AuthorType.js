'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _graphql = require('graphql');

var _graphqlRelay = require('graphql-relay');

var _NodeInterface = require('../../interface/NodeInterface');

exports.default = new _graphql.GraphQLObjectType({
  name: 'Author',
  description: 'Author data',
  fields: function fields() {
    return {
      id: (0, _graphqlRelay.globalIdField)('Author'),
      _id: {
        type: _graphql.GraphQLString,
        resolve: function resolve(author) {
          return author._id;
        },
      },
      name: {
        type: _graphql.GraphQLString,
        resolve: function resolve(author) {
          return author.name;
        },
      },
      email: {
        type: _graphql.GraphQLString,
        resolve: function resolve(author) {
          return author.email;
        },
      },
      unit: {
        type: _graphql.GraphQLString,
        resolve: function resolve(author) {
          return author.unit;
        },
      },
    };
  },
  interfaces: function interfaces() {
    return [_NodeInterface.NodeInterface];
  },
});
