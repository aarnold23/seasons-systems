import AppError from '../utils/AppError.js';

function validateEmployee(data, { partial = false } = {}) {
  const requiredFields = ['name', 'role', 'department'];

  if (!partial && requiredFields.some(field => !data[field])) {
    throw new AppError(
      400,
      'VALIDATION_ERROR',
      'Name, role, and department are required'
    );
  }

  if (data.password !== undefined && data.password.length < 8) {
    throw new AppError(
      400,
      'VALIDATION_ERROR',
      'Password must be at least 8 characters'
    );
  }

  return data;
}

export function validateCreateEmployee(req, res, next) {
  try {
    validateEmployee(req.body);
    return next();
  } catch (error) {
    return next(error);
  }
}

export function validateUpdateEmployee(req, res, next) {
  try {
    validateEmployee(req.body, { partial: true });
    return next();
  } catch (error) {
    return next(error);
  }
}
