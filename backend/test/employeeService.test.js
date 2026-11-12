import test from 'node:test';
import assert from 'node:assert/strict';
import EmployeeService from '../services/employeeService.js';

function createEmployee(overrides = {}) {
  return {
    employeeID: 1,
    name: 'Alex',
    role: 'admin',
    department: 'HR',
    password: 'hashed-password',
    toJSON() {
      return { ...this };
    },
    ...overrides
  };
}

test('EmployeeService creates an employee with a hashed password', async () => {
  const created = [];
  const repository = {
    create: async data => {
      created.push(data);
      return createEmployee(data);
    }
  };
  const passwordService = {
    hash: async password => `hashed:${password}`
  };
  const service = new EmployeeService(repository, passwordService);

  await service.create({ name: 'Alex', password: 'secret123' });

  assert.deepEqual(created[0], {
    name: 'Alex',
    password: 'hashed:secret123'
  });
});

test('EmployeeService throws a not-found error when an employee is missing', async () => {
  const repository = { findById: async () => null };
  const service = new EmployeeService(repository, {});

  await assert.rejects(
    () => service.getById(99),
    error => error.statusCode === 404 && error.code === 'NOT_FOUND'
  );
});
