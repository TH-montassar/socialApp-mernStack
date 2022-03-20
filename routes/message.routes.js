const {
  createMessage,
  getMessages,
  deleteMessage,
} = require("../controllers/message.controllers");
const verifyToken = require("../middleware/verifyToken");

const router = require("express").Router();

router.post("/", verifyToken, createMessage);
router.get("/", verifyToken, getMessages);

router.delete("/deleteMessage/:messageId", verifyToken, deleteMessage);

module.exports = router;
