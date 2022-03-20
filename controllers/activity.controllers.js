const Activity = require("../models/activity.models");

const getMyActivities = async (req, res) => {
  const user = req.verifiedUser._id;
  try {
    const activities = await Activity.find({ user: user });
    return res.status(200).json(activities);
  } catch (err) {
    return res.status(200).json(err);
  }
};
module.exports.getMyActivities = getMyActivities;
