const router = require("express").Router();

const {
  getProfile,
  updateProfile,
  getMyProfile,
  updateProfillee,
} = require("../controllers/profile.controllers");
const {
  sendFriendRequest,
  rejectFriendRequest,
  acceptFriendRequest,
  getFriend,
  getFriends,
} = require("../controllers/relationship.controllers");
const { getMyActivities } = require("../controllers/activity.controllers");
//
const Profile = require("../models/profile.models");
const User = require("../models/user.models");
const Relationship = require("../models/relationship.models");
//
const { verifyToken, isProfileOwner } = require("../middleware");
//
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
//relationship
router.post("/:user/", verifyToken, sendFriendRequest);

router.delete("/:user/:relationship", verifyToken, rejectFriendRequest);
router.put("/:user/acceptFriend", verifyToken, acceptFriendRequest);
router.get("/friends", verifyToken, getFriends);

//profile
//! 3lech lezmha  /:user/:profile  kol user ya3mel update ken ll profile mte3o
router.put("/:user/:profile", verifyToken, isProfileOwner, updateProfile);

router.put("/profile", verifyToken, updateProfillee);
router.get("/:user/profile", verifyToken, getProfile);
router.get("/Profile/me", verifyToken, getMyProfile);

//user activity
router.get("/activity/me", verifyToken, getMyActivities);
module.exports = router;
