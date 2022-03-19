const router = require("express").Router();
const {
  createComment,
  updateComment,
  getComment,
  getComments,
  deleteComment,
  createCommentReplay,
} = require("../controllers/commend.controllers");
const {
  dislike,

  newReact,
  getReacts,
  deleteReact,
  getReactsByPost,
  like,
} = require("../controllers/react.controllers");
const {
  createPost,
  sharePost,
  updatePost,
  getMyPost,
  getPosts,
  deletePost,
} = require("../controllers/post.controllers");
const { isCommentOwner } = require("../middlewares/isCommentOwner");

const Comment = require("../models/comment.models");

const { isPostOwner } = require("../middlewares/isPostOwner");
const verifyToken = require("../middlewares/verifyToken");

const Post = require("../models/post.models");

const React = require("../models/react.models");
const { isReactOwner } = require("../middlewares/isReactOwner");
const { activity } = require("../middlewares/activity");

router.param("react", async (req, res, next, id) => {
  try {
    const react = await React.findById(id);

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

router.param("comment", async (req, res, next, id) => {
  try {
    const comment = await Comment.findById(id);

    if (!comment) {
      return res.status(404).json("not found comment");
    } else {
      req.comment = comment;
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
// ----------------------------posts----------
router.post("/:post/share", verifyToken, sharePost);
router.post("/", verifyToken, createPost);
router.put("/:post", verifyToken, isPostOwner, updatePost);
router.get("/", getPosts);
router.get("/me", verifyToken, getMyPost);
router.delete("/:post", verifyToken, isPostOwner, deletePost);
// ----------------------------comments----------
router.post("/:post/:comment", verifyToken, createCommentReplay);
router.post("/:post", verifyToken,activity ,createComment);
router.put(
  "/:post/comments/:comment",
  verifyToken,
  isCommentOwner,
  updateComment
);
//router.get("/:post/comments/:comment", verifyToken, isCommentOwner, getComment);
router.get("/:post/", verifyToken, getComments);
router.delete(
  "/:post/comments/:comment",
  verifyToken,
  isCommentOwner,
  deleteComment
);
// ----------------------------Reacts----------
router.post("/:post/reacts/like", verifyToken, newReact);
router.post("/:post/reacts/dislike", verifyToken,newReact);
router.get("/:post/reacts", verifyToken, getReactsByPost);
router.delete("/:post/reacts/:react", isReactOwner, verifyToken, deleteReact);
module.exports = router;
