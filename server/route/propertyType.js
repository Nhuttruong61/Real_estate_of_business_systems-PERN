const router = require("express").Router();
const ctrls = require("../controller/propertyType");
const { verifyToken, isAdmin } = require("../middleware/verifyToken");

router.post(
  "/create-propertytype",
  verifyToken,
  isAdmin,
  ctrls.createPropertyType
);
router.get("/get-all-propertytype", ctrls.getAllPropertyType);
router.get(
  "/get-propertytype/:id",

  ctrls.getPropertyType
);
router.put(
  "/update-propertytype/:id",

  ctrls.updatePropertyType
);
router.delete(
  "/delete-propertytype/:id",
  verifyToken,
  isAdmin,
  ctrls.deletePropertyType
);
module.exports = router;
