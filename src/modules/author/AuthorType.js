// @flow

import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import { globalIdField } from 'graphql-relay';

import { NodeInterface } from '../../interface/NodeInterface';

export default new GraphQLObjectType({
  name: 'Author',
  description: 'Author data',
  fields: () => ({
    id: globalIdField('Author'),
    _id: {
      type: GraphQLString,
      resolve: author => author._id,
    },
    name: {
      type: GraphQLString,
      resolve: author => author.name,
    },
    email: {
      type: GraphQLString,
      resolve: author => author.email,
    },
    unit: {
      type: GraphQLString,
      resolve: author => author.unit,
    },
  }),
  interfaces: () => [NodeInterface],
});
