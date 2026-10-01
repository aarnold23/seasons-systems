import AppError from '../utils/AppError.js';

export default class EmployeeService {
  constructor(repository, passwordService) {
    this.repository = repository;
    this.passwordService = passwordService;
  }

  getAll() {
    return this.repository.findAll();
  }

  async getById(id) {
    const employee = await this.repository.findById(id);

    if (!employee) {
      throw new AppError(404, 'NOT_FOUND', 'Employee not found');
    }

    return employee;
  }

  async create(data) {
    const { password, ...employeeData } = data;

    if (password) {
      employeeData.password = await this.passwordService.hash(password);
    }

    return this.repository.create(employeeData);
  }

  async update(id, data) {
    const employee = await this.getById(id);
    const { password, ...employeeData } = data;

    if (password) {
      employeeData.password = await this.passwordService.hash(password);
    }

    return this.repository.update(employee, employeeData);
  }

  async remove(id) {
    const employee = await this.getById(id);
    await this.repository.delete(employee);
  }
}
