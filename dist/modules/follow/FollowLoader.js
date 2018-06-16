'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.loadFollowsFromMe = exports.loadFollows = exports.clearCache = exports.load = exports.getLoader = undefined;

var _dataloader = require('dataloader');

var _dataloader2 = _interopRequireDefault(_dataloader);

var _graphqlMongooseLoader = require('@entria/graphql-mongoose-loader');

var _FollowModel = require('./FollowModel');

var _FollowModel2 = _interopRequireDefault(_FollowModel);

var _LikeModel = require('../like/LikeModel');

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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var Follow = function Follow(data) {
  _classCallCheck(this, Follow);

  this.id = data.id;
  this._id = data._id;
  this.user = data.user;
  this.article = data.article;
};

exports.default = Follow;
var getLoader = (exports.getLoader = function getLoader() {
  return new _dataloader2.default(function(ids) {
    return (0, _graphqlMongooseLoader.mongooseLoader)(_FollowModel2.default, ids);
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
                return dataloaders.FollowLoader.load(id.toString());

              case 5:
                data = _context.sent;

                if (data) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt('return', null);

              case 8:
                return _context.abrupt('return', viewerCanSee() ? new Follow(data) : null);

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

  return dataloaders.FollowLoader.clear(id.toString());
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

var loadFollows = (exports.loadFollows = (function() {
  var _ref4 = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(context, args) {
      var actions;
      return regeneratorRuntime.wrap(
        function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                actions = _FollowModel2.default.find({});
                return _context2.abrupt(
                  'return',
                  (0, _graphqlMongooseLoader.connectionFromMongoCursor)({
                    cursor: actions,
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

  return function loadFollows(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
})());

var loadFollowsFromMe = (exports.loadFollowsFromMe = (function() {
  var _ref5 = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee3(context, args) {
      var user, follow;
      return regeneratorRuntime.wrap(
        function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                user = context.user;
                _context3.next = 3;
                return _FollowModel2.default.find({ user: user._id, article: args });

              case 3:
                follow = _context3.sent;
                return _context3.abrupt('return', !!follow.length);

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

  return function loadFollowsFromMe(_x5, _x6) {
    return _ref5.apply(this, arguments);
  };
})());
