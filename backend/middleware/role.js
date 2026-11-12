import AppError from '../utils/AppError.js';

export default function authorize(allowedRoles = [], options = {}) {



  return function(req, res, next) {
    if (!req.user) {
      return next(new AppError(401, 'UNAUTHORIZED', 'Authentication required'));
    }
    
    const allowAll = options.allowAll?.includes(req.user.role);
    const roleAllowed = allowedRoles.includes(req.user.role);



    if(!allowAll && !roleAllowed) {
      return next(new AppError(403, 'FORBIDDEN', 'Insufficient permissions'));
    }


    return next();
  };
};
