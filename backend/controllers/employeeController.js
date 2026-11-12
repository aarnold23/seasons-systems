import { employeeService } from '../container.js';

function withoutPassword(employee) {
  const { password, ...safeEmployee } = employee.toJSON();
  return safeEmployee;
}

export const getAll = async (req, res, next) => {
  try {
    const employees = await employeeService.getAll();
    return res.json(employees);
  } catch (error) {
    return next(error);
  }
};

export const getById = async (req, res, next) => {
  try {
    const employee = await employeeService.getById(req.params.id);
    return res.json(employee);
  } catch (error) {
    return next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const employee = await employeeService.create(req.body);
    return res.status(201).json(withoutPassword(employee));
  } catch (error) {
    return next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const employee = await employeeService.update(req.params.id, req.body);
    return res.json(withoutPassword(employee));
  } catch (error) {
    return next(error);
  }
};

export const remove = async (req, res, next) => {
  try {
    await employeeService.remove(req.params.id);
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};
