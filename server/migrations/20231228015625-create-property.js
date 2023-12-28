"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Properties", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("gen_random_uuid()"),
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      listingType: {
        type: Sequelize.ENUM,
        values: ["SALE", "RENTAL"],
        allowNull: false,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      propertyTypeId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "PropertyTypes",
          key: "id",
        },
      },
      status: {
        type: Sequelize.ENUM,
        values: ["PENDING", "CANCLE", "APPROVED"],
        defaultValue: "PENDING",
      },
      isAvailable: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      images: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      featureImage: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      postedBy: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      bedRoom: {
        type: Sequelize.INTEGER,
      },
      bathRoom: {
        type: Sequelize.INTEGER,
      },
      yearBuild: {
        type: Sequelize.INTEGER,
      },
      propertySize: {
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Properties");
  },
};
