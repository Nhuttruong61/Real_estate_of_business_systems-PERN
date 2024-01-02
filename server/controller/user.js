const db = require("../models");
const { throwError } = require("../middleware/errorHandler");

const getUser = async (req, res, next) => {
  try {
    const { uid } = req.user;
    const response = await db.User.findByPk(uid);
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
    const users = await db.User.findAll();
    return res.json({
      success: Boolean(users) ? "Got." : "Couldn't find",
      users,
    });
  } catch (error) {
    return throwError(500, error.message, res, next);
  }
};

module.exports = {
  getUser,
  getUsers,
};
