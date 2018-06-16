// @flow

import { GraphQLString, GraphQLNonNull } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

import Author from '../AuthorModel';
import * as AuthorLoader from '../AuthorLoader';
import AuthorType from '../AuthorType';

export default mutationWithClientMutationId({
  name: 'AuthorAdd',
  inputFields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    unit: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ name, unit, email }, context) => {
    const { user } = context;

    if (!user)
      return {
        error: 'Usuário não autenticado',
      };

    const author = await new Author({
      name,
      unit,
      email,
    }).save();

    return {
      authorId: author._id,
      error: null,
    };
  },
  outputFields: {
    article: {
      type: AuthorType,
      resolve: async ({ authorId }, args, context) => AuthorLoader.load(context, authorId),
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
});
