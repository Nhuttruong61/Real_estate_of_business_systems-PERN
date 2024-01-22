"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PropertyType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PropertyType.hasMany(models.Image, {
        foreignKey: "propertyTypeId",
        as: "Images",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  PropertyType.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      images: {
        type: DataTypes.TEXT,
        get() {
          const rawValue = this.getDataValue("images");
          return rawValue ? JSON.parse(rawValue) : [];
        },
        set(images) {
          return this.setDataValue("images", JSON.stringify(images));
        },
      },
    },
    {
      sequelize,
      modelName: "PropertyType",
    }
  );
  return PropertyType;
};
