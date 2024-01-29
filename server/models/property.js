"use strict";
const { Model, json } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Property.hasMany(models.Image, {
        foreignKey: "propertyId",
        as: "images",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Property.belongsTo(models.User, {
        foreignKey: "owner",
        as: "ownerInfo",
      });
    }
  }
  Property.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      listingType: {
        type: DataTypes.ENUM,
        values: ["SALE", "RENTAL"],
      },
      price: DataTypes.FLOAT,
      propertyTypeId: DataTypes.UUID,
      address: DataTypes.STRING,
      status: {
        type: DataTypes.ENUM,
        values: ["PENDING", "SOLD", "RENTED"],
      },
      isAvailable: DataTypes.BOOLEAN,
      featureImage: DataTypes.STRING,
      bedRoom: DataTypes.INTEGER,
      bathRoom: DataTypes.INTEGER,
      yearBuild: DataTypes.INTEGER,
      propertySize: DataTypes.FLOAT,
      owner: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Property",
    }
  );
  return Property;
};
