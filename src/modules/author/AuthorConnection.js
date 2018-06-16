// @flow

import { GraphQLInt } from 'graphql';

import { connectionDefinitions } from 'graphql-relay';

import AuthorType from './AuthorType';

export default connectionDefinitions({
  name: 'Author',
  nodeType: AuthorType,
  connectionFields: {
    count: {
      type: GraphQLInt,
    },
  },
});
