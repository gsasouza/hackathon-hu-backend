// @flow

import { GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';
import { mutationWithClientMutationId, fromGlobalId } from 'graphql-relay';

import Article from '../../article/ArticleModel';
import Follow from '../FollowModel';

export default mutationWithClientMutationId({
  name: 'FollowAdd',
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

    const follow = await Follow.findOne({
      article: fromGlobalId(articleId).id,
      user: user,
    });

    if (!follow) {
      await new Follow({
        article: fromGlobalId(articleId).id,
        user,
      }).save();
    }

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
