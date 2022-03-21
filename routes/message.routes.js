const {
  createMessage,
  getMessages,
  deleteMessage,
} = require("../controllers/message.controllers");
const { activity } = require("../middleware");
const verifyToken = require("../middleware/verifyToken");

const router = require("express").Router();

router.post("/", verifyToken,activity, createMessage);


router.delete("/deleteMessage/:messageId", verifyToken, deleteMessage);

module.exports = router;
