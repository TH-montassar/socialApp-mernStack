

  const { getOwnedProfile, updateProfile, removeAllInfoProfile, removeCover, removeAvatar, removeBio, removeBirthday } = require("../controllers/profile.controllers");
const { isProfileOwner } = require("../middlewares/isProfileOwner");
const verifyToken = require("../middlewares/verifyToken");
const Profile = require("../models/profile.models");
 
  
  const router = require("express").Router();
  

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
  
  

  router.put("/:profile/Birthday", verifyToken,isProfileOwner, removeBirthday);
  router.put("/:profile/Cover", verifyToken,isProfileOwner, removeCover);
  router.put("/:profile/Bio", verifyToken,isProfileOwner, removeBio);
  router.put("/:profile/Avatar", verifyToken,isProfileOwner, removeAvatar);
  

  router.put("/:profile", verifyToken,isProfileOwner, updateProfile);
  router.post("/:profile", verifyToken,isProfileOwner, removeAllInfoProfile);

  router.get("/", verifyToken, getOwnedProfile);

  module.exports = router;
  