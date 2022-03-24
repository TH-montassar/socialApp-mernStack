const Comment = require("../models/comment.models");
const Post = require("../models/post.models");

const createPost = async (req, res, next) => {
  try {
    const newPost = new Post({
      content: req.body.content,
      //author: req.verifiedUser._id,

      image: req.body.image,
    });
    const savedPost = await newPost.save();
    res.activity = { id: savedPost._id, model: "Post", action: "create" };

    res.status(201).json(savedPost);
    return next();
  } catch (err) {
    return res.status(500).json(err);
  }
};

const sharePost = async (req, res, next) => {
  const previousPost = req.post._id;

  const newPost = new Post({
    author: req.verifiedUser._id,
    content: req.body.content,
    post: previousPost,
  });

  try {
    const savedPost = await newPost.save();
    res.activity = { id: savedPost._id, model: "Post", action: "sharePost" };
    res.status(201).json(savedPost);
    return next();
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
    const posts = await Post.find().populate("author");

    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const getPostsWithComment = async (req, res) => {
  try {
    /* Using the aggregation framework to join the posts collection with the comments collection. */
    const posts = await Post.aggregate([
      {
        $lookup: {
          from: "comments",
          localField: "_id",
          foreignField: "post",
          as: "PostsComments",
        },
      },
    ]).sort({ createdAt: -1 });
    await Post.populate(posts, { path: "author" });
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

module.exports.getPostsWithComment = getPostsWithComment;
module.exports.createPost = createPost;
module.exports.sharePost = sharePost;

module.exports.updatePost = updatePost;

module.exports.getMyPost = getMyPost;
module.exports.getPosts = getPosts;
module.exports.deletePost = deletePost;
