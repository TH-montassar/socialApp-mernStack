const Relationship = require("../models/relationship.models");
const User = require("../models/user.models");
const sendFriendRequest = async (req, res, next) => {
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
      model: "relationship",
      action: "send Friend Request",
    };
    res.status(201).json(savedRelationship);
    return next();
  } catch (err) {
    return res.status(500).json(err);
  }
};

const acceptFriendRequest = async (req, res, next) => {
  //const currentUser = req.verifiedUser._id;
  //const relationship = await Relationship.findOne({ receiver: currentUser });

  // if (!relationship) {
  //   return res.status(401).json(" no friend req for you");
  // }
  console.log(req.relationship._id);
  try {
    const acceptRequest = await Relationship.findByIdAndUpdate(
      req.relationship._id,
      { status: "friends" },
      { new: true }
    );
    res.activity = {
      id: acceptRequest._id,
      model: "relationship",
      action: " accept   Friend  Request",
    };
    res.status(201).json("friend request accepted");
    return next();
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

const blockFriend = async (req, res, next) => {
  const currentUser = req.verifiedUser._id;
  const relationship = req.relationship.id;

  try {
    if (relationship) {
      const blockFriend = await Relationship.findByIdAndUpdate(
        relationship,
        { status: "blocked" },
        { new: true }
      );

      res.activity = {
        id: blockFriend._id,
        model: "relationship",
        action: " block  Friend ",
      };
    } else {
      const receiver = req.user._id;
      const newRelationship = new Relationship({
        status: "blocked",
        receiver: receiver,
        sender: currentUser,
      });
      await newRelationship.save();
    }
    res.status(200).json("successfully block friend ");
    return next();
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
    if (status === "requested") {
      //!------

      const users = await Relationship.find({
        status: status,
        receiver: currentUserId,
      }).populate("sender");

      return res.status(200).json(users);
    }

    const users = await Relationship.find({
      status,
      $or: [{ sender: currentUserId }, { receiver: currentUserId }],
    })
      .populate("sender")
      .populate("receiver");
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getUser = async (req, res) => {
 
  const userId = req.user._id;
  try {
    const user = await User.findById(userId).populate("profile");
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.getUser = getUser;
module.exports.sendFriendRequest = sendFriendRequest;
module.exports.acceptFriendRequest = acceptFriendRequest;
module.exports.rejectFriendRequest = rejectFriendRequest;
module.exports.blockFriend = blockFriend;
module.exports.getOwnedRelationship = getOwnedRelationship;
