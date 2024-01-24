const router = require("express").Router();
const ctrls = require("../controller/property");
const { verifyToken, isAgent, isAdmin } = require("../middleware/verifyToken");

router.post("/create-property", verifyToken, isAgent, ctrls.createProperty);
router.get("/gets-property", ctrls.getAllProperty);
router.get(
  "/gets-property-owner/:id",
  verifyToken,
  isAgent,
  ctrls.getPropertyOwner
);
router.delete(
  "/delete-property/:id/:idowner",
  verifyToken,
  isAgent,
  ctrls.deletePropertyOwner
);
router.delete(
  "/delete-property-admin/:id",
  verifyToken,
  isAdmin,
  ctrls.deletePropertyAdmin
);

router.put(
  "/update-property/:id/:idowner",
  // verifyToken,
  // isAgent,
  ctrls.updateProperty
);
module.exports = router;
