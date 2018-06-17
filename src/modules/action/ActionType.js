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
      resolve: action => action._id,
    },
    title: {
      type: GraphQLString,
      resolve: action => action.title,
    },
    description: {
      type: GraphQLString,
      resolve: action => {
        console.log(action);
        return action.description;
      },
    },
    code: {
      type: GraphQLString,
      resolve: action => action.code,
    },
    unit: {
      type: GraphQLString,
      resolve: action => action.unit,
    },
    situation: {
      type: GraphQLString,
      resolve: action => action.situation,
    },
  }),
  interfaces: () => [NodeInterface],
});
