// @flow
import DataLoader from 'dataloader';
import { connectionFromMongoCursor, mongooseLoader } from '@entria/graphql-mongoose-loader';
import { fromGlobalId } from 'graphql-relay';
import type { ConnectionArguments } from 'graphql-relay';

import LikeModel from './LikeModel';
import type { GraphQLContext } from '../../TypeDefinition';

import { importFromJson } from '../news/NewsLoader';

type LikeType = {
  id: string,
  _id: string,
  user: Object,
  article: Object,
};

export default class Like {
  id: string;
  _id: string;
  user: Object;
  article: Object;

  constructor(data: LikeType) {
    this.id = data.id;
    this._id = data._id;
    this.user = data.user;
    this.article = data.article;
  }
}

export const getLoader = () => new DataLoader(ids => mongooseLoader(LikeModel, ids));

const viewerCanSee = () => true;

export const load = async ({ dataloaders }: GraphQLContext, id: ?string) => {
  if (!id) return null;

  try {
    const data = await dataloaders.LikeLoader.load(id.toString());

    if (!data) return null;

    return viewerCanSee() ? new Like(data) : null;
  } catch (err) {
    return null;
  }
};

export const clearCache = ({ dataloaders }: GraphQLContext, id: string) => {
  return dataloaders.LikeLoader.clear(id.toString());
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

export const loadLikes = async (context: GraphQLContext, args: ConnectionArguments) => {
  const likes = LikeModel.find({
    article: fromGlobalId(args.article).id,
  });

  return connectionFromMongoCursor({
    cursor: likes,
    context,
    args: removeFalsy(args),
    loader: load,
  });
};

export const loadLikesFromMe = async (context: GraphQLContext, args: ConnectionArguments) => {
  const { user } = context;
  const like = await LikeModel.find({ user: user._id, article: args });
  return !!like.length;
};
