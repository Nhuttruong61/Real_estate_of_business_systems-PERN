const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  return res.status(statusCode).json({
    success: false,
    mes: error.message,
  });
};
const throwError = (code, message, res, next) => {
  const error = new Error(message);
  res.status(code);
  next(error);
};

const badRequestUrl = (req, res, next) => {
  const error = new Error(`Route ${req.originalUrl} not found`);
  res.status(404);
  next(error);
};

module.exports = {
  errorHandler,
  throwError,
  badRequestUrl,
};
