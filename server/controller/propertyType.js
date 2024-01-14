const db = require("../models");
const { throwError } = require("../middleware/errorHandler");
const { Sequelize } = require("sequelize");
const cloudinary = require("cloudinary").v2;
const createPropertyType = async (req, res, next) => {
  try {
    const { name, description, images } = req.body;
    const response = await db.PropertyType.findOrCreate({
      where: { name },
      defaults: {
        name: name,
        description: description,
      },
    });
    if (response[1] === false) {
      return throwError(409, "PropertyType already exist", res, next);
    }
    const cloudinayImage = await images.map(async (image) => {
      const images = await cloudinary.uploader.upload(image, {
        folder: "PERN/PropertyType",
      });
      await db.Image.create({
        publicId: images.public_id,
        url: images.url,
        propertyTypeId: response[0].id,
      });
    });
    await Promise.all(cloudinayImage);

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
    options.include = [
      {
        model: db.Image,
        as: "Images",
        attributes: ["publicId", "url"],
      },
    ];
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
    const response = await db.PropertyType.findByPk(id, {
      include: [
        {
          model: db.Image,
          as: "Images",
          attributes: ["publicId"],
        },
      ],
    });
    if (!response) {
      return throwError(401, "PropertyType not default", res, next);
    }
    const deleteImageCloudinary = await response.Images.map(async (image) => {
      const res = await cloudinary.uploader.destroy(image.publicId);
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
    const response = await db.PropertyType.findByPk(id, {
      include: [
        {
          model: db.Image,
          as: "Images",
          attributes: ["publicId"],
        },
      ],
    });
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
    const propertyType = await db.PropertyType.findByPk(id, {
      include: [
        {
          model: db.Image,
          as: "Images",
          attributes: ["publicId"],
        },
      ],
    });

    if (!propertyType) {
      return throwError(401, "PropertyType not default", res, next);
    }
    if (data?.images && data?.images?.length !== 0) {
      const deleteImageCloudinary = await propertyType.Images.map(
        async (image) => {
          await cloudinary.uploader.destroy(image.publicId);
        }
      );
      await Promise.all(deleteImageCloudinary);
      await db.Image.destroy({
        where: { propertyTypeId: id },
      });
      const cloudinayImage = await data?.images?.map(async (image) => {
        const images = await cloudinary.uploader.upload(image, {
          folder: "PERN/PropertyType",
        });
        await db.Image.create({
          publicId: images.public_id,
          url: images.url,
          propertyTypeId: propertyType.id,
        });
      });

      await Promise.all(cloudinayImage);
    }
    await db.PropertyType.update(
      { name: data.name, description: data.description },
      {
        where: { id },
      }
    );
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
