// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField } from 'graphql-relay';

import { NodeInterface } from '../../interface/NodeInterface';

import ArticleType from '../article/ArticleType';
import UserType from '../user/UserType';

import { UserLoader, ArticleLoader } from '../../loaders';

export default new GraphQLObjectType({
  name: 'Follow',
  description: 'Follow data',
  fields: () => ({
    id: globalIdField('Follow'),
    _id: {
      type: GraphQLString,
      resolve: like => like._id,
    },
    article: {
      type: ArticleType,
      resolve: (obj, _, context) => ArticleLoader.load(context, obj.article),
    },
    user: {
      type: UserType,
      resolve: (obj, _, context) => ArticleLoader.load(context, obj.user),
    },
  }),
  interfaces: () => [NodeInterface],
});
