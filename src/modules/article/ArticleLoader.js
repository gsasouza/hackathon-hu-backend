// @flow
import DataLoader from 'dataloader';
import { connectionFromMongoCursor, mongooseLoader } from '@entria/graphql-mongoose-loader';
import type { ConnectionArguments } from 'graphql-relay';

import ArticleModel from './ArticleModel';
import type { GraphQLContext } from '../../TypeDefinition';

type ArticleType = {
  id: string,
  _id: string,
  title: string,
  description: string,
  category: string,
  createdBy: Object,
  tags: string[],
};

export default class Article {
  id: string;
  _id: string;
  title: string;
  description: string;
  category: string;
  createdBy: Object;
  tags: string[];

  constructor(data: ArticleType) {
    this.id = data.id;
    this._id = data._id;
    this.title = data.title;
    this.description = data.description;
    this.category = data.category;
    this.createdBy = data.createdBy;
    this.tags = data.tags;
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

export const loadArticles = async (context: GraphQLContext, args: ConnectionArguments) => {
  // TODO: specify conditions
  const articles = ArticleModel.find({});

  return connectionFromMongoCursor({
    cursor: articles,
    context,
    args,
    loader: load,
  });
};
