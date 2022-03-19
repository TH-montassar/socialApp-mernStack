const Relationship = require("../models/relationship.models");
const User = require("../models/user.models");

const sendFriendRequest = async (req, res) => {
  const currentUser = req.verifiedUser._id;
  console.log(currentUser);
  const receiver = req.user._id;
  console.log(receiver);

  if (receiver.toString() === currentUser.toString()) {
    return res.status(404).json(" you can't send to your self");
  }

  const newRelationship = new Relationship({
    status: "requested",
    receiver: receiver,
    user: currentUser,
  });

  try {
    const savedRelationship = await newRelationship.save();

    return res.status(201).json(savedRelationship);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const acceptFriendRequest = async (req, res) => {
  const currentUser = req.verifiedUser._id;
  const relationship = await Relationship.findById({ receiver: currentUser });

  const user = req.user._id;
  if (! relationship._id ) {
    return res.status(401).json(" no friend req for you");
  }

  try {
    const acceptFriendRequest = await relationship.findByIdAndUpdate(
      relationshipId,
      { status: "friend" },
      { new: true }
    );

    return res.status(201).json(acceptFriendRequest);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const rejectFriendRequest = async (req, res) => {
  const relationship = req.relationship;

  try {
    await Relationship.findByIdAndDelete(relationship);

    return res.status(204).json();
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getFriends = async (req, res) => {
  const currentUser = req.verifiedUser._id;

  try {
    const friend = await Relationship.find({ user: currentUser });

    if (friend.status !== "friend") {
      return res.status(401).json("no friend");
    }

    return res.status(200).json(friend);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const getFriend = async (req, res) => {
  const currentUserId = req.verifiedUser._id;
  const friendId = req.user._id;
  console.log(currentUserId);
  console.log(friendId);

  try {
    const friend = await Relationship.findById(friendId);
    if (friend.user != currentUserId && friend.status == "friend") {
      return res.status(401).json("you dent have any friend with this id");
    }
    return res.status(200).json(friend);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.sendFriendRequest = sendFriendRequest;
module.exports.getFriend = getFriend;
module.exports.acceptFriendRequest = acceptFriendRequest;
module.exports.rejectFriendRequest = rejectFriendRequest;

module.exports.getFriends = getFriends;
