const router = require("express").Router();
const ctrls = require("../controller/property");

router.post("/create-property", ctrls.createProperty);
module.exports = router;
