// @flow
import DataLoader from 'dataloader';
import { connectionFromMongoCursor, mongooseLoader } from '@entria/graphql-mongoose-loader';

import type { ConnectionArguments } from 'graphql-relay';
import type { GraphQLContext } from '../../TypeDefinition';

import UserModel from './UserModel';

type UserType = {
  id: string,
  _id: string,
  name: string,
  university: string,
  password: string,
  email: string,
  active: boolean,
  isAdmin: boolean,
};

export default class User {
  id: string;
  _id: string;
  name: string;
  university: string;
  email: string;
  active: boolean;
  isAdmin: boolean;

  constructor(data: UserType) {
    this.id = data.id;
    this._id = data._id;
    this.name = data.name;
    this.university = data.university;
    this.isAdmin = data.isAdmin;
    this.email = data.email;
  }
}

export const getLoader = () => new DataLoader(ids => mongooseLoader(UserModel, ids));

const viewerCanSee = (context, data) => {
  // Anyone can see another user
  return true;
};

export const load = async (context: GraphQLContext, id: string): Promise<?User> => {
  if (!id) {
    return null;
  }

  let data;
  try {
    data = await context.dataloaders.UserLoader.load(id);
  } catch (err) {
    return null;
  }
  return viewerCanSee(context, data) ? new User(data, context) : null;
};

export const clearCache = ({ dataloaders }: GraphQLContext, id: string) => {
  return dataloaders.UserLoader.clear(id.toString());
};

export const loadUsers = async (context: GraphQLContext, args: ConnectionArguments) => {
  const where = args.search ? { name: { $regex: new RegExp(`^${args.search}`, 'ig') } } : {};
  const users = UserModel.find(where, { _id: 1 }).sort({ createdAt: -1 });

  return connectionFromMongoCursor({
    cursor: users,
    context,
    args,
    loader: load,
  });
};
