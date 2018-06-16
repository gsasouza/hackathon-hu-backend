'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _graphql = require('graphql');

var _graphqlRelay = require('graphql-relay');

var _ArticleModel = require('../../article/ArticleModel');

var _ArticleModel2 = _interopRequireDefault(_ArticleModel);

var _LikeModel = require('../LikeModel');

var _LikeModel2 = _interopRequireDefault(_LikeModel);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _asyncToGenerator(fn) {
  return function() {
    var gen = fn.apply(this, arguments);
    return new Promise(function(resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(
            function(value) {
              step('next', value);
            },
            function(err) {
              step('throw', err);
            },
          );
        }
      }
      return step('next');
    });
  };
}

exports.default = (0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'LikeRemove',
  inputFields: {
    articleId: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID),
    },
  },
  mutateAndGetPayload: (function() {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee(_ref2, context) {
        var articleId = _ref2.articleId;
        var user, article;
        return regeneratorRuntime.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  user = context.user;

                  if (user) {
                    _context.next = 3;
                    break;
                  }

                  return _context.abrupt('return', {
                    error: 'Usuário não autenticado',
                  });

                case 3:
                  _context.next = 5;
                  return _ArticleModel2.default.findOne({
                    _id: (0, _graphqlRelay.fromGlobalId)(articleId).id,
                  });

                case 5:
                  article = _context.sent;

                  if (article) {
                    _context.next = 8;
                    break;
                  }

                  return _context.abrupt('return', {
                    error: 'Pesquisa não encontrada',
                  });

                case 8:
                  _context.next = 10;
                  return _LikeModel2.default.findOneAndRemove({
                    article: (0, _graphqlRelay.fromGlobalId)(articleId).id,
                    user: user,
                  });

                case 10:
                  return _context.abrupt('return', {
                    error: null,
                  });

                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          },
          _callee,
          undefined,
        );
      }),
    );

    return function mutateAndGetPayload(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  })(),
  outputFields: {
    error: {
      type: _graphql.GraphQLString,
      resolve: function resolve(_ref3) {
        var error = _ref3.error;
        return error;
      },
    },
  },
});
