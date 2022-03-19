const { sendFriendRequest, rejectFriendRequest } = require("../controllers/relationship.controllers");
const verifyToken = require("../middlewares/verifyToken");
const router = require("express").Router();
const User = require("../models/user.models");
const Relationship =require("../models/relationship.models")
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

router.post("/:user/", verifyToken, sendFriendRequest);
router.delete("/:user/:relationship", verifyToken, rejectFriendRequest);


module.exports = router;