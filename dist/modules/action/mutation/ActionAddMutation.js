'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _graphql = require('graphql');

var _graphqlRelay = require('graphql-relay');

var _ActionModel = require('../ActionModel');

var _ActionModel2 = _interopRequireDefault(_ActionModel);

var _ActionLoader = require('../ActionLoader');

var ActionLoader = _interopRequireWildcard(_ActionLoader);

var _ActionType = require('../ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

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
  name: 'ActionAdd',
  inputFields: {
    title: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
    },
    description: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
    },
    unit: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
    },
  },
  mutateAndGetPayload: (function() {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee(_ref2, context) {
        var title = _ref2.title,
          description = _ref2.description,
          unit = _ref2.unit;
        var user, action;
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

                  throw new Error('Unauthenticated user');

                case 3:
                  _context.next = 5;
                  return new _ActionModel2.default({
                    title: title,
                    description: description,
                    unit: unit,
                    createdBy: user,
                  }).save();

                case 5:
                  action = _context.sent;
                  return _context.abrupt('return', {
                    actionId: action._id,
                    error: null,
                  });

                case 7:
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
    action: {
      type: _ActionType2.default,
      resolve: (function() {
        var _ref3 = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(_ref4, args, context) {
            var actionId = _ref4.actionId;
            return regeneratorRuntime.wrap(
              function _callee2$(_context2) {
                while (1) {
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      return _context2.abrupt('return', ActionLoader.load(context, actionId));

                    case 1:
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

        return function resolve(_x3, _x4, _x5) {
          return _ref3.apply(this, arguments);
        };
      })(),
    },
    error: {
      type: _graphql.GraphQLString,
      resolve: function resolve(_ref5) {
        var error = _ref5.error;
        return error;
      },
    },
  },
});
