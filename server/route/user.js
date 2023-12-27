const router = require("express").Router();

const ctrls = require("../controller/user");
const { verifyToken } = require("../middleware/verifyToken");

router.get("/get-current", verifyToken, ctrls.getUser);

module.exports = router;
