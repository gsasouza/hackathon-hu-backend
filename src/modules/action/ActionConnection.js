// @flow

import { GraphQLInt } from 'graphql';

import { connectionDefinitions } from 'graphql-relay';

import ActionType from './ActionType';

export default connectionDefinitions({
  name: 'Action',
  nodeType: ActionType,
  connectionFields: {
    count: {
      type: GraphQLInt,
    },
  },
});
