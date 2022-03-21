const Activity = require("../models/activity.models");
module.exports.activity = async (req, res, next) => {
  const activity = res.activity;
  console.log(activity)
  try {
    const newActivity = new Activity({
      activity: activity.id,
      activityModel: activity.model,
      user: req.verifiedUser._id,
      action: activity.action,
    });
    await newActivity.save();
  } catch (err) {
    console.log(err);
  } finally {
    next();
  }
};
