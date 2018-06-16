// @flow

import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId, fromGlobalId } from 'graphql-relay';

import Author from '../AuthorModel';

export default mutationWithClientMutationId({
  name: 'AuthorRemove',
  inputFields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  mutateAndGetPayload: async ({ id }, context) => {
    const { user } = context;

    if (!user)
      return {
        error: 'Usuário não autenticado',
      };

    const author = await Author.findOneAndRemove({
      _id: fromGlobalId(id).id,
    });

    if (!author)
      return {
        error: 'Autor não encontrado',
      };

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
