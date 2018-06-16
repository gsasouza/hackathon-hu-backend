// @flow

import { GraphQLInt } from 'graphql';

import { connectionDefinitions } from 'graphql-relay';

import LikeType from './LikeType';

export default connectionDefinitions({
  name: 'Like',
  nodeType: LikeType,
  connectionFields: {
    count: {
      type: GraphQLInt,
    },
  },
});
