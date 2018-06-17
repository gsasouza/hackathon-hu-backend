// @flow
import 'babel-polyfill';
import app from './app';
import connectDatabase from './database';
// import { graphqlPort } from './config';
const port = process.env.PORT || 5000;
import { importFromJson } from './modules/article/ArticleLoader';

(async () => {
  try {
    const info = await connectDatabase();
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
    // await importFromJson();
  } catch (error) {
    console.error('Unable to connect to database');
    process.exit(1);
  }

  await app.listen(port);
  console.log(`Server started on port ${port}`);
})();
