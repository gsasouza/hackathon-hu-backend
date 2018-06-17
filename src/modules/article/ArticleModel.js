// @flow

import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
    },
    authors: {
      type: [String],
      required: true,
    },
    doiCode: {
      type: String,
    },
    publishDate: {
      type: Date,
    },
    similar: {
      type: String,
    },
    num: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'article',
  },
);

export default mongoose.model('Article', Schema);
