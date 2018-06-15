// @flow

import { GraphQLString, GraphQLNonNull } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

import Article from '../ArticleModel';
import * as ArticleLoader from '../ArticleLoader';
import ArticleType from '../ArticleType';

export default mutationWithClientMutationId({
  name: 'ArticleAdd',
  inputFields: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    category: {
      type: new GraphQLNonNull(GraphQLString),
    },
    tags: {
      type: GraphQLString,
    },
  },
  mutateAndGetPayload: async ({ title, description, category, tags = [] }, context) => {
    const { user } = context;

    if (!user) {
      throw new Error('Unauthenticated user');
    }

    const article = await new Article({
      title,
      description,
      category,
      tags,
      createdBy: user,
    }).save();

    return {
      articleId: article._id,
      error: null,
    };
  },
  outputFields: {
    article: {
      type: ArticleType,
      resolve: async ({ articleId }, args, context) => ArticleLoader.load(context, articleId),
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
});
