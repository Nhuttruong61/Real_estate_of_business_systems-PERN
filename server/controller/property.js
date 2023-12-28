const { throwError } = require("../middleware/errorHandler");
const db = require("../models");

const createProperty = async (req, res, next) => {
  try {
  } catch (error) {
    return throwError(500, error.message, res, next);
  }
};

module.exports = {
  createProperty,
};
