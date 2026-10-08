import AppError from '../utils/AppError.js';

export default function department(allowedDepartments = []) {
  return (req, res, next) => {
    if (!req.user) {
      return next(new AppError(401, 'UNAUTHORIZED', 'Authentication required'));
    }

    if (!allowedDepartments.includes(req.user.department)) {
      return next(new AppError(403, 'FORBIDDEN', 'Department access denied'));
    }

    return next();
  };
};
