const { throwError } = require("./errorHandler");

const validateDto = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    const message = error.details[0].message?.replaceAll(`\"`, "");
    throwError(403, message, res, next);
  }
  next();
};
module.exports = validateDto;
