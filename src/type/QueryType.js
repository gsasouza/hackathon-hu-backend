// @flow

import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';
import { globalIdField, connectionArgs, fromGlobalId } from 'graphql-relay';

import { NodeField } from '../interface/NodeInterface';
import { UserLoader, ArticleLoader } from '../loaders';

import UserConnection from '../modules/user/UserConnection';
import UserType from '../modules/user/UserType';

import ArticleConnection from '../modules/article/ArticleConnection';
import ArticleType from '../modules/article/ArticleType';

export default new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: () => ({
    node: NodeField,
    me: {
      type: UserType,
      resolve: (root, args, context) => (context.user ? UserLoader.load(context, context.user._id) : null),
    },
    user: {
      type: UserType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: (obj, args, context) => {
        const { id } = fromGlobalId(args.id);
        return UserLoader.load(context, id);
      },
    },
    users: {
      type: UserConnection.connectionType,
      args: {
        ...connectionArgs,
        search: {
          type: GraphQLString,
        },
      },
      resolve: (obj, args, context) => UserLoader.loadUsers(context, args),
    },
    article: {
      type: ArticleType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: (obj, args, context) => {
        const { id } = fromGlobalId(args.id);
        return ArticleLoader.load(context, id);
      },
    },
    articles: {
      type: ArticleConnection.connectionType,
      args: {
        ...connectionArgs,
        search: {
          type: GraphQLString,
        },
      },
      resolve: (obj, args, context) => ArticleLoader.loadArticles(context, args),
    },
  }),
});
