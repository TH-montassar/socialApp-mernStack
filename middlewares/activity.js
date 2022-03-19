const Activity = require("../models/activity.models");
module.exports.activity = async (req, res, next) => {
  try {
    const newActivity = new Activity({
      activity: savedComment._id,
      activityModel: "Comment",
      user: req.verifiedUser._id,
    });
    await newActivity.save();
    next();
  } catch (err) {
    return res.status(500).json(err);
  }
};
