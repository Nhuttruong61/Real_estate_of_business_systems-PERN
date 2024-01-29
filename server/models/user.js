"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Property, {
        foreignKey: "owner",
        as: "properties",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.STRING,
      refeshToken: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        set(value) {
          const salt = bcrypt.genSaltSync(10);
          this.setDataValue("password", bcrypt.hashSync(value, salt));
        },
      },
      role: {
        type: DataTypes.ENUM,
        values: ["ADMIN", "AGENT", "USER"],
      },
      avatar: DataTypes.STRING,
    },

    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
