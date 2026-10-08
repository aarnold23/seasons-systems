


export default function associateCrop(models) {
  const { Crop, Field, Inventory } = models;

  Crop.belongsTo(Field, {
    foreignKey: 'fieldID',
    as: 'field'
  });

  Crop.hasMany(Inventory, {
    foreignKey: 'cropID',
    as: 'inventoryItems'
  });
}