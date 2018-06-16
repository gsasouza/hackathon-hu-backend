'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.loadArticles = exports.clearCache = exports.load = exports.getLoader = undefined;

var _dataloader = require('dataloader');

var _dataloader2 = _interopRequireDefault(_dataloader);

var _graphqlMongooseLoader = require('@entria/graphql-mongoose-loader');

var _ArticleModel = require('./ArticleModel');

var _ArticleModel2 = _interopRequireDefault(_ArticleModel);

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

var Article = function Article(data) {
  _classCallCheck(this, Article);

  this.id = data.id;
  this._id = data._id;
  this.title = data.title;
  this.authors = data.authors;
  this.doiCode = data.doiCode;
  this.publishDate = data.publishDate;
  this.category = data.category;
  this.magazine = data.magazine;
  this.url = data.url;
  this.category = data.category;
};

exports.default = Article;
var getLoader = (exports.getLoader = function getLoader() {
  return new _dataloader2.default(function(ids) {
    return (0, _graphqlMongooseLoader.mongooseLoader)(_ArticleModel2.default, ids);
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
                return dataloaders.ArticleLoader.load(id.toString());

              case 5:
                data = _context.sent;

                if (data) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt('return', null);

              case 8:
                return _context.abrupt('return', viewerCanSee() ? new Article(data) : null);

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

  return dataloaders.ArticleLoader.clear(id.toString());
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

var loadArticles = (exports.loadArticles = (function() {
  var _ref4 = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(context, args) {
      var articles;
      return regeneratorRuntime.wrap(
        function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                articles = _ArticleModel2.default.find({});
                return _context2.abrupt(
                  'return',
                  (0, _graphqlMongooseLoader.connectionFromMongoCursor)({
                    cursor: articles,
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

  return function loadArticles(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
})());
