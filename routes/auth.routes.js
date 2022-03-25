const { register, check, login } = require("../controllers/auth.controllers");
const { verifyToken } = require("../middleware");
const router = require("express").Router();
router.post("/register", register);
router.post("/login", login);
router.get("/check", verifyToken, check);
module.exports = router;
 