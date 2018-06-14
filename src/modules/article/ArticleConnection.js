// @flow

import { GraphQLInt } from 'graphql';

import { connectionDefinitions } from 'graphql-relay';

import ArticleType from './ArticleType';

export default connectionDefinitions({
  name: 'Article',
  nodeType: ArticleType,
  connectionFields: {
    count: {
      type: GraphQLInt,
    },
  },
});
