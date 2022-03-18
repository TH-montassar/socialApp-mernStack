const {
  createComment,
  updateComment,
  getComment,
  getComments,
  deleteComment,
  createCommentReplay,
} = require("../controllers/commend.controllers");
const { isCommentOwner } = require("../middlewares/isCommentOwner");
const verifyToken = require("../middlewares/verifyToken");
const Comment = require("../models/comment.models");


const router = require("express").Router();

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
  const post=await Post.findById(id);

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


router.post("/:post/:comment", verifyToken,createCommentReplay);
router.post("/:post/", verifyToken, createComment);
router.put("/:post/comment/:comment", verifyToken, isCommentOwner, updateComment);
router.get("/:post/comment/:comment", verifyToken, isCommentOwner, getComment);
router.get("/:post/", verifyToken, getComments);
router.delete("/:post/comment/:comment", verifyToken, isCommentOwner, deleteComment);
module.exports = router;
