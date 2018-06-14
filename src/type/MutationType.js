// @flow

import { GraphQLObjectType } from 'graphql';

import LoginEmail from '../modules/user/mutation/LoginEmailMutation';
import RegisterEmail from '../modules/user/mutation/RegisterEmailMutation';
import ChangePassword from '../modules/user/mutation/ChangePasswordMutation';

import ArticleAdd from '../modules/article/mutation/ArticleAddMutation';

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    // auth
    LoginEmail,
    RegisterEmail,
    ChangePassword,
    // article
    ArticleAdd,
  }),
});
