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
  getUser,
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
  isReceiver,
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

router.get("/:user/getUser", verifyToken, getUser);

router.post(
  "/:user/relationships/addFriend",
  verifyToken,
  sendFriendRequest,
  activity
);
//!update my relation
router.put(
  "/relationships/:relationship/accept",
  verifyToken,
  isReceiver,
  acceptFriendRequest,
  activity
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
  blockFriend,
  activity
);
router.post("/:user/relationships/block", verifyToken, blockFriend);

router.get("/relationships", verifyToken, getOwnedRelationship);
router.get("/getUser", verifyToken, getUser);

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const uploadAvatar = multer({
  storage: storage,
  // limits: {
  //   fileSize: 500000,
  // },
});

//profile router
router.put(
  "/profile",
  verifyToken,
  uploadAvatar.single("avatar"),
  updateProfile
);
router.get("/:user/profile", verifyToken, getProfile);
router.get("/Profile/me", verifyToken, getMyProfile);

//user activity
router.get("/activity/me", verifyToken, getMyActivities);


//messages
router.get("/:user/conversation", verifyToken, getMessages);
module.exports = router;
