// @flow

import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    verifiedCode: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'signFeed',
  },
);

export default mongoose.model('SignFeed', Schema);
