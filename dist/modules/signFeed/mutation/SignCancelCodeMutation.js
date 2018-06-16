'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _graphql = require('graphql');

var _graphqlRelay = require('graphql-relay');

var _SignFeedModel = require('../SignFeedModel');

var _SignFeedModel2 = _interopRequireDefault(_SignFeedModel);

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
  name: 'SignFeedCancelCode',
  inputFields: {
    email: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
    },
  },
  mutateAndGetPayload: (function() {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee(_ref2) {
        var email = _ref2.email,
          code = _ref2.code;
        var signedEmail;
        return regeneratorRuntime.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.next = 2;
                  return _SignFeedModel2.default.findOneAndRemove({
                    email: email,
                    code: code,
                  });

                case 2:
                  signedEmail = _context.sent;

                  if (signedEmail) {
                    _context.next = 5;
                    break;
                  }

                  return _context.abrupt('return', {
                    error: 'Email não encontrado ou código inválido',
                  });

                case 5:
                  return _context.abrupt('return', {
                    error: null,
                  });

                case 6:
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

    return function mutateAndGetPayload(_x) {
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
