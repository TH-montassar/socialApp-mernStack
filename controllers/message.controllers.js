const Message = require("../models/message.Models");

const createMessage = async (req, res) => {
  const newMessage = new Message({
    content: req.body.content,
    sender: req.verifiedUser._id,
    receiver: req.body.receiver,
  });

  try {
    const savedMessage = await newMessage.save();

    return res.status(201).json(savedMessage);
  } catch (err) {
    return res.status(500).json(err);
  }
};


const getMessages = async (req, res) => {
  try {
    const Messages = await Message.find();

    return res.status(200).json(Messages);
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
