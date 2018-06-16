// @flow

import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import { globalIdField } from 'graphql-relay';

import { NodeInterface } from '../../interface/NodeInterface';

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
    authors: {
      type: GraphQLList(GraphQLString),
      resolve: article => article.authors,
    },
    doiCode: {
      type: GraphQLString,
      resolve: article => article.doiCode,
    },
    publishDate: {
      type: GraphQLString,
      resolve: article => article.publishDate,
    },
    category: {
      type: GraphQLString,
      resolve: article => article.category,
    },
    magazine: {
      type: GraphQLString,
      resolve: article => article.magazine,
    },
    url: {
      type: GraphQLString,
      resolve: article => article.url,
    },
  }),
  interfaces: () => [NodeInterface],
});
