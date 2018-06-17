// @flow

import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    abstract: {
      type: String,
    },
    tag: {
      type: String,
    },
    link: {
      type: String,
    },
    time: {
      type: String,
    },
    date: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'news',
  },
);

export default mongoose.model('news', Schema);
