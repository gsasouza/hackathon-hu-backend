'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.loadLikesFromMe = exports.loadLikes = exports.clearCache = exports.load = exports.getLoader = undefined;

var _dataloader = require('dataloader');

var _dataloader2 = _interopRequireDefault(_dataloader);

var _graphqlMongooseLoader = require('@entria/graphql-mongoose-loader');

var _graphqlRelay = require('graphql-relay');

var _LikeModel = require('./LikeModel');

var _LikeModel2 = _interopRequireDefault(_LikeModel);

var _NewsLoader = require('../news/NewsLoader');

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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var Like = function Like(data) {
  _classCallCheck(this, Like);

  this.id = data.id;
  this._id = data._id;
  this.user = data.user;
  this.article = data.article;
};

exports.default = Like;
var getLoader = (exports.getLoader = function getLoader() {
  return new _dataloader2.default(function(ids) {
    return (0, _graphqlMongooseLoader.mongooseLoader)(_LikeModel2.default, ids);
  });
});

var viewerCanSee = function viewerCanSee() {
  return true;
};

var load = (exports.load = (function() {
  var _ref = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee(_ref2, id) {
      var dataloaders = _ref2.dataloaders;
      var data;
      return regeneratorRuntime.wrap(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                if (id) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return', null);

              case 2:
                _context.prev = 2;
                _context.next = 5;
                return dataloaders.LikeLoader.load(id.toString());

              case 5:
                data = _context.sent;

                if (data) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt('return', null);

              case 8:
                return _context.abrupt('return', viewerCanSee() ? new Like(data) : null);

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](2);
                return _context.abrupt('return', null);

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        },
        _callee,
        undefined,
        [[2, 11]],
      );
    }),
  );

  return function load(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

var clearCache = (exports.clearCache = function clearCache(_ref3, id) {
  var dataloaders = _ref3.dataloaders;

  return dataloaders.LikeLoader.clear(id.toString());
});

var removeFalsy = function removeFalsy(obj) {
  var newObj = {};
  Object.keys(obj).forEach(function(prop) {
    if (obj[prop]) {
      newObj[prop] = obj[prop];
    }
  });
  return newObj;
};

var loadLikes = (exports.loadLikes = (function() {
  var _ref4 = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(context, args) {
      var likes;
      return regeneratorRuntime.wrap(
        function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                likes = _LikeModel2.default.find({
                  article: (0, _graphqlRelay.fromGlobalId)(args.article).id,
                });
                return _context2.abrupt(
                  'return',
                  (0, _graphqlMongooseLoader.connectionFromMongoCursor)({
                    cursor: likes,
                    context: context,
                    args: removeFalsy(args),
                    loader: load,
                  }),
                );

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        },
        _callee2,
        undefined,
      );
    }),
  );

  return function loadLikes(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
})());

var loadLikesFromMe = (exports.loadLikesFromMe = (function() {
  var _ref5 = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee3(context, args) {
      var user, like;
      return regeneratorRuntime.wrap(
        function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                user = context.user;
                _context3.next = 3;
                return _LikeModel2.default.find({ user: user._id, article: args });

              case 3:
                like = _context3.sent;
                return _context3.abrupt('return', !!like.length);

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        },
        _callee3,
        undefined,
      );
    }),
  );

  return function loadLikesFromMe(_x5, _x6) {
    return _ref5.apply(this, arguments);
  };
})());
