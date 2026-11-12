
export default (sequelize, DataTypes) => {
  const Crop = sequelize.define('Crop', {
    cropID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    plantingDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    expectedHarvestDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    actualHarvestDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    yieldQuantity: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    yieldUnit: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fieldID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: { model: 'Fields', key: 'fieldID' }
    },
    status: {
      type: DataTypes.ENUM('growing', 'harvested'),
      allowNull: false,
      defaultValue: 'growing',
    },
    isInfested: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    infestation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'crops',
    timestamps: true,
  });

 

  return Crop;
};
