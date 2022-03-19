
const Post = require("../models/post.models");

const createPost = async (req, res) => {
  try {
    const newPost = new Post({
      content: req.body.content,
      author: req.verifiedUser._id,

      image: req.body.image,
    });
    const savedPost = await newPost.save();
    console.log(savedPost);
    // const newActivity = new Activity({
    //   activity: "post",
    //   post: req.post._id,
    // });

    // const savedActivity = await newActivity.save();
    // console.log(savedActivity);

    return res.status(201).json(savedPost);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const sharePost = async (req, res) => {
  const previousPost = req.post._id;

  const newPost = new Post({
    author: req.verifiedUser._id,
    content: req.body.content,
    post: previousPost,
  });

  try {
    const savedPost = await newPost.save();

    return res.status(201).json(savedPost);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const updatePost = async (req, res) => {
  try {
    const post = req.post;

    const updatePost = await Post.findByIdAndUpdate(post._id, req.body, {
      new: true,
    });
    return res.status(200).json(updatePost);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const getMyPost = async (req, res) => {
  const currentUser = req.verifiedUser._id;

  console.log(currentUser);
  try {
    const post = await Post.find({ author: currentUser });

    const PostLength = post.length;
    if (PostLength === 0) {
      return res.status(401).json("no Post");
    }
    return res.status(200).json(post);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const deletePost = async (req, res) => {
  try {
    const post = req.post;
    await post.delete();
    //const deletePost = await Post.findByIdAndDelete(post._id)

    return res.status(200).json("delete Post");
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.createPost = createPost;
module.exports.sharePost = sharePost;

module.exports.updatePost = updatePost;

module.exports.getMyPost = getMyPost;
module.exports.getPosts = getPosts;
module.exports.deletePost = deletePost;
