// @flow

import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    authors: {
      type: [String],
      required: true,
    },
    doiCode: {
      type: String,
      required: true,
      default: '00',
    },
    publishDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    category: {
      type: String,
    },
    magazine: {
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
