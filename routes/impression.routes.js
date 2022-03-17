const router = require("express").Router();
const {
  like,
  dislike,
  newLike,
  getImpressions,
  deleteImpression,
} = require("../controllers/impression.controllers");
const verifyToken = require("../middlewares/verifyToken");
const Post = require("../models/post.models");
const Impression = require("../models/impression.models");
const { isImpressionOwner } = require("../middlewares/isimpressionOwner");
router.param("impression", async (req, res, next, id) => {
  try {
    const impression = await Impression.findById(id);

    if (!impression) {
      return res.status(404).json("not found impression");
    } else {
      req.impression = impression;
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

router.post("/:post/newLike", verifyToken, newLike);

router.put("/:post/like/:impression", verifyToken, like);
router.put("/:post/dislike/:impression", verifyToken, dislike);
router.get("/:post/", verifyToken, getImpressions);
router.delete("/:post/delete/:impression", isImpressionOwner, verifyToken, deleteImpression);

module.exports = router;
