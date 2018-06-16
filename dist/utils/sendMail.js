'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.sendMail = undefined;

var _config = require('../config');

var mailgun = require('mailgun-js')({ apiKey: _config.mailGunKey, domain: _config.mailGunDomain });

var sendMail = (exports.sendMail = function sendMail(data) {
  mailgun.messages().send(data, function(error, body) {
    if (error) console.log(error);
    console.log(body);
  });
});
