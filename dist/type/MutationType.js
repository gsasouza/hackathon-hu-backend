'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _graphql = require('graphql');

var _LoginEmailMutation = require('../modules/user/mutation/LoginEmailMutation');

var _LoginEmailMutation2 = _interopRequireDefault(_LoginEmailMutation);

var _RegisterEmailMutation = require('../modules/user/mutation/RegisterEmailMutation');

var _RegisterEmailMutation2 = _interopRequireDefault(_RegisterEmailMutation);

var _ChangePasswordMutation = require('../modules/user/mutation/ChangePasswordMutation');

var _ChangePasswordMutation2 = _interopRequireDefault(_ChangePasswordMutation);

var _ArticleAddMutation = require('../modules/article/mutation/ArticleAddMutation');

var _ArticleAddMutation2 = _interopRequireDefault(_ArticleAddMutation);

var _AuthorAddMutation = require('../modules/author/mutation/AuthorAddMutation');

var _AuthorAddMutation2 = _interopRequireDefault(_AuthorAddMutation);

var _AuthorRemoveMutation = require('../modules/author/mutation/AuthorRemoveMutation');

var _AuthorRemoveMutation2 = _interopRequireDefault(_AuthorRemoveMutation);

var _SignFeedMutation = require('../modules/signFeed/mutation/SignFeedMutation');

var _SignFeedMutation2 = _interopRequireDefault(_SignFeedMutation);

var _SignCancelMutation = require('../modules/signFeed/mutation/SignCancelMutation');

var _SignCancelMutation2 = _interopRequireDefault(_SignCancelMutation);

var _SignCancelCodeMutation = require('../modules/signFeed/mutation/SignCancelCodeMutation');

var _SignCancelCodeMutation2 = _interopRequireDefault(_SignCancelCodeMutation);

var _LikeAddMutation = require('../modules/like/mutation/LikeAddMutation');

var _LikeAddMutation2 = _interopRequireDefault(_LikeAddMutation);

var _LikeRemoveMutation = require('../modules/like/mutation/LikeRemoveMutation');

var _LikeRemoveMutation2 = _interopRequireDefault(_LikeRemoveMutation);

var _FollowAddMutation = require('../modules/follow/mutation/FollowAddMutation');

var _FollowAddMutation2 = _interopRequireDefault(_FollowAddMutation);

var _FollowRemoveMutation = require('../modules/follow/mutation/FollowRemoveMutation');

var _FollowRemoveMutation2 = _interopRequireDefault(_FollowRemoveMutation);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = new _graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: function fields() {
    return {
      // auth
      LoginEmail: _LoginEmailMutation2.default,
      RegisterEmail: _RegisterEmailMutation2.default,
      ChangePassword: _ChangePasswordMutation2.default,
      // article
      ArticleAdd: _ArticleAddMutation2.default,
      //author
      AuthorAdd: _AuthorAddMutation2.default,
      AuthorRemove: _AuthorRemoveMutation2.default,
      // feed
      SignFeed: _SignFeedMutation2.default,
      SignFeedCancel: _SignCancelMutation2.default,
      SignFeedCancelCode: _SignCancelCodeMutation2.default,
      // like
      LikeAdd: _LikeAddMutation2.default,
      LikeRemove: _LikeRemoveMutation2.default,
      // follow
      FollowAdd: _FollowAddMutation2.default,
      FollowRemove: _FollowRemoveMutation2.default,
    };
  },
});
