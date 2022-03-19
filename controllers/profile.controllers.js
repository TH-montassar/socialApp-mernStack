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

const getOwnedProfile = async (req, res) => {
  const profileId = req.verifiedUser.profile;
  console.log(profileId);
  try {
    const profile = await Profile.findById(profileId);
    console.log(profile);
    return res.status(200).json(profile);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const updateProfile = async (req, res) => {
  const profile = req.profile;
  try {
    const updateProfile = await Profile.findByIdAndUpdate(
      profile._id,
      req.body,
      {
        new: true,
      }
    );
    return res.status(200).json(updateProfile);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.getProfile = getProfile;
module.exports.updateProfile = updateProfile;
module.exports.getOwnedProfile = getOwnedProfile;
