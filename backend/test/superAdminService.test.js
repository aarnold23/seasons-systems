import test from 'node:test';
import assert from 'node:assert/strict';
import SuperAdminService from '../services/superAdminService.js';

function createUser(overrides = {}) {
  return {
    employeeID: 1,
    name: 'Alex',
    role: 'admin',
    department: 'HR',
    password: 'hashed-password',
    update: async data => ({ ...data }),
    destroy: async () => {},
    ...overrides
  };
}

const createModels = () => ({
  Employee: {
    findAll: async () => [{ employeeID: 1, name: 'Alex' }],
    findByPk: async id => createUser({ employeeID: id }),
    create: async data => ({ ...data, employeeID: 99 }),
    count: async ({ where } = {}) => {
      if (where && where.isActive === true) return 2;
      return 5;
    }
  },
  Crop: { count: async () => 3 },
  Livestock: { count: async () => 4 },
  Field: { count: async () => 6 },
  Pen: { count: async () => 7 },
  Equipment: { count: async () => 8 },
  Inventory: { count: async () => 9 },
  Sales: { count: async () => 10 },
  SalesDetails: { sum: async () => 1500 },
  Supplier: { count: async () => 11 },
  Resupply: {
    count: async ({ where } = {}) => {
      if (where && where.deliveryDate === null) return 2;
      return 12;
    }
  }
});

test('SuperAdminService creates a user with a hashed password', async () => {
  const models = createModels();
  const passwordService = { hash: async password => `hashed:${password}` };
  const service = new SuperAdminService(models, passwordService);

  const created = await service.createUser({
    name: 'Alex',
    password: 'secret123',
    role: 'admin',
    department: 'HR',
    dateOfHire: '2024-01-01',
    contact: '555-1234'
  });

  assert.equal(created.password, 'hashed:secret123');
  assert.equal(created.isActive, true);
  assert.equal(created.name, 'Alex');
});

test('SuperAdminService aggregates analytics across entities', async () => {
  const service = new SuperAdminService(createModels(), { hash: async v => v });

  const analytics = await service.getAggregatedAnalytics();

  assert.equal(analytics.totalEmployees, 5);
  assert.equal(analytics.activeEmployees, 2);
  assert.equal(analytics.totalSalesAmount, 1500);
  assert.equal(analytics.pendingResupplies, 2);
});
