// @flow
import DataLoader from 'dataloader';
import { connectionFromMongoCursor, mongooseLoader } from '@entria/graphql-mongoose-loader';
import type { ConnectionArguments } from 'graphql-relay';

import ActionModel from './ActionModel';
import type { GraphQLContext } from '../../TypeDefinition';

type ActionType = {
  id: string,
  _id: string,
  code: string,
  title: string,
  unit: string,
  description: string,
  situation: string,
};

export default class Action {
  id: string;
  _id: string;
  code: string;
  title: string;
  unit: string;
  situation: string;
  description: string;

  constructor(data: ActionType) {
    console.log(data);
    this.id = data.id;
    this._id = data._id;
    this.title = data.title;
    this.code = data.code;
    this.title = data.title;
    this.unit = data.unit;
    this.description = data.description;
  }
}

export const getLoader = () => new DataLoader(ids => mongooseLoader(ActionModel, ids));

const viewerCanSee = () => true;

export const load = async ({ dataloaders }: GraphQLContext, id: ?string) => {
  if (!id) return null;

  try {
    const data = await dataloaders.ActionLoader.load(id.toString());

    if (!data) return null;

    return viewerCanSee() ? new Action(data) : null;
  } catch (err) {
    return null;
  }
};

export const clearCache = ({ dataloaders }: GraphQLContext, id: string) => {
  return dataloaders.ActionLoader.clear(id.toString());
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

export const loadActions = async (context: GraphQLContext, args: ConnectionArguments) => {
  const actions = ActionModel.find({});

  const data = await connectionFromMongoCursor({
    cursor: actions,
    context,
    args: removeFalsy(args),
    loader: load,
  });

  return data;
};
