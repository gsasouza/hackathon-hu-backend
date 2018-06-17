// @flow

import { GraphQLInt } from 'graphql';

import { connectionDefinitions } from 'graphql-relay';

import NewsType from './NewsType';

export default connectionDefinitions({
  name: 'News',
  nodeType: NewsType,
  connectionFields: {
    count: {
      type: GraphQLInt,
    },
  },
});
