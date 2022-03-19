const { sendFriendRequest } = require("../controllers/relationship.controllers");
const verifyToken = require("../middlewares/verifyToken");
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

router.post("/:user/", verifyToken, sendFriendRequest);


module.exports = router;