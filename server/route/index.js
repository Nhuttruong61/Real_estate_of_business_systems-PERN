const { badRequestUrl, errorHandler } = require("../middleware/errorHandler");
const auth = require("./auth");
const user = require("./user");
const property = require("./property");
const propertyType = require("./propertyType");

const initRoute = (app) => {
  app.use("/api/auth", auth);
  app.use("/api/user", user);
  app.use("/api/property", property);
  app.use("/api/properttype", propertyType);

  app.use("/", badRequestUrl);
  app.use(errorHandler);
};
module.exports = initRoute;
