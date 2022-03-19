const Relationship = require("../models/relationship.models");
const User = require("../models/user.models");

const sendFriendRequest = async (req, res) => {
  const currentUser = req.verifiedUser._id.toString();
  console.log(currentUser);
  // const friend = req.user._id.toString();
  // console.log(friend);

  // const recipientUser = await User.findById(friend);

  // if (recipientUser === currentUser) {
  //   return res.status(404).json(" you can't send to your self");
  // }

  // const newRelationship = new Relationship({
  //   status: "requested",
  //   friend: friend,
  //   user: user,
  // });

  // try {
  //   const savedRelationship = await newRelationship.save();

  //   return res.status(201).json(savedRelationship);
  // } catch (err) {
  //   return res.status(500).json(err);
  // }
};

const acceptFriendRequest = async (req, res) => {
  const user = req.verifiedUser._id;
  const relationship = await Relationship.findById({ friend: user });
  const relationshipId = relationship._id;
  if (!recipientFriend) {
    return res.status(401).json(" no friend req for you");
  }

  try {
    const acceptFriendRequest = await relationship.findByIdAndUpdate(
      relationshipId,
      { friend: "friend" },
      { new: true }
    );

    const savedRelationship = await acceptFriendRequest.save();

    return res.status(201).json(savedRelationship);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const ejectFriendRequest = async (req, res) => {
  const user = req.verifiedUser._id;
  const relationship = await Relationship.findById({ friend: user });
  const relationshipId = relationship._id;
  if (!recipientFriend) {
    return res.status(401).json(" no friend req for you");
  }

  try {
    const acceptFriendRequest = await relationship.findByIdAndUpdate(
      relationshipId,
      { friend: "blocked" },
      { new: true }
    );

    const savedRelationship = await acceptFriendRequest.save();

    return res.status(201).json(savedRelationship);
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

module.exports.getFriends = getFriends;
