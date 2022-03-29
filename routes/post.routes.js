const router = require("express").Router();
const {
  createComment,
  updateComment,
  getComments,
  deleteComment,
  createCommentReplay,
} = require("../controllers/comment.controllers");
const {
  newReaction,
  deleteReaction,
  countReaction,

  countReactionDislike,
} = require("../controllers/reaction.controllers");
const {
  createPost,
  sharePost,
  updatePost,
  getMyPost,
  getPosts,
  deletePost,
  getPostsWithComment,
} = require("../controllers/post.controllers");

const Comment = require("../models/comment.models");
const Post = require("../models/post.models");
const Reaction = require("../models/reaction.models");
const {
  isPostOwner,
  isCommentOwner,
  isReactionOwner,
  activity,
  verifyToken,
} = require("../middleware");

//best method

router.param("reaction", async (req, res, next, id) => {
  try {
    const reaction = await Reaction.findById(id);

    if (!reaction) {
      return res.status(404).json("not found reaction");
    } else {
      req.reaction = reaction;
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

// posts routes
router.post("/:post/share", verifyToken, sharePost, activity);
router.post("/", verifyToken, createPost, activity);
router.put("/:post", verifyToken, isPostOwner, updatePost);
router.get("/", getPosts);
router.get("/me", verifyToken, getMyPost);
router.delete("/:post", verifyToken, isPostOwner, deletePost);
//comment routes

router.get("/getPostsWithComment", getPostsWithComment);
router.post("/:post/comments", verifyToken, createComment, activity);
router.post("/:post/:comment", verifyToken, createCommentReplay, activity);
//router.get("/:post/comments", verifyToken, getComments);
router.get("/comments", verifyToken, getComments);
router.put(
  "/:post/comments/:comment",
  verifyToken,
  isCommentOwner,
  updateComment
);
router.delete(
  "/:post/comments/:comment",
  verifyToken,
  isCommentOwner,
  deleteComment
);

// Reactions routes

// router.get("/:post/reactions/count/like", verifyToken, countReaction);
// router.get("/:post/reactions/count/dislike", verifyToken, countReaction);
router.post("/:post/reactions/like", verifyToken, newReaction, activity);
router.post("/:post/reactions/dislike", verifyToken, newReaction, activity);

router.delete(
  "/:post/reactions/:reaction",
  verifyToken,
  isReactionOwner,
  deleteReaction
);

module.exports = router;
