const db = require("../models");
const { throwError } = require("../middleware/errorHandler");
const { Sequelize } = require("sequelize");
const createPropertyType = async (req, res, next) => {
  try {
    const { name, description, images } = req.body;
    const response = await db.PropertyType.findOrCreate({
      where: { name },
      defaults: {
        name: name,
        description: description,
        images: images,
      },
    });
    if (response[1] === false) {
      return throwError(409, "PropertyType already exist", res, next);
    }
    return res.status(200).json({
      success: response[1],
      response,
    });
  } catch (error) {
    return throwError(500, error.message, res, next);
  }
};

const getAllPropertyType = async (req, res, next) => {
  try {
    const { limit, page, fields, name, sort, ...query } = req.query;
    const options = {};
    if (fields) options.attributes = fields.split(",");
    if (name)
      query.name = Sequelize.where(
        Sequelize.fn("LOWER", Sequelize.col("name")),
        "LIKE",
        `%${name.toLowerCase()}%`
      );
    //sort data
    if (sort) {
      const order = sort
        .split(",")
        .map((item) =>
          item.startsWith("-") ? [item.replace("-", ""), "DESC"] : [item, "ASC"]
        );
      options.order = order;
    }
    if (!limit) {
      const response = await db.PropertyType.findAll({
        where: query,
        ...options,
      });
      return res.status(200).json({
        success: true,
        response,
      });
    }
    //Panigate
    const offset = (page - 1) * limit;
    if (offset) options.offset = offset;
    options.limit = limit;
    const response = await db.PropertyType.findAndCountAll({
      where: query,
      ...options,
    });
    console.log(options);
    return res.status(200).json({
      success: true,
      response,
    });
  } catch (error) {
    return throwError(500, error.message, res, next);
  }
};
const deletePropertyType = async (req, res, next) => {
  try {
    const id = req.params.id;
    const response = await db.PropertyType.destroy({
      where: { id },
    });
    if (!response) {
      return throwError(401, "PropertyType not default", res, next);
    }
    return res.status(200).json({
      success: true,
      mes: "Delete propertyType successfully",
    });
  } catch (error) {
    return throwError(500, error.message, res, next);
  }
};
const getPropertyType = async (req, res, next) => {
  try {
    const id = req.params.id;
    const response = await db.PropertyType.findByPk(id);
    if (!response) {
      return throwError(401, "PropertyType not default", res, next);
    }
    return res.status(200).json({
      success: true,
      response,
    });
  } catch (error) {
    return throwError(500, error.message, res, next);
  }
};
const updatePropertyType = async (req, res, next) => {
  try {
    const { name, description, image } = req.body;
    const id = req.params.id;
    const response = await db.PropertyType.update(
      { name, description, image },
      {
        where: { id },
      }
    );
    return res.status(200).json({
      success: true,
      mes: "Update successful",
      response,
    });
  } catch (error) {
    return throwError(500, error.message, res, next);
  }
};
module.exports = {
  createPropertyType,
  getAllPropertyType,
  deletePropertyType,
  getPropertyType,
  updatePropertyType,
};
