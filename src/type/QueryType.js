// @flow

import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID, GraphQLBoolean } from 'graphql';
import { globalIdField, connectionArgs, fromGlobalId } from 'graphql-relay';

import { NodeField } from '../interface/NodeInterface';
import { UserLoader, ArticleLoader, ActionLoader, AuthorLoader, LikeLoader, FollowLoader } from '../loaders';

import UserConnection from '../modules/user/UserConnection';
import UserType from '../modules/user/UserType';

import ArticleConnection from '../modules/article/ArticleConnection';
import ArticleType from '../modules/article/ArticleType';

import ActionConnection from '../modules/action/ActionConnection';
import ActionType from '../modules/action/ActionType';

import AuthorConnection from '../modules/author/AuthorConnection';
import AuthorType from '../modules/author/AuthorType';

import LikeConnection from '../modules/like/LikeConnection';
import FollowConnection from '../modules/follow/FollowConnection';

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
    action: {
      type: ActionType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: (obj, args, context) => {
        const { id } = fromGlobalId(args.id);
        return ActionLoader.load(context, id);
      },
    },
    actions: {
      type: ActionConnection.connectionType,
      args: {
        ...connectionArgs,
        search: {
          type: GraphQLString,
        },
      },
      resolve: (obj, args, context) => ActionLoader.loadActions(context, args),
    },
    author: {
      type: AuthorType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: (obj, args, context) => {
        const { id } = fromGlobalId(args.id);
        return AuthorLoader.load(context, id);
      },
    },
    authors: {
      type: AuthorConnection.connectionType,
      args: {
        ...connectionArgs,
        search: {
          type: GraphQLString,
        },
      },
      resolve: (obj, args, context) => AuthorLoader.loadAuthors(context, args),
    },
    likesFromMe: {
      type: GraphQLBoolean,
      args: {
        article: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: (obj, args, context) => {
        const { id } = fromGlobalId(args.article);
        return LikeLoader.loadLikesFromMe(context, id);
      },
    },
    likes: {
      type: LikeConnection.connectionType,
      args: {
        ...connectionArgs,
      },
      resolve: (obj, args, context) => LikeLoader.loadLikes(context, args),
    },
    followsFromMe: {
      type: GraphQLBoolean,
      args: {
        article: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: (obj, args, context) => {
        const { id } = fromGlobalId(args.article);
        return FollowLoader.loadFollowsFromMe(context, id);
      },
    },

    follows: {
      type: FollowConnection.connectionType,
      args: {
        ...connectionArgs,
      },
      resolve: (obj, args, context) => FollowLoader.loadFollows(context, args),
    },
  }),
});
