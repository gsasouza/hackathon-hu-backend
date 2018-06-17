// @flow
import DataLoader from 'dataloader';
import { connectionFromMongoCursor, mongooseLoader } from '@entria/graphql-mongoose-loader';
import type { ConnectionArguments } from 'graphql-relay';

import ArticleModel from './ArticleModel';
import type { GraphQLContext } from '../../TypeDefinition';
import json from './walderi.json';

type ArticleType = {
  id: string,
  _id: string,
  title: string,
  authors: string[],
  doiCode: string,
  publishDate: string,
  category: string,
  magazine: string,
  url: string,
};

export default class Article {
  id: string;
  _id: string;
  title: string;
  authors: string[];
  doiCode: string;
  publishDate: string;
  category: string;
  magazine: string;
  url: string;

  constructor(data: ArticleType) {
    this.id = data.id;
    this._id = data._id;
    this.title = data.title;
    this.authors = data.authors;
    this.doiCode = data.doiCode;
    this.publishDate = data.publishDate;
    this.category = data.category;
    this.magazine = data.magazine;
    this.url = data.url;
    this.category = data.category;
  }
}

export const getLoader = () => new DataLoader(ids => mongooseLoader(ArticleModel, ids));

const viewerCanSee = () => true;

export const load = async ({ dataloaders }: GraphQLContext, id: ?string) => {
  if (!id) return null;

  try {
    const data = await dataloaders.ArticleLoader.load(id.toString());

    if (!data) return null;

    return viewerCanSee() ? new Article(data) : null;
  } catch (err) {
    return null;
  }
};

export const clearCache = ({ dataloaders }: GraphQLContext, id: string) => {
  return dataloaders.ArticleLoader.clear(id.toString());
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

export const loadArticles = async (context: GraphQLContext, args: ConnectionArguments) => {
  const articles = ArticleModel.find({});

  return connectionFromMongoCursor({
    cursor: articles,
    context,
    args: removeFalsy(args),
    loader: load,
  });
};

export const importFromJson = async () => {
  try {
    await ArticleModel.insertMany(json, { ordered: false });
  } catch (err) {
    err.writeErrors.map(e => console.log(e.toJSON()));
  }
};
