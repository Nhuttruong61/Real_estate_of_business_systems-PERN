const db = require("../models");
const { throwError } = require("../middleware/errorHandler");
const { Sequelize } = require("sequelize");
const cloudinary = require("cloudinary").v2;
const createPropertyType = async (req, res, next) => {
  try {
    const { name, description, images } = req.body;
    const checkName = await db.PropertyType.findAll({ where: { name: name } });
    if (checkName.length > 0)
      return throwError(402, "Property type name already exist", res, next);
    const image = await cloudinary.uploader.upload(images[0], {
      folder: "PERN/PropertyType",
    });
    const response = await db.PropertyType.create({
      name: name,
      description: description,
      images: [
        {
          public_id: image.public_id,
          url: image.url,
        },
      ],
    });

    if (!response) {
      return throwError(409, "Failed to create PropertyType", res, next);
    }

    return res.status(200).json({
      success: true,
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
    const response = await db.PropertyType.findByPk(id);
    if (!response) {
      return throwError(401, "PropertyType not default", res, next);
    }
    const deleteImageCloudinary = await response.images.map(async (image) => {
      await cloudinary.uploader.destroy(image.public_id);
    });
    await Promise.all(deleteImageCloudinary);
    await db.PropertyType.destroy({
      where: { id },
    });
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
    const response = await db.PropertyType.findByPk(id, {});
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
    const data = req.body;
    const id = req.params.id;
    const propertyType = await db.PropertyType.findByPk(id);
    const listImage = [];
    if (!propertyType) {
      return throwError(401, "PropertyType not default", res, next);
    }
    let ischeck = false;
    const checkCloudinay = await data.images.map(async (image) => {
      if (image?.url?.includes("cloudinary")) {
        ischeck = true;
      }
    });
    Promise.all(checkCloudinay);
    if (!ischeck) {
      const deleteImageCloudinary = await propertyType.images.map(
        async (image) => {
          await cloudinary.uploader.destroy(image.public_id);
        }
      );
      await Promise.all(deleteImageCloudinary);
      const cloudinayImage = await data?.images?.map(async (image) => {
        const respose = await cloudinary.uploader.upload(image, {
          folder: "PERN/PropertyType",
        });
        listImage.push({
          public_id: respose.public_id,
          url: respose.url,
        });
      });
      await Promise.all(cloudinayImage);
      await db.PropertyType.update(
        { name: data.name, description: data.description, images: listImage },
        {
          where: { id },
        }
      );
    } else {
      await db.PropertyType.update(
        { name: data.name, description: data.description },
        {
          where: { id },
        }
      );
    }
    return res.status(200).json({
      success: true,
      mes: "Update successful",
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
