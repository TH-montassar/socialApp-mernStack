const {
  getProfile,
  updateProfile,
  getOwnedProfile,
} = require("../controllers/profile.controllers");
const {
  sendFriendRequest,
  rejectFriendRequest,
  acceptFriendRequest,
  getFriend,
  getFriends,
} = require("../controllers/relationship.controllers");

const { isProfileOwner } = require("../middlewares/isProfileOwner");
const verifyToken = require("../middlewares/verifyToken");
const Profile = require("../models/profile.models");
const User = require("../models/user.models");

const Relationship = require("../models/relationship.models");
const router = require("express").Router();

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
router.param("relationship", async (req, res, next, id) => {
  try {
    const relationship = await Relationship.findById(id);

    if (!relationship) {
      return res.status(404).json("not found relationship");
    } else {
      req.relationship = relationship;
      next();
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});
//-------------relationship--------------
router.post("/:user/", verifyToken, sendFriendRequest);

router.delete("/:user/:relationship", verifyToken, rejectFriendRequest);
router.put("/:user/acceptFriend", verifyToken, acceptFriendRequest);
router.get("/friends", verifyToken,getFriends);

//-------------relationship--------------
router.put("/:user/:profile", verifyToken, isProfileOwner, updateProfile);

router.get("/:user/profile", verifyToken, getProfile);
router.get("/myProfile", verifyToken, getOwnedProfile);


module.exports = router;
