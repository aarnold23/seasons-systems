import jwt from 'jsonwebtoken';
import configs from '../configs/configs.js';
import AppError from '../utils/AppError.js';

export default function auth(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return next(new AppError(
      401,
      'UNAUTHORIZED',
      'Authentication required'
    ));
  }

  jwt.verify(token, configs.auth.jwtSecret, (error, user) => {
    if (error) {
      return next(new AppError(
        401,
        'INVALID_TOKEN',
        'Invalid or expired token'
      ));
    }

    req.user = user;
    return next();
  });
}
