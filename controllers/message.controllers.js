const Message = require("../models/message.Models");

const createMessage = async (req, res) => {
  const newMessage = new Message({
    content: req.body.content,
    sender: req.verifiedUser._id,
    receiver: req.body.receiver,
  });

  try {
    const savedMessage = await newMessage.save();
    res.activity = { id: savedMessage._id, model: "Message", action: "send" };

    return res.status(201).json(savedMessage);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getMessages = async (req, res) => {
  const currentUser = req.verifiedUser._id;
  const user = req.user._id.toString();
  console.log(currentUser, " currentUser");
  console.log(user, " user");
  try {
    const messages = await Message.find();
    if (
      (messages.sender === currentUser && messages.receiver === user) ||
      (messages.receiver === currentUser && messages.sender === user)
    ) {
      return res.status(200).json(messages);
    } else {
      return res.status(200).json("no message ");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

//filterComment

const deleteMessage = async (req, res) => {
  const id = req.params.messageId;
  try {
    const deleteMessage = await Message.findByIdAndDelete(id);
    return res.status(200).json(deleteMessage);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.createMessage = createMessage;

module.exports.getMessages = getMessages;
module.exports.deleteMessage = deleteMessage;
