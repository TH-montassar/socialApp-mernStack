const {
  createPost,
  sharePost,
  updatePost,
  getMyPost,
  getPosts,
  deletePost,
} = require("../controllers/post.controllers");

const { isPostOwner } = require("../middlewares/isPostOwner");
const verifyToken = require("../middlewares/verifyToken");

const Post = require("../models/post.models");

const router = require("express").Router();

router.param("post", async (req, res, next, id) => {
  try {
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json("not found");
    } else {
      req.post = post;
      next();
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post("/:post", verifyToken, sharePost);
router.post("/", verifyToken, createPost);
router.put("/:post", verifyToken, isPostOwner, updatePost);
//!not working
router.get("/", getPosts);
router.get("/me", verifyToken, getMyPost);
router.delete("/:post", verifyToken, isPostOwner, deletePost);
module.exports = router;
