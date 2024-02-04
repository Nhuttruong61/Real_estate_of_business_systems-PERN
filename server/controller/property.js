const { throwError } = require("../middleware/errorHandler");
const db = require("../models");
const cloudinary = require("cloudinary").v2;
const { Sequelize } = require("sequelize");
const createProperty = async (req, res, next) => {
  try {
    const {
      name,
      description,
      listingType,
      price,
      propertyTypeId,
      address,
      featureImage,
      bedRoom,
      bathRoom,
      yearBuild,
      propertySize,
      images,
      owner,
    } = req.body;
    const property = await db.Property.create({
      name,
      description,
      listingType,
      price,
      propertyTypeId,
      address,
      featureImage,
      bedRoom,
      bathRoom,
      yearBuild,
      propertySize,
      owner,
    });
    if (property) {
      const cloudinayImage = await images.map(async (image) => {
        const response = await cloudinary.uploader.upload(image, {
          folder: "PERN/Property",
        });
        await db.Image.create({
          publicId: response.public_id,
          url: response.url,
          propertyId: property.id,
        });
      });
      await Promise.all(cloudinayImage);
    }
    return res.status(200).json({
      success: true,
      property,
    });
  } catch (error) {
    return throwError(500, error.message, res, next);
  }
};

const getAllProperty = async (req, res, next) => {
  try {
    const { limit, page, name, fields, sort, ...query } = req.query;
    const options = {};
    if (fields) options.attributes = fields.split(",");
    options.include = [
      {
        model: db.Image,
        as: "images",
      },
      {
        model: db.User,
        attributes: ["id", "name", "email", "phone", "avatar"],
        as: "ownerInfo",
      },
      {
        model: db.PropertyType,
        attributes: ["id", "name"],
        as: "propertyType",
        where: name
          ? Sequelize.where(
              Sequelize.fn("LOWER", Sequelize.col("propertyType.name")),
              "LIKE",
              `%${name.toLowerCase()}%`
            )
          : {},
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
      const response = await db.Property.findAll({
        where: query,
        ...options,
      });
      return res.status(200).json({
        success: true,
        response,
      });
    }
    const offset = (page - 1) * limit;
    if (offset) options.offset = offset;
    options.limit = limit;

    const count = await db.Property.count({
      where: query,
    });

    const response = await db.Property.findAll({
      where: query,
      ...options,
    });
    return res.status(200).json({
      success: true,
      response,
      count,
    });
  } catch (error) {
    return throwError(500, error.message, res, next);
  }
};

const getPropertyOwner = async (req, res, next) => {
  try {
    const { page, name, fields, sort, ...query } = req.query;
    const { id } = req.params;
    const options = {};
    if (fields) options.attributes = fields.split(",");
    if (name)
      query.name = Sequelize.where(
        Sequelize.fn("LOWER", Sequelize.col("name")),
        "LIKE",
        `%${name.toLowerCase()}%`
      );
    options.include = {
      model: db.Image,
      as: "images",
    };
    const response = await db.Property.findAll({
      where: {
        owner: id,
        query,
        ...options,
      },
    });
    return res.status(200).json({
      success: true,
      response,
    });
  } catch (error) {
    return throwError(500, error.message, res, next);
  }
};

const deletePropertyOwner = async (req, res, next) => {
  try {
    const { id, idowner } = req.params;
    const property = await db.Property.findByPk(id, {
      include: {
        model: db.Image,
        as: "images",
      },
    });
    if (idowner !== property.owner)
      return throwError(401, "Your not owner property", res, next);
    const deleteSuccess = await db.Property.destroy({ where: { id } });
    if (deleteSuccess) {
      const deleteImage = await property.images.map(async (image) => {
        await cloudinary.uploader.destroy(image.publicId);
      });
      Promise.all(deleteImage);
    }
    return res.status(200).json({
      success: true,
      mes: "Delete successfully",
    });
  } catch (error) {
    return throwError(500, error.message, res, next);
  }
};

const deletePropertyAdmin = async (req, res, next) => {
  try {
    const { id } = req.params;
    const property = await db.Property.findByPk(id, {
      include: {
        model: db.Image,
        as: "images",
      },
    });
    if (!property) return throwError(401, "property not default ", res, next);
    const deleteSuccess = await db.Property.destroy({ where: { id } });
    if (deleteSuccess) {
      const deleteImage = await property.images.map(async (image) => {
        await cloudinary.uploader.destroy(image.publicId);
      });
      Promise.all(deleteImage);
    }
    return res.status(200).json({
      success: true,
      mes: "Delete successfully",
    });
  } catch (error) {
    return throwError(500, error.message, res, next);
  }
};

const updateProperty = async (req, res, next) => {
  try {
    const { id, idowner } = req.params;
    const {
      name,
      description,
      listingType,
      price,
      propertyTypeId,
      address,
      featureImage,
      bedRoom,
      bathRoom,
      yearBuild,
      propertySize,
      images,
      owner,
    } = req.body;
    const property = await db.Property.findByPk(id, {
      include: {
        model: db.Image,
        as: "images",
      },
    });
    if (!property) return throwError(402, "property not found", res, next);
    if (idowner !== property.owner)
      return throwError(401, "Your not owner property ", res, next);
    let check = false;
    const checkCloudinary = async () => {
      for (const image of images) {
        const checkImg = await image.includes("cloudinary");
        if (checkImg) {
          check = true;
          break;
        }
      }
    };
    await checkCloudinary();
    if (!check) {
      const deleteImg = await property.images.map(async (image) => {
        await cloudinary.uploader.destroy(image.publicId);
      });
      Promise.all(deleteImg);
      await db.Image.destroy({
        where: {
          propertyId: id,
        },
      });
      const cloudinayImage = await images.map(async (image) => {
        const response = await cloudinary.uploader.upload(image, {
          folder: "PERN/Property",
        });
        await db.Image.create({
          publicId: response.public_id,
          url: response.url,
          propertyId: property.id,
        });
      });
      Promise.all(cloudinayImage);
    }
    await db.Property.update(
      {
        name: name,
        description: description,
        listingType: listingType,
        price: price,
        propertyTypeId: propertyTypeId,
        address: address,
        featureImage: featureImage,
        bedRoom: bedRoom,
        bathRoom: bathRoom,
        yearBuild: yearBuild,
        propertySize: propertySize,
        owner: owner,
      },
      {
        where: { id },
      }
    );
    return res.status(200).json({
      success: true,
      mes: "Update property successfully",
    });
  } catch (error) {
    return throwError(500, error.message, res, next);
  }
};

module.exports = {
  createProperty,
  getAllProperty,
  getPropertyOwner,
  deletePropertyOwner,
  deletePropertyAdmin,
  updateProperty,
};
