export default class EmployeeRepository {
  constructor(EmployeeModel) {
    this.Employee = EmployeeModel;
  }

  findAll() {
    return this.Employee.findAll();
  }

  findById(id) {
    return this.Employee.findByPk(id);
  }

  findByName(name) {
    return this.Employee.findOne({ where: { name } });
  }

  create(data) {
    return this.Employee.create(data);
  }

  update(employee, data) {
    return employee.update(data);
  }

  delete(employee) {
    return employee.destroy();
  }
}
