'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _graphql = require('graphql');

var _graphqlRelay = require('graphql-relay');

var _NodeInterface = require('../../interface/NodeInterface');

var _ArticleType = require('../article/ArticleType');

var _ArticleType2 = _interopRequireDefault(_ArticleType);

var _UserType = require('../user/UserType');

var _UserType2 = _interopRequireDefault(_UserType);

var _loaders = require('../../loaders');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = new _graphql.GraphQLObjectType({
  name: 'News',
  description: 'News data',
  fields: function fields() {
    return {
      id: (0, _graphqlRelay.globalIdField)('News'),
      _id: {
        type: _graphql.GraphQLString,
        resolve: function resolve(news) {
          return news._id;
        },
      },
      title: {
        type: _graphql.GraphQLString,
        resolve: function resolve(news) {
          return news.title;
        },
      },
      abstract: {
        type: _graphql.GraphQLString,
        resolve: function resolve(news) {
          return news.abstract;
        },
      },
      tag: {
        type: _graphql.GraphQLString,
        resolve: function resolve(news) {
          return news.tag;
        },
      },
      link: {
        type: _graphql.GraphQLString,
        resolve: function resolve(news) {
          return news.link;
        },
      },
      time: {
        type: _graphql.GraphQLString,
        resolve: function resolve(news) {
          return news.time;
        },
      },
      date: {
        type: _graphql.GraphQLString,
        resolve: function resolve(news) {
          return news.date;
        },
      },
      image: {
        type: _graphql.GraphQLString,
        resolve: function resolve(news) {
          return news.image;
        },
      },
    };
  },
  interfaces: function interfaces() {
    return [_NodeInterface.NodeInterface];
  },
});
