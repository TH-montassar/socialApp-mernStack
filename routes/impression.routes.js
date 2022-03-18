const router = require("express").Router();
const {
  like,
  dislike,
  newLike,
  getreacts,
  deletereact,
} = require("../controllers/react.controllers");
const verifyToken = require("../middlewares/verifyToken");
const Post = require("../models/post.models");
const react = require("../models/react.models");
const { isReactOwner } = require("../middlewares/isReactOwner");
router.param("react", async (req, res, next, id) => {
  try {
    const react = await react.findById(id);

    if (!react) {
      return res.status(404).json("not found react");
    } else {
      req.react = react;
      next();
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.param("post", async (req, res, next, id) => {
  try {
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json("not found post");
    } else {
      req.post = post;
      next();
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post("/:post/like", verifyToken, newLike);
router.post("/:post/dislike", verifyToken, newLike);
router.put("/:post/dislike/:react", verifyToken, dislike);
router.get("/:post/", verifyToken, getreacts);
router.delete("/:post/delete/:react", isReactOwner, verifyToken, deletereact);

module.exports = router;
