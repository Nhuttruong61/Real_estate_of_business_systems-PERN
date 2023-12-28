const { throwError } = require("./errorHandler");
const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return throwError(401, "Create token failed", res, next);
  const rawToken = token.split(" ")[1];
  jwt.verify(rawToken, process.env.JWT_SECRET, (err, decode) => {
    if (err) return throwError(401, "Create invalid token", res, next);
    req.user = decode;
    next();
  });
};

const isAgent = (req, res, next) => {
  const { role } = req.user;
  if (role === "USER") return throwError(401, "You cannot isAgent ", res, next);
  next();
};

const isAdmin = (req, res, next) => {
  const { role } = req.user;
  if (role !== "ADMIN")
    return throwError(401, "You cannot is access", res, next);
  next();
};
module.exports = {
  verifyToken,
  isAdmin,
  isAgent,
};
