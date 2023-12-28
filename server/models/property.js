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
      status: {
        type: DataTypes.ENUM,
        values: ["PENDING", "CANCLE", "APPROVED"],
      },
      isAvailable: DataTypes.BOOLEAN,
      images: {
        type: DataTypes.TEXT,
        get() {
          const rawValthue = this.getDataValue("image");
          return rawValthue ? JSON.parse(rawValthue) : [];
        },
        set(arrayImages) {
          return this.setDataValue("image", JSON.stringify(arrayImages));
        },
      },
      featureImage: DataTypes.STRING,
      postedBy: DataTypes.UUID,
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
