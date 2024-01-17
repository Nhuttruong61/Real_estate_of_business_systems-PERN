const { throwError } = require("../middleware/errorHandler");
const bcrypt = require("bcrypt");
const db = require("../models");
const jwt = require("jsonwebtoken");
const register = async (req, res, next) => {
  try {
    const { phone, password, name, role } = req.body;
    const user = await db.User.findOne({
      where: { phone: phone },
    });
    if (user) {
      return throwError(
        409,
        "User with this phone number already exists",
        res,
        next
      );
    }
    await db.User.create({ phone, password, name, role });

    return res.status(200).json({
      success: true,
      mes: "Your register acccount successfully",
    });
  } catch (error) {
    return throwError(500, error.message, res, next);
  }
};

const signIn = async (req, res, next) => {
  try {
    const { phone, password } = req.body;
    const user = await db.User.findOne({
      where: { phone: phone },
    });
    if (!user) {
      return throwError(401, "User not found", res, next);
    }
    const isMatchingPassword = bcrypt.compareSync(password, user.password);
    if (!isMatchingPassword) {
      return throwError(404, "Password does not match", res, next);
    }
    const token = jwt.sign(
      { uid: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "30s" }
    );
    const refreshtoken = jwt.sign(
      { uid: user.id },
      process.env.JWT_SECRET_REFRESH_TOKEN,
      { expiresIn: "20d" }
    );
    user.refeshToken = refreshtoken;
    await user.save();
    return res.status(200).json({
      success: true,
      accessToken: token,
      refreshtoken: refreshtoken,
    });
  } catch (error) {
    return throwError(500, error.message, res, next);
  }
};

const refreshToken = async (req, res, next) => {
  try {
    const { refreshtoken } = req.body;
    const user = await db.User.findOne({
      where: { refeshToken: refreshtoken },
    });
    if (!user) return throwError(401, "User not default", res, next);

    jwt.verify(refreshtoken, process.env.JWT_SECRET_REFRESH_TOKEN, (err) => {
      if (err) {
        return throwError(401, "Token expired", res, next);
      } else {
        const token = jwt.sign(
          { uid: user.id, role: user.role },
          process.env.JWT_SECRET,
          { expiresIn: "3000s" }
        );
        res.status(200).json({
          success: true,
          token: token,
        });
      }
    });
  } catch (error) {
    return throwError(500, error.message, res, next);
  }
};

const logOut = async (req, res, next) => {
  try {
  } catch (error) {
    return throwError(500, error.message, res, next);
  }
};

module.exports = {
  register,
  signIn,
  logOut,
  refreshToken,
};
