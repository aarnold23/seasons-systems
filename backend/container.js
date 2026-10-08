import dbPromise from './models/index.js';
import EmployeeRepository from './repositories/employeeRepository.js';
import EmployeeService from './services/employeeService.js';
import SuperAdminService from './services/superAdminService.js';
import authServiceFactory from './services/authService.js';
import passwordService from './services/passwordService.js';
import tokenService from './services/tokenService.js';

const db = await dbPromise;
const employeeRepository = new EmployeeRepository(db.Employee);

export const employeeService = new EmployeeService(
  employeeRepository,
  passwordService
);

export const superAdminService = new SuperAdminService(
  db,
  passwordService
);

export const authService = authServiceFactory(
  employeeRepository,
  passwordService,
  tokenService
);
