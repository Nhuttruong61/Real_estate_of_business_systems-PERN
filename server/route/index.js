const { badRequestUrl, errorHandler } = require("../middleware/errorHandler");
const auth = require("./auth");
const initRoute = (app) => {
  app.use("/api/auth", auth);
  app.use("/", badRequestUrl);
  app.use(errorHandler);
};
module.exports = initRoute;
