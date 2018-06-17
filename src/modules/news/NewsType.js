// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField } from 'graphql-relay';

import { NodeInterface } from '../../interface/NodeInterface';

import ArticleType from '../article/ArticleType';
import UserType from '../user/UserType';

import { UserLoader, ArticleLoader } from '../../loaders';

export default new GraphQLObjectType({
  name: 'News',
  description: 'News data',
  fields: () => ({
    id: globalIdField('News'),
    _id: {
      type: GraphQLString,
      resolve: news => news._id,
    },
    title: {
      type: GraphQLString,
      resolve: news => news.title,
    },
    abstract: {
      type: GraphQLString,
      resolve: news => news.abstract,
    },
    tag: {
      type: GraphQLString,
      resolve: news => news.tag,
    },
    link: {
      type: GraphQLString,
      resolve: news => news.link,
    },
    time: {
      type: GraphQLString,
      resolve: news => news.time,
    },
    date: {
      type: GraphQLString,
      resolve: news => news.date,
    },
    image: {
      type: GraphQLString,
      resolve: news => news.image,
    },
  }),
  interfaces: () => [NodeInterface],
});
