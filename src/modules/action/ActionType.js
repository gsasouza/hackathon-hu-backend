// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField } from 'graphql-relay';

import { NodeInterface } from '../../interface/NodeInterface';

export default new GraphQLObjectType({
  name: 'Action',
  description: 'Action data',
  fields: () => ({
    id: globalIdField('Action'),
    _id: {
      type: GraphQLString,
      resolve: article => article._id,
    },
    title: {
      type: GraphQLString,
      resolve: article => article.title,
    },
    code: {
      type: GraphQLString,
      resolve: article => article.code,
    },
    unit: {
      type: GraphQLString,
      resolve: article => article.unit,
    },
    situation: {
      type: GraphQLString,
      resolve: article => article.situation,
    },
  }),
  interfaces: () => [NodeInterface],
});
