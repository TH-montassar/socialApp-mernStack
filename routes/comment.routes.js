const {
  createComment,
  updateComment,
  getComment,
  getComments,
  deleteComment,
} = require("../controllers/commend.controllers");
const verifyToken = require("../middlewares/verifyToken");

const router = require("express").Router();
router.post("/", verifyToken, createComment);
router.put("/:commentId", verifyToken, updateComment);
router.get("/:commentId", verifyToken,getComment);
router.get("/", verifyToken,getComments);
router.delete("/:commentId", verifyToken,deleteComment);
module.exports = router;
