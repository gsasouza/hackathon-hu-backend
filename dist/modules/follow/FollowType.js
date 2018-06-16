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
  name: 'Follow',
  description: 'Follow data',
  fields: function fields() {
    return {
      id: (0, _graphqlRelay.globalIdField)('Follow'),
      _id: {
        type: _graphql.GraphQLString,
        resolve: function resolve(like) {
          return like._id;
        },
      },
      article: {
        type: _ArticleType2.default,
        resolve: function resolve(obj, _, context) {
          return _loaders.ArticleLoader.load(context, obj.article);
        },
      },
      user: {
        type: _UserType2.default,
        resolve: function resolve(obj, _, context) {
          return _loaders.ArticleLoader.load(context, obj.user);
        },
      },
    };
  },
  interfaces: function interfaces() {
    return [_NodeInterface.NodeInterface];
  },
});
