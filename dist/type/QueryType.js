'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

var _graphql = require('graphql');

var _graphqlRelay = require('graphql-relay');

var _NodeInterface = require('../interface/NodeInterface');

var _loaders = require('../loaders');

var _UserConnection = require('../modules/user/UserConnection');

var _UserConnection2 = _interopRequireDefault(_UserConnection);

var _UserType = require('../modules/user/UserType');

var _UserType2 = _interopRequireDefault(_UserType);

var _ArticleConnection = require('../modules/article/ArticleConnection');

var _ArticleConnection2 = _interopRequireDefault(_ArticleConnection);

var _ArticleType = require('../modules/article/ArticleType');

var _ArticleType2 = _interopRequireDefault(_ArticleType);

var _ActionConnection = require('../modules/action/ActionConnection');

var _ActionConnection2 = _interopRequireDefault(_ActionConnection);

var _ActionType = require('../modules/action/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

var _AuthorConnection = require('../modules/author/AuthorConnection');

var _AuthorConnection2 = _interopRequireDefault(_AuthorConnection);

var _AuthorType = require('../modules/author/AuthorType');

var _AuthorType2 = _interopRequireDefault(_AuthorType);

var _LikeConnection = require('../modules/like/LikeConnection');

var _LikeConnection2 = _interopRequireDefault(_LikeConnection);

var _FollowConnection = require('../modules/follow/FollowConnection');

var _FollowConnection2 = _interopRequireDefault(_FollowConnection);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = new _graphql.GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: function fields() {
    return {
      node: _NodeInterface.NodeField,
      me: {
        type: _UserType2.default,
        resolve: function resolve(root, args, context) {
          return context.user ? _loaders.UserLoader.load(context, context.user._id) : null;
        },
      },
      user: {
        type: _UserType2.default,
        args: {
          id: {
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID),
          },
        },
        resolve: function resolve(obj, args, context) {
          var _fromGlobalId = (0, _graphqlRelay.fromGlobalId)(args.id),
            id = _fromGlobalId.id;

          return _loaders.UserLoader.load(context, id);
        },
      },
      users: {
        type: _UserConnection2.default.connectionType,
        args: _extends({}, _graphqlRelay.connectionArgs, {
          search: {
            type: _graphql.GraphQLString,
          },
        }),
        resolve: function resolve(obj, args, context) {
          return _loaders.UserLoader.loadUsers(context, args);
        },
      },
      article: {
        type: _ArticleType2.default,
        args: {
          id: {
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID),
          },
        },
        resolve: function resolve(obj, args, context) {
          var _fromGlobalId2 = (0, _graphqlRelay.fromGlobalId)(args.id),
            id = _fromGlobalId2.id;

          return _loaders.ArticleLoader.load(context, id);
        },
      },
      articles: {
        type: _ArticleConnection2.default.connectionType,
        args: _extends({}, _graphqlRelay.connectionArgs, {
          search: {
            type: _graphql.GraphQLString,
          },
        }),
        resolve: function resolve(obj, args, context) {
          return _loaders.ArticleLoader.loadArticles(context, args);
        },
      },
      action: {
        type: _ActionType2.default,
        args: {
          id: {
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID),
          },
        },
        resolve: function resolve(obj, args, context) {
          var _fromGlobalId3 = (0, _graphqlRelay.fromGlobalId)(args.id),
            id = _fromGlobalId3.id;

          return _loaders.ActionLoader.load(context, id);
        },
      },
      actions: {
        type: _ActionConnection2.default.connectionType,
        args: _extends({}, _graphqlRelay.connectionArgs, {
          search: {
            type: _graphql.GraphQLString,
          },
        }),
        resolve: function resolve(obj, args, context) {
          return _loaders.ActionLoader.loadActions(context, args);
        },
      },
      author: {
        type: _AuthorType2.default,
        args: {
          id: {
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID),
          },
        },
        resolve: function resolve(obj, args, context) {
          var _fromGlobalId4 = (0, _graphqlRelay.fromGlobalId)(args.id),
            id = _fromGlobalId4.id;

          return _loaders.AuthorLoader.load(context, id);
        },
      },
      authors: {
        type: _AuthorConnection2.default.connectionType,
        args: _extends({}, _graphqlRelay.connectionArgs, {
          search: {
            type: _graphql.GraphQLString,
          },
        }),
        resolve: function resolve(obj, args, context) {
          return _loaders.AuthorLoader.loadAuthors(context, args);
        },
      },
      likesFromMe: {
        type: _graphql.GraphQLBoolean,
        args: {
          article: {
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID),
          },
        },
        resolve: function resolve(obj, args, context) {
          var _fromGlobalId5 = (0, _graphqlRelay.fromGlobalId)(args.article),
            id = _fromGlobalId5.id;

          return _loaders.LikeLoader.loadLikesFromMe(context, id);
        },
      },
      likes: {
        type: _LikeConnection2.default.connectionType,
        args: _extends({}, _graphqlRelay.connectionArgs, {
          article: {
            type: _graphql.GraphQLID,
          },
        }),
        resolve: function resolve(obj, args, context) {
          return _loaders.LikeLoader.loadLikes(context, args);
        },
      },
      followsFromMe: {
        type: _graphql.GraphQLBoolean,
        args: {
          article: {
            type: _graphql.GraphQLID,
          },
        },
        resolve: function resolve(obj, args, context) {
          var _fromGlobalId6 = (0, _graphqlRelay.fromGlobalId)(args.article),
            id = _fromGlobalId6.id;

          return _loaders.FollowLoader.loadFollowsFromMe(context, id);
        },
      },

      follows: {
        type: _FollowConnection2.default.connectionType,
        args: _extends({}, _graphqlRelay.connectionArgs, {
          article: {
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID),
          },
        }),
        resolve: function resolve(obj, args, context) {
          return _loaders.FollowLoader.loadFollows(context, args);
        },
      },
    };
  },
});
