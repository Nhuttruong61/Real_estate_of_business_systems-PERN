const db = require("../models");
const { throwError } = require("../middleware/errorHandler");

const getUser = async (req, res, next) => {
  try {
    const { uid } = req.user;
    const response = await db.User.findByPk(uid, {
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
    const users = await db.User.findAll({
      attributes: { exclude: ["password"] },
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
module.exports = {
  getUser,
  getUsers,
  deleteUser,
};
