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
  blockFriend,
  getOwnedRelationship,
} = require("../controllers/relationship.controllers");
const { getMyActivities } = require("../controllers/activity.controllers");
//
const Profile = require("../models/profile.models");
const User = require("../models/user.models");
const Relationship = require("../models/relationship.models");
//
const {
  verifyToken,
  isProfileOwner,
  isRelationshipOwner,
  activity,
} = require("../middleware");
const { getMessages } = require("../controllers/message.controllers");
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
//relationship router
router.post("/:user/relationships/addFriend", verifyToken, sendFriendRequest,activity);
//!update my relation
router.put(
  "/relationships/:relationship/accept",
  verifyToken,
  isRelationshipOwner,
  acceptFriendRequest,activity
);
//!delete  my relation
router.delete(
  "/relationships/:relationship/reject",
  verifyToken,
  isRelationshipOwner,
  rejectFriendRequest
);
// block any user (no friend)
router.post("/:user/relationships/block", verifyToken, blockFriend);
//!whey user:
router.put(
  "/relationships/:relationship/block",
  verifyToken,
  isRelationshipOwner,
  blockFriend
);

router.get("/relationships", verifyToken,getOwnedRelationship);

//profile router


router.put("/profile", verifyToken, updateProfile);
router.get("/:user/profile", verifyToken, getProfile);
router.get("/Profile/me", verifyToken, getMyProfile);

//user activity
router.get("/activity/me", verifyToken, getMyActivities);
//messages
router.get("/:user/conversation", verifyToken, getMessages);
module.exports = router;
