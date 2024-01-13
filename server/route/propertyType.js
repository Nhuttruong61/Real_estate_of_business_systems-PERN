const router = require("express").Router();
const Joi = require("joi");
const ctrls = require("../controller/propertyType");
const { verifyToken, isAdmin } = require("../middleware/verifyToken");
const validateDto = require("../middleware/validate");
const { stringReq, arrayReq } = require("../middleware/joinSheme");
router.post(
  "/create-propertytype",
  verifyToken,
  isAdmin,
  validateDto(
    Joi.object({
      name: stringReq,
      description: stringReq,
      images: arrayReq,
    })
  ),
  ctrls.createPropertyType
);
router.get("/get-all-propertytype", ctrls.getAllPropertyType);
router.get(
  "/get-propertytype/:id",

  ctrls.getPropertyType
);
router.put(
  "/update-propertytype/:id",
  verifyToken,
  isAdmin,
  validateDto(
    Joi.object({
      name: stringReq,
      description: stringReq,
      images: arrayReq,
    })
  ),
  ctrls.updatePropertyType
);
router.delete(
  "/delete-propertytype/:id",
  verifyToken,
  isAdmin,
  ctrls.deletePropertyType
);
module.exports = router;
