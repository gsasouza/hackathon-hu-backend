// @flow

import jwt from 'jsonwebtoken';
import { jwtSecret } from './config';
import User from './modules/user/UserModel';

export async function getUser(token: string) {
  if (!token) return { user: null };

  try {
    const decodedToken = jwt.verify(token.substring(4), jwtSecret);

    const user = await User.findOne({ _id: decodedToken.id });

    return {
      user,
    };
  } catch (err) {
    return { user: null };
  }
}

type UserType = {
  _id: string,
};

export function generateToken(user: UserType) {
  return `JWT ${jwt.sign({ id: user._id }, jwtSecret)}`;
}
