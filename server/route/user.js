const router = require("express").Router();

const ctrls = require("../controller/user");
const { verifyToken, isAdmin } = require("../middleware/verifyToken");

router.get("/get-current", verifyToken, ctrls.getUser);
router.get("/get-users", verifyToken, isAdmin, ctrls.getUsers);

module.exports = router;
