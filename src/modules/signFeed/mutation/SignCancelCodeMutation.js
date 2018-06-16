import { GraphQLString, GraphQLNonNull } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

import SignFeed from '../SignFeedModel';

export default mutationWithClientMutationId({
  name: 'SignFeedCancelCode',
  inputFields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ email, code }) => {
    const signedEmail = await SignFeed.findOneAndRemove({
      email,
      code,
    });

    if (!signedEmail)
      return {
        error: 'Email não encontrado ou código inválido',
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
