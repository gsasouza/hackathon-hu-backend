'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _graphql = require('graphql');

var _graphqlRelay = require('graphql-relay');

var _NodeInterface = require('../../interface/NodeInterface');

exports.default = new _graphql.GraphQLObjectType({
  name: 'Article',
  description: 'Article data',
  fields: function fields() {
    return {
      id: (0, _graphqlRelay.globalIdField)('Article'),
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
      authors: {
        type: (0, _graphql.GraphQLList)(_graphql.GraphQLString),
        resolve: function resolve(article) {
          return article.authors;
        },
      },
      doiCode: {
        type: _graphql.GraphQLString,
        resolve: function resolve(article) {
          return article.doiCode;
        },
      },
      publishDate: {
        type: _graphql.GraphQLString,
        resolve: function resolve(article) {
          return article.publishDate;
        },
      },
      category: {
        type: _graphql.GraphQLString,
        resolve: function resolve(article) {
          return article.category;
        },
      },
      magazine: {
        type: _graphql.GraphQLString,
        resolve: function resolve(article) {
          return article.magazine;
        },
      },
      url: {
        type: _graphql.GraphQLString,
        resolve: function resolve(article) {
          return article.url;
        },
      },
    };
  },
  interfaces: function interfaces() {
    return [_NodeInterface.NodeInterface];
  },
});
