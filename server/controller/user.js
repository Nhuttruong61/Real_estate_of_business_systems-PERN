const db = require("../models");
const { throwError } = require("../middleware/errorHandler");
const { Sequelize } = require("sequelize");

const getUser = async (req, res, next) => {
  try {
    const { uid } = req.user;
    const response = await db.User.findByPk(uid, {
      attributes: { exclude: ["password", "refeshToken"] },
    });
    if (!response) return throwError(401, "User not default", res, next);
    return res.json({
      success: Boolean(response) ? "Got." : "Couldn't find",
      response,
    });
  } catch (error) {
    return throwError(500, error.message, res, next);
  }
};

const getUserId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await db.User.findByPk(id, {
      attributes: { exclude: ["password"] },
    });
    if (!response) return throwError(401, "User not default", res, next);
    return res.json({
      success: Boolean(response) ? "Got." : "Couldn't find",
      response,
    });
  } catch (error) {
    return throwError(500, error.message, res, next);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const { sort, name, ...query } = req.query;
    const options = {};
    if (name)
      query.name = Sequelize.where(
        Sequelize.fn("LOWER", Sequelize.col("name")),
        "LIKE",
        `%${name.toLowerCase()}%`
      );
    if (sort) {
      const order = sort
        .split(",")
        .map((item) =>
          item.startsWith("-") ? [item.replace("-", ""), "DESC"] : [item, "ASC"]
        );
      options.order = order;
    }
    const users = await db.User.findAll({
      attributes: { exclude: ["password"] },
      where: query,
      ...options,
    });
    return res.json({
      success: Boolean(users) ? "Got." : "Couldn't find",
      users,
    });
  } catch (error) {
    return throwError(500, error.message, res, next);
  }
};
const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const response = await db.User.destroy({
      where: { id },
    });
    if (!response) return throwError(401, "User not default", res, next);
    return res.json({
      success: Boolean(response) ? "Got." : "Couldn't find",
      mes: "Delete successfully",
    });
  } catch (error) {
    return throwError(500, error.message, res, next);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { name, email, address } = req.body;
    const user = await db.User.findByPk(id);
    if (!user) return throwError(401, "User not default", res, next);
    const userUpdate = await user.update({ name, email, address });
    return res.status(200).json({
      success: true,
      mes: "Update successful",
      userUpdate,
    });
  } catch (error) {
    return throwError(500, error.message, res, next);
  }
};
module.exports = {
  getUser,
  getUsers,
  deleteUser,
  updateUser,
  getUserId,
};
