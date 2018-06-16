import { GraphQLString, GraphQLNonNull } from 'graphql';
import { mutationWithClientMutationId, fromGlobalId } from 'graphql-relay';

import SignFeed from '../SignFeedModel';
import { sendMail } from '../../../utils/sendMail';

const randomString = () =>
  Math.random()
    .toString(36)
    .substring(7)
    .toUpperCase();

export default mutationWithClientMutationId({
  name: 'SignFeedCancel',
  inputFields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ email }) => {
    const signedEmail = await SignFeed.findOne({
      email,
    });

    if (!signedEmail)
      return {
        error: 'E-mail não encontrado',
      };
    const code = randomString();
    await SignFeed.findOneAndUpdate({ email }, { code });

    const emailData = {
      from: 'NoReply <noreply@umesh.com>',
      to: email,
      subject: 'Código de Cancelamento',
      html: `<div> Seu código de cancelamento é: <strong> ${code} </strong> </div>`,
    };
    sendMail(emailData);

    return {
      email,
      error: null,
    };
  },
  outputFields: {
    email: {
      type: GraphQLString,
      resolve: ({ email }) => email,
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
});
