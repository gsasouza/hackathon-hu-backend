// @flow

import { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLList } from 'graphql';
import { globalIdField } from 'graphql-relay';

import { NodeInterface } from '../../interface/NodeInterface';
import * as UserLoader from '../user/UserLoader';

export default new GraphQLObjectType({
  name: 'Article',
  description: 'Article data',
  fields: () => ({
    id: globalIdField('Article'),
    _id: {
      type: GraphQLString,
      resolve: article => article._id,
    },
    title: {
      type: GraphQLString,
      resolve: article => article.title,
    },
    description: {
      type: GraphQLString,
      resolve: article => article.description,
    },
    category: {
      type: GraphQLString,
      resolve: article => article.category,
    },
    createdBy: {
      type: GraphQLBoolean,
      resolve: (article, args, context) => UserLoader.load(context, article.createdBy),
    },
    tags: {
      type: new GraphQLList(GraphQLString),
      resolve: article => article.tags,
    },
  }),
  interfaces: () => [NodeInterface],
});
