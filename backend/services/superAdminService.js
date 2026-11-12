import AppError from '../utils/AppError.js';

export default class SuperAdminService {
  constructor(models, passwordService) {
    this.models = models;
    this.passwordService = passwordService;
  }

  async getAllUsers() {
    return this.models.Employee.findAll({
      attributes: { exclude: ['password'] }
    });
  }

  async getUserById(id) {
    const user = await this.models.Employee.findByPk(id, {
      attributes: { exclude: ['password'] }
    });

    if (!user) {
      throw new AppError(404, 'NOT_FOUND', 'User not found');
    }

    return user;
  }

  async createUser(data) {
    const { password, ...userData } = data;

    if (!password) {
      throw new AppError(400, 'VALIDATION_ERROR', 'Password is required');
    }

    const hashedPassword = await this.passwordService.hash(password);

    return this.models.Employee.create({
      ...userData,
      password: hashedPassword,
      isActive: true
    });
  }

  async updateUser(id, data) {
    const user = await this.models.Employee.findByPk(id);

    if (!user) {
      throw new AppError(404, 'NOT_FOUND', 'User not found');
    }

    const { password, ...updateData } = data;

    if (password) {
      updateData.password = await this.passwordService.hash(password);
    }

    await user.update(updateData);
    return user;
  }

  async deleteUser(id) {
    const user = await this.models.Employee.findByPk(id);

    if (!user) {
      throw new AppError(404, 'NOT_FOUND', 'User not found');
    }

    await user.destroy();
    return true;
  }

  async getAggregatedAnalytics() {
    const [
      totalEmployees,
      activeEmployees,
      adminEmployees,
      totalCrops,
      growingCrops,
      totalLivestock,
      activeLivestock,
      totalFields,
      activeFields,
      totalPens,
      fullPens,
      totalEquipment,
      inUseEquipment,
      newEquipment,
      damagedEquipment,
      totalInventory,
      cropProduceInventory,
      meatProduceInventory,
      totalSales,
      totalSalesAmount,
      totalSuppliers,
      totalResupplies,
      pendingResupplies
    ] = await Promise.all([
      this.models.Employee.count(),
      this.models.Employee.count({ where: { isActive: true } }),
      this.models.Employee.count({ where: { role: 'admin' } }),
      this.models.Crop.count(),
      this.models.Crop.count({ where: { status: 'growing' } }),
      this.models.Livestock.count(),
      this.models.Livestock.count({ where: { status: 'active' } }),
      this.models.Field.count(),
      this.models.Field.count({ where: { isActive: true } }),
      this.models.Pen.count(),
      this.models.Pen.count({ where: { isFull: true } }),
      this.models.Equipment.count(),
      this.models.Equipment.count({ where: { isInUse: true } }),
      this.models.Equipment.count({ where: { status: 'new' } }),
      this.models.Equipment.count({ where: { status: 'damaged' } }),
      this.models.Inventory.count(),
      this.models.Inventory.count({ where: { type: 'crop_produce' } }),
      this.models.Inventory.count({ where: { type: 'meat_produce' } }),
      this.models.Sales.count(),
      this.models.SalesDetails.sum('saleTotal'),
      this.models.Supplier.count(),
      this.models.Resupply.count(),
      this.models.Resupply.count({ where: { deliveryDate: null } })
    ]);

    return {
      totalEmployees,
      activeEmployees,
      adminEmployees,
      totalCrops,
      growingCrops,
      totalLivestock,
      activeLivestock,
      totalFields,
      activeFields,
      totalPens,
      fullPens,
      totalEquipment,
      inUseEquipment,
      newEquipment,
      damagedEquipment,
      totalInventory,
      cropProduceInventory,
      meatProduceInventory,
      totalSales,
      totalSalesAmount: totalSalesAmount || 0,
      totalSuppliers,
      totalResupplies,
      pendingResupplies
    };
  }
}
