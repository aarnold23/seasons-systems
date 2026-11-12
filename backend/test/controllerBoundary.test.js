import test from 'node:test';
import assert from 'node:assert/strict';

process.env.DATABASE_URL ??= 'postgres://user:pass@localhost:5432/seasons_test';

async function loadModules() {
  const employeeControllerModule = await import('../controllers/employeeController.js');
  const superAdminControllerModule = await import('../controllers/superAdminController.js');
  const containerModule = await import('../container.js');

  return { employeeController: employeeControllerModule, superAdminController: superAdminControllerModule, container: containerModule };
}

function createRes() {
  return {
    statusCode: 200,
    jsonValue: undefined,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.jsonValue = payload;
      return this;
    },
    send(payload) {
      this.sendValue = payload;
      return this;
    }
  };
}

test('employeeController delegates getAll to the employee service', async () => {
  const { employeeController, container } = await loadModules();
  const original = container.employeeService.getAll;
  const employees = [{ employeeID: 1, name: 'Alex' }];

  container.employeeService.getAll = async () => employees;

  try {
    const res = createRes();
    await employeeController.getAll({}, res, () => {});
    assert.equal(res.statusCode, 200);
    assert.deepEqual(res.jsonValue, employees);
  } finally {
    container.employeeService.getAll = original;
  }
});

test('employeeController create strips password before responding', async () => {
  const { employeeController, container } = await loadModules();
  const original = container.employeeService.create;
  const createdEmployee = {
    employeeID: 2,
    name: 'Sam',
    password: 'secret',
    department: 'Sales',
    toJSON() {
      return { employeeID: 2, name: 'Sam', password: 'secret', department: 'Sales' };
    }
  };

  container.employeeService.create = async () => createdEmployee;

  try {
    const res = createRes();
    await employeeController.create({ body: { name: 'Sam', password: 'secret' } }, res, () => {});
    assert.equal(res.statusCode, 201);
    assert.deepEqual(res.jsonValue, {
      employeeID: 2,
      name: 'Sam',
      department: 'Sales'
    });
  } finally {
    container.employeeService.create = original;
  }
});

test('superAdminController delegates user listing to the super admin service', async () => {
  const { superAdminController, container } = await loadModules();
  const original = container.superAdminService.getAllUsers;
  const users = [{ employeeID: 1, name: 'Alex', password: 'secret' }];

  container.superAdminService.getAllUsers = async () => users;

  try {
    const res = createRes();
    await superAdminController.getAllUsers({}, res, () => {});
    assert.equal(res.statusCode, 200);
    assert.deepEqual(res.jsonValue, [{ employeeID: 1, name: 'Alex' }]);
  } finally {
    container.superAdminService.getAllUsers = original;
  }
});

test('superAdminController delegates analytics to the service layer', async () => {
  const { superAdminController, container } = await loadModules();
  const original = container.superAdminService.getAggregatedAnalytics;
  const analytics = {
    totalEmployees: 10,
    activeEmployees: 8,
    totalSalesAmount: 1500
  };

  container.superAdminService.getAggregatedAnalytics = async () => analytics;

  try {
    const res = createRes();
    await superAdminController.getAggregatedAnalytics({}, res, () => {});
    assert.equal(res.statusCode, 200);
    assert.deepEqual(res.jsonValue, analytics);
  } finally {
    container.superAdminService.getAggregatedAnalytics = original;
  }
});
