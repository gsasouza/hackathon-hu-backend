// @flow
import DataLoader from 'dataloader';
import { connectionFromMongoCursor, mongooseLoader } from '@entria/graphql-mongoose-loader';
import type { ConnectionArguments } from 'graphql-relay';

import FollowModel from './FollowModel';
import type { GraphQLContext } from '../../TypeDefinition';
import LikeModel from '../like/LikeModel';

type FollowType = {
  id: string,
  _id: string,
  user: Object,
  article: Object,
};

export default class Follow {
  id: string;
  _id: string;
  user: Object;
  article: Object;

  constructor(data: FollowType) {
    this.id = data.id;
    this._id = data._id;
    this.user = data.user;
    this.article = data.article;
  }
}

export const getLoader = () => new DataLoader(ids => mongooseLoader(FollowModel, ids));

const viewerCanSee = () => true;

export const load = async ({ dataloaders }: GraphQLContext, id: ?string) => {
  if (!id) return null;

  try {
    const data = await dataloaders.FollowLoader.load(id.toString());

    if (!data) return null;

    return viewerCanSee() ? new Follow(data) : null;
  } catch (err) {
    return null;
  }
};

export const clearCache = ({ dataloaders }: GraphQLContext, id: string) => {
  return dataloaders.FollowLoader.clear(id.toString());
};

const removeFalsy = obj => {
  let newObj = {};
  Object.keys(obj).forEach(prop => {
    if (obj[prop]) {
      newObj[prop] = obj[prop];
    }
  });
  return newObj;
};

export const loadFollows = async (context: GraphQLContext, args: ConnectionArguments) => {
  const actions = FollowModel.find({});

  return connectionFromMongoCursor({
    cursor: actions,
    context,
    args: removeFalsy(args),
    loader: load,
  });
};

export const loadFollowsFromMe = async (context: GraphQLContext, args: ConnectionArguments) => {
  const { user } = context;
  const follow = await FollowModel.find({ user: user._id, article: args });
  return !!follow.length;
};
