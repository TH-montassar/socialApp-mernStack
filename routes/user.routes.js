const { register, login } = require("../controllers/user.controllers");
const {
  getProfile,
  updateProfile,
  getOwnedProfile,
} = require("../controllers/profile.controllers");
const { isProfileOwner } = require("../middlewares/isProfileOwner");
const verifyToken = require("../middlewares/verifyToken");
const Profile = require("../models/profile.models");
const User = require("../models/user.models");
const router = require("express").Router();
router.post("/register", register);
router.post("/login", login);

router.param("user", async (req, res, next, id) => {
  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json("not found user");
    } else {
      req.user = user;
      next();
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.param("profile", async (req, res, next, id) => {
  try {
    const profile = await Profile.findById(id);

    if (!profile) {
      return res.status(404).json("not found profile");
    } else {
      req.profile = profile;
      next();
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.put("/:user/:profile", verifyToken, isProfileOwner, updateProfile);

router.get("/:user/:profile", verifyToken, getProfile);
router.get("/myProfile", verifyToken, getOwnedProfile);
module.exports = router;
