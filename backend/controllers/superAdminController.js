import { superAdminService } from '../container.js';

function sanitizeUser(user) {
  if (!user) return null;
  const plainUser = typeof user.toJSON === 'function' ? user.toJSON() : user;
  const { password, ...safeUser } = plainUser;
  return safeUser;
}

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await superAdminService.getAllUsers();
    return res.json(users.map(sanitizeUser));
  } catch (error) {
    return next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const user = await superAdminService.getUserById(req.params.id);
    return res.json(sanitizeUser(user));
  } catch (error) {
    return next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const user = await superAdminService.createUser(req.body);
    return res.status(201).json({
      message: 'User created successfully',
      user: {
        id: user.employeeID,
        name: user.name,
        role: user.role,
        department: user.department
      }
    });
  } catch (error) {
    return next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const user = await superAdminService.updateUser(req.params.id, req.body);
    return res.json({
      message: 'User updated successfully',
      user: {
        id: user.employeeID,
        name: user.name,
        role: user.role,
        department: user.department
      }
    });
  } catch (error) {
    return next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await superAdminService.deleteUser(req.params.id);
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};

export const getAggregatedAnalytics = async (req, res, next) => {
  try {
    const analytics = await superAdminService.getAggregatedAnalytics();
    return res.json(analytics);
  } catch (error) {
    return next(error);
  }
};
