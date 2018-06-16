import { mailGunKey, mailGunDomain } from '../config';
const mailgun = require('mailgun-js')({ apiKey: mailGunKey, domain: mailGunDomain });

export const sendMail = data => {
  mailgun.messages().send(data, function(error, body) {
    if (error) console.log(error);
    console.log(body);
  });
};
