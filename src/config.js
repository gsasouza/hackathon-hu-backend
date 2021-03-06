// @flow

import path from 'path';
import dotenvSafe from 'dotenv-safe';

const root = path.join.bind(this, __dirname, '../');

dotenvSafe.load({
  path: root('.env'),
  sample: root('.env.example'),
});

// Database Settings
const dBdevelopment = process.env.MONGO_URL || 'mongodb://backend:hackathon-hu123@ds257640.mlab.com:57640/hackathon-hu';
const dBproduction = process.env.MONGO_URL || 'mongodb://backend:hackathon-hu123@ds257640.mlab.com:57640/hackathon-hu';

// Test Database Settings
// const test = 'mongodb://localhost/awesome-test';

// Export DB Settings
export const databaseConfig = process.env.NODE_ENV === 'production' ? dBproduction : dBdevelopment;

// Export GraphQL Server settings
export const graphqlPort = process.env.PORT || 5000;
export const jwtSecret = process.env.JWT_KEY || 'secret_key';

//mail
export const mailGunKey = process.env.MAILGUN_KEY || '';
export const mailGunDomain = process.env.MAILGUN_DOMAIN || '';
