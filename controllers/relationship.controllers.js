const Relationship = require("../models/relationship.models");

const sendFriendRequest = async (req, res) => {
  const currentUser = req.verifiedUser._id;
  const receiver = req.user._id;
  if (receiver.toString() === currentUser.toString()) {
    return res.status(404).json(" you can't send to your self");
  }

  const newRelationship = new Relationship({
    // status: "requested",
    receiver: receiver,
    sender: currentUser,
  });

  try {
    const savedRelationship = await newRelationship.save();
    res.activity = {
      id: savedRelationship._id,
      model: "Relationship",
      action: "sendFriendRequest",
    };
    return res.status(201).json(savedRelationship);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const acceptFriendRequest = async (req, res) => {
  //const currentUser = req.verifiedUser._id;
  //const relationship = await Relationship.findOne({ receiver: currentUser });

  // if (!relationship) {
  //   return res.status(401).json(" no friend req for you");
  // }

  try {
    await Relationship.findByIdAndUpdate(
      req.relationship._id,
      { status: "friends" },
      { new: true }
    );
    res.activity = {
      id: savedPost._id,
      model: "relationship",
      action: " acceptFriendRequest",
    };
    return res.status(201).json("friend request accepted");
  } catch (err) {
    return res.status(500).json(err);
  }
};

const rejectFriendRequest = async (req, res) => {
  const relationship = req.relationship._id;

  try {
    await Relationship.findByIdAndDelete(relationship);
    return res.status(204).json();
  } catch (err) {
    return res.status(500).json("friend request rejected");
  }
};

const blockFriend = async (req, res) => {
  const currentUser = req.verifiedUser._id;
  const relationship = req.relationship.id;

  try {
    if (relationship) {
      await Relationship.findByIdAndUpdate(
        relationship,
        { status: "blocked" },
        { new: true }
      );
    } else {
      const receiver = req.user._id;
      const newRelationship = new Relationship({
        status: "blocked",
        receiver: receiver,
        sender: currentUser,
      });
      await newRelationship.save();
    }
    return res.status(200).json("successfully block friend ");
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getOwnedRelationship = async (req, res) => {
  const currentUserId = req.verifiedUser._id;
  const status = req.query.status;

  try {
    if (!status) {
      const users = await Relationship.find({
        $or: [{ sender: currentUserId }, { receiver: currentUserId }],
      })
        .populate("sender")
        .populate("receiver");
      return res.status(200).json(users);
    }
    const users = await Relationship.find({
      status,
      $or: [{ sender: currentUserId }, { receiver: currentUserId }],
    });

    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
};
module.exports.sendFriendRequest = sendFriendRequest;
module.exports.acceptFriendRequest = acceptFriendRequest;
module.exports.rejectFriendRequest = rejectFriendRequest;
module.exports.blockFriend = blockFriend;
module.exports.getOwnedRelationship = getOwnedRelationship;
