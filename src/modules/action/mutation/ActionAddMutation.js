// @flow

import { GraphQLString, GraphQLNonNull } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

import Action from '../ActionModel';
import * as ActionLoader from '../ActionLoader';
import ActionType from '../ActionType';

export default mutationWithClientMutationId({
  name: 'ActionAdd',
  inputFields: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    unit: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ title, description, unit }, context) => {
    const { user } = context;

    if (!user) {
      throw new Error('Unauthenticated user');
    }

    const action = await new Action({
      title,
      description,
      unit,
      createdBy: user,
    }).save();

    return {
      actionId: action._id,
      error: null,
    };
  },
  outputFields: {
    action: {
      type: ActionType,
      resolve: async ({ actionId }, args, context) => ActionLoader.load(context, actionId),
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
});
