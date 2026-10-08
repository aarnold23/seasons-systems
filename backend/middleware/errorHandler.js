import logger from '../utils/logger.js';

export default function errorHandler(error, req, res, next) {
  const statusCode = error.statusCode || 500;
  const code = error.code || 'INTERNAL_SERVER_ERROR';

  logger.error(error.stack || error.message);

  res.status(statusCode).json({
    error: code,
    message: error.message || 'Internal server error'
  });
}