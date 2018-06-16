// @flow

import { GraphQLInt } from 'graphql';

import { connectionDefinitions } from 'graphql-relay';

import FollowType from './FollowType';

export default connectionDefinitions({
  name: 'Follow',
  nodeType: FollowType,
  connectionFields: {
    count: {
      type: GraphQLInt,
    },
  },
});
