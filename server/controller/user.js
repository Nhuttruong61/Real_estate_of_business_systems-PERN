const db = require("../models");
const { throwError } = require("../middleware/errorHandler");

const getUser = async (req, res, next) => {
  try {
    const { uid } = req.user;
    const response = await db.User.findByPk(uid, {
      attributes: {
        exclude: ["password"],
      },
    });
    return res.json({
      success: Boolean(response) ? "Got." : "Couldn't find",
      response,
    });
  } catch (error) {
    return throwError(500, error.message, res, next);
  }
};

module.exports = {
  getUser,
};
