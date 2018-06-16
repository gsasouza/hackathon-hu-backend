import { GraphQLString, GraphQLNonNull } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

import SignFeed from '../SignFeedModel';

export default mutationWithClientMutationId({
  name: 'SignFeed',
  inputFields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ email }) => {
    await new SignFeed({
      email,
    }).save();

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
