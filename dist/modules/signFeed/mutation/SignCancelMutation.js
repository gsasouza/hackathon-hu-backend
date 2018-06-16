'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _graphql = require('graphql');

var _graphqlRelay = require('graphql-relay');

var _SignFeedModel = require('../SignFeedModel');

var _SignFeedModel2 = _interopRequireDefault(_SignFeedModel);

var _sendMail = require('../../../utils/sendMail');

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

var randomString = function randomString() {
  return Math.random()
    .toString(36)
    .substring(7)
    .toUpperCase();
};

exports.default = (0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'SignFeedCancel',
  inputFields: {
    email: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
    },
  },
  mutateAndGetPayload: (function() {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee(_ref2) {
        var email = _ref2.email;
        var signedEmail, code, emailData;
        return regeneratorRuntime.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.next = 2;
                  return _SignFeedModel2.default.findOne({
                    email: email,
                  });

                case 2:
                  signedEmail = _context.sent;

                  if (signedEmail) {
                    _context.next = 5;
                    break;
                  }

                  return _context.abrupt('return', {
                    error: 'E-mail não encontrado',
                  });

                case 5:
                  code = randomString();
                  _context.next = 8;
                  return _SignFeedModel2.default.findOneAndUpdate({ email: email }, { code: code });

                case 8:
                  emailData = {
                    from: 'NoReply <noreply@umesh.com>',
                    to: email,
                    subject: 'Código de Cancelamento',
                    html: '<div> Seu c\xF3digo de cancelamento \xE9: <strong> ' + code + ' </strong> </div>',
                  };

                  (0, _sendMail.sendMail)(emailData);

                  return _context.abrupt('return', {
                    email: email,
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

    return function mutateAndGetPayload(_x) {
      return _ref.apply(this, arguments);
    };
  })(),
  outputFields: {
    email: {
      type: _graphql.GraphQLString,
      resolve: function resolve(_ref3) {
        var email = _ref3.email;
        return email;
      },
    },
    error: {
      type: _graphql.GraphQLString,
      resolve: function resolve(_ref4) {
        var error = _ref4.error;
        return error;
      },
    },
  },
});
