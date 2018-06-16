// @flow

import { GraphQLObjectType } from 'graphql';

import LoginEmail from '../modules/user/mutation/LoginEmailMutation';
import RegisterEmail from '../modules/user/mutation/RegisterEmailMutation';
import ChangePassword from '../modules/user/mutation/ChangePasswordMutation';

import ArticleAdd from '../modules/article/mutation/ArticleAddMutation';

import AuthorAdd from '../modules/author/mutation/AuthorAddMutation';
import AuthorRemove from '../modules/author/mutation/AuthorRemoveMutation';

import SignFeed from '../modules/signFeed/mutation/SignFeedMutation';
import SignFeedCancel from '../modules/signFeed/mutation/SignCancelMutation';
import SignFeedCancelCode from '../modules/signFeed/mutation/SignCancelCodeMutation';

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    // auth
    LoginEmail,
    RegisterEmail,
    ChangePassword,
    // article
    ArticleAdd,
    //author
    AuthorAdd,
    AuthorRemove,
    // feed
    SignFeed,
    SignFeedCancel,
    SignFeedCancelCode,
  }),
});
