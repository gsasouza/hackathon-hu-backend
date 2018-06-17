'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.NewsLoader = exports.FollowLoader = exports.LikeLoader = exports.AuthorLoader = exports.ActionLoader = exports.ArticleLoader = exports.UserLoader = undefined;

var _UserLoader2 = require('./modules/user/UserLoader');

var _UserLoader = _interopRequireWildcard(_UserLoader2);

var _ArticleLoader2 = require('./modules/article/ArticleLoader');

var _ArticleLoader = _interopRequireWildcard(_ArticleLoader2);

var _ActionLoader2 = require('./modules/action/ActionLoader');

var _ActionLoader = _interopRequireWildcard(_ActionLoader2);

var _AuthorLoader2 = require('./modules/author/AuthorLoader');

var _AuthorLoader = _interopRequireWildcard(_AuthorLoader2);

var _LikeLoader2 = require('./modules/like/LikeLoader');

var _LikeLoader = _interopRequireWildcard(_LikeLoader2);

var _FollowLoader2 = require('./modules/follow/FollowLoader');

var _FollowLoader = _interopRequireWildcard(_FollowLoader2);

var _NewsLoader2 = require('./modules/news/NewsLoader');

var _NewsLoader = _interopRequireWildcard(_NewsLoader2);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

exports.UserLoader = _UserLoader;
exports.ArticleLoader = _ArticleLoader;
exports.ActionLoader = _ActionLoader;
exports.AuthorLoader = _AuthorLoader;
exports.LikeLoader = _LikeLoader;
exports.FollowLoader = _FollowLoader;
exports.NewsLoader = _NewsLoader;
