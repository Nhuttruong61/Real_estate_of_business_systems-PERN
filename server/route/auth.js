const router = require("express").Router();
const Joi = require("joi");
const ctrls = require("../controller/auth");
const validateDto = require("../middleware/validate");
const { stringReq } = require("../middleware/joinSheme");
router.post(
  "/register",
  validateDto(
    Joi.object({
      password: stringReq,
      name: stringReq,
      phone: stringReq,
      role: stringReq,
    })
  ),
  ctrls.register
);
router.post(
  "/sign-in",
  validateDto(
    Joi.object({
      phone: stringReq,
      password: stringReq,
    })
  ),
  ctrls.signIn
);
router.post(
  "/sign-in",
  validateDto(
    Joi.object({
      phone: stringReq,
      password: stringReq,
    })
  ),
  ctrls.signIn
);
router.post("/refresh-token", ctrls.refreshToken);
router.post(
  "/log-out",
  validateDto(
    Joi.object({
      phone: stringReq,
      password: stringReq,
    })
  ),
  ctrls.logOut
);

module.exports = router;
