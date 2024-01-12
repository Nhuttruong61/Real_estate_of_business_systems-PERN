const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const dbconnect = require("./config/dbconnect");
const initRoute = require("./route/index");
const { errorHandler } = require("./middleware/errorHandler");
const cloudinary = require("cloudinary");
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(errorHandler);
initRoute(app);
dbconnect();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
