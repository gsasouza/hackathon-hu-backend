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
        resolve: function resolve(article) {
          return article._id;
        },
      },
      title: {
        type: _graphql.GraphQLString,
        resolve: function resolve(article) {
          return article.title;
        },
      },
      code: {
        type: _graphql.GraphQLString,
        resolve: function resolve(article) {
          return article.code;
        },
      },
      unit: {
        type: _graphql.GraphQLString,
        resolve: function resolve(article) {
          return article.unit;
        },
      },
      situation: {
        type: _graphql.GraphQLString,
        resolve: function resolve(article) {
          return article.situation;
        },
      },
    };
  },
  interfaces: function interfaces() {
    return [_NodeInterface.NodeInterface];
  },
});
