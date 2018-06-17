// @flow
import DataLoader from 'dataloader';
import { connectionFromMongoCursor, mongooseLoader } from '@entria/graphql-mongoose-loader';
import { fromGlobalId } from 'graphql-relay';
import type { ConnectionArguments } from 'graphql-relay';

import newsJson from './news.json';
import NewsModel from './NewsModel';
import type { GraphQLContext } from '../../TypeDefinition';

type NewsType = {
  id: string,
  _id: string,
  title: string,
  abstract: string,
  tag: string,
  link: string,
  time: string,
  date: string,
  image: string,
};

export default class News {
  id: string;
  _id: string;
  title: string;
  abstract: string;
  tag: string;
  link: string;
  time: string;
  date: string;
  image: string;

  constructor(data: NewsType) {
    this.id = data.id;
    this._id = data._id;
    this.title = data.title;
    this.abstract = data.abstract;
    this.tag = data.tag;
    this.link = data.link;
    this.time = data.time;
    this.date = data.date;
    this.image = data.image;
  }
}

export const getLoader = () => new DataLoader(ids => mongooseLoader(NewsModel, ids));

const viewerCanSee = () => true;

export const load = async ({ dataloaders }: GraphQLContext, id: ?string) => {
  if (!id) return null;

  try {
    const data = await dataloaders.NewsLoader.load(id.toString());

    if (!data) return null;

    return viewerCanSee() ? new News(data) : null;
  } catch (err) {
    return null;
  }
};

export const clearCache = ({ dataloaders }: GraphQLContext, id: string) => {
  return dataloaders.NewsLoader.clear(id.toString());
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

export const loadNews = async (context: GraphQLContext, args: ConnectionArguments) => {
  const news = NewsModel.find({});

  return connectionFromMongoCursor({
    cursor: news,
    context,
    args: removeFalsy(args),
    loader: load,
  });
};

export const importFromJson = async () => {
  try {
    await NewsModel.insertMany(newsJson, { ordered: false });
  } catch (err) {
    err.writeErrors.map(e => console.log(e.toJSON()));
  }
};
