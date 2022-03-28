const Profile = require("../models/profile.models");

const getProfile = async (req, res) => {
  const user = req.user.profile;

  try {
    const profile = await Profile.findById(user);
    return res.status(200).json(profile);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getMyProfile = async (req, res) => {
  const profileId = req.verifiedUser.profile;
  //console.log("porfile id from current use",profileId);
  try {
    const profile = await Profile.findById(profileId);
    //console.log(profile);
    return res.status(200).json(profile);
  } catch (err) {
    return res.status(500).json(err);
  }
};



const updateProfile = async (req, res) => {
  const user = req.verifiedUser.profile;
  try {
    const updateProfile = await Profile.findByIdAndUpdate(user, req.body, {
      new: true,
    });
    return res.status(200).json(updateProfile);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.updateProfile = updateProfile;
module.exports.getProfile = getProfile;
module.exports.getMyProfile = getMyProfile;
