// @flow

import { GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';
import { mutationWithClientMutationId, fromGlobalId } from 'graphql-relay';

import Article from '../../article/ArticleModel';
import Like from '../LikeModel';

export default mutationWithClientMutationId({
  name: 'LikeRemove',
  inputFields: {
    articleId: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  mutateAndGetPayload: async ({ articleId }, context) => {
    const { user } = context;

    if (!user)
      return {
        error: 'Usuário não autenticado',
      };

    const article = await Article.findOne({
      _id: fromGlobalId(articleId).id,
    });

    if (!article)
      return {
        error: 'Pesquisa não encontrada',
      };

    await Like.findOneAndRemove({
      article: fromGlobalId(articleId).id,
      user: user,
    });

    return {
      error: null,
    };
  },
  outputFields: {
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
});
