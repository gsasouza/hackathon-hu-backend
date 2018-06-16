// @flow
import DataLoader from 'dataloader';
import { connectionFromMongoCursor, mongooseLoader } from '@entria/graphql-mongoose-loader';
import type { ConnectionArguments } from 'graphql-relay';

import AuthorModel from './AuthorModel';
import type { GraphQLContext } from '../../TypeDefinition';

type AuthorType = {
  id: string,
  _id: string,
  name: string,
  email: string,
  unit: string,
};

export default class Author {
  id: string;
  _id: string;
  name: string;
  email: string;
  unit: string;

  constructor(data: AuthorType) {
    this.id = data.id;
    this._id = data._id;
    this.name = data.name;
    this.email = data.email;
    this.unit = data.unit;
  }
}

export const getLoader = () => new DataLoader(ids => mongooseLoader(AuthorModel, ids));

const viewerCanSee = () => true;

export const load = async ({ dataloaders }: GraphQLContext, id: ?string) => {
  if (!id) return null;

  try {
    const data = await dataloaders.AuthorLoader.load(id.toString());

    if (!data) return null;

    return viewerCanSee() ? new Author(data) : null;
  } catch (err) {
    return null;
  }
};

export const clearCache = ({ dataloaders }: GraphQLContext, id: string) => {
  return dataloaders.AuthorLoader.clear(id.toString());
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

export const loadAuthors = async (context: GraphQLContext, args: ConnectionArguments) => {
  const actions = AuthorModel.find({});

  return connectionFromMongoCursor({
    cursor: actions,
    context,
    args: removeFalsy(args),
    loader: load,
  });
};
