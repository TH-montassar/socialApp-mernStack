const Profile = require("../models/profile.models");

const getOwnedProfile = async (req, res) => {
  const profileId = req.verifiedUser.profile;
  console.log(profileId);
  try {
    const profile = await Profile.findById(profileId);

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

const removeAllInfoProfile = async (req, res) => {
  const profileId = req.profile._id;
  console.log(profileId);
  try {
    const profile = await Profile.findById(profileId);
    console.log(profile);

    profile.birthday = null;
    profile.avatar = null;
    profile.bio = null;
    profile.cover = null;

    const savedProfile = await profile.save();
    return res.status(201).json(savedProfile);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const removeBirthday = async (req, res) => {
  const profileId = req.profile._id;
  console.log(profileId);
  try {
    const profile = await Profile.findById(profileId);
    console.log(profile);

    profile.birthday = null;

    const savedProfile = await profile.save();
    return res.status(201).json(savedProfile);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const removeAvatar = async (req, res) => {
  const profileId = req.profile._id;
  console.log(profileId);
  try {
    const profile = await Profile.findById(profileId);
    console.log(profile);

    profile.avatar = null;

    const savedProfile = await profile.save();
    return res.status(201).json(savedProfile);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const removeBio = async (req, res) => {
  const profileId = req.profile._id;
  console.log(profileId);
  try {
    const profile = await Profile.findById(profileId);
    console.log(profile);
    profile.bio = null;

    const savedProfile = await profile.save();
    return res.status(201).json(savedProfile);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const removeCover = async (req, res) => {
  const profileId = req.profile._id;
  console.log(profileId);
  try {
    const profile = await Profile.findById(profileId);
    console.log(profile);

    profile.cover = null;

    const savedProfile = await profile.save();
    return res.status(201).json(savedProfile);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.removeBirthday = removeBirthday;
module.exports.removeCover = removeCover;
module.exports.removeBio = removeBio;
module.exports.removeAvatar = removeAvatar;

module.exports.getOwnedProfile = getOwnedProfile;
module.exports.updateProfile = updateProfile;
module.exports.removeAllInfoProfile = removeAllInfoProfile;
