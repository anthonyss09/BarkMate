import { StatusCodes } from "http-status-codes";
import "express-async-errors";
import { BadRequestError, UnauthenticatedError } from "../Errors/index.js";
import Post from "../models/postsModel.js";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import Comment from "../models/commentModel.js";

const createPost = async (req, res) => {
  const authorization = req.headers.authorization;
  const token = authorization.split(" ")[1];

  const {
    postImageName,
    text,
    authorId,
    coordinates,
    authorImageName,
    authorName,
    authorDogName,
    postImageUrl,
    authorImageUrl,
  } = req.body;

  const location = { type: "Point", coordinates: coordinates };

  if (!postImageUrl && !text) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Add text or pic to post." });
    throw new BadRequestError("Add text or pic to post.");
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) {
        console.log(err);
        res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "Invalid credentials." });
        throw new BadRequestError({ message: "Invalid credentials." });
      }
    });

    const post = await Post.create({
      text,
      authorId,
      location,
      authorImageName,
      authorName,
      authorDogName,
      postImageUrl,
      authorImageUrl,
    });
    console.log(post);
    res
      .status(StatusCodes.CREATED)
      .json({ content: post, message: "Posted successfully!" });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

const getPosts = async (req, res) => {
  //get user coords
  console.log("getting posts");
  const { coordinates, friends, pageNumber } = req.query;
  console.log(pageNumber);
  const parsedFriends = JSON.parse(friends);
  //posts within 5 miles
  const distanceInMeters = 8046.7;

  const coordinatesArray = coordinates.split(",");
  const newCoords = [];
  coordinatesArray.map((coord) => newCoords.push(Number(coord)));

  try {
    const friendlyUsers = await User.find({
      friends: { $in: parsedFriends },
    });
    const friendIds = friendlyUsers.map((user) => user._id);

    // const postsByFriends = await Post.find({
    //   authorId: { $in: friendIds },
    // }).limit(pageNumber * 2);

    // const nearbyPosts = await Post.find({
    //   location: {
    //     $near: {
    //       $geometry: { type: "Point", coordinates: newCoords },
    //       $maxDistance: distanceInMeters,
    //     },
    //   },
    // }).limit(pageNumber * 2);

    const posts = await Post.find({
      $or: [
        {
          location: {
            $geoWithin: {
              $centerSphere: [newCoords, 5 / 3963.2],
            },
          },
        },
        { authorId: { $in: friendIds } },
      ],
    })
      .sort({ createdAt: -1 })
      .limit(5 * pageNumber);

    // const posts = postsByFriends.concat(nearbyPosts).sort((x, y) => {
    //   return y.createdAt - x.createdAt;
    // });

    res.status(StatusCodes.OK).json({ posts });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    console.log(error);
  }
};

const editPost = async (req, res) => {
  const authorization = req.headers.authorization;
  const token = authorization.split(" ")[1];

  const { postId, update, currentUserCoords } = req.body;

  try {
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) {
        console.log(err);
        res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "Invalid credentials." });
        throw new BadRequestError({ message: "Invalid credentials." });
      }
    });

    const editedPost = await Post.findByIdAndUpdate(
      { _id: postId },
      { ...update },
      { new: true }
    );
    res.status(StatusCodes.OK).json({ message: "Comment posted!" });
  } catch (error) {
    console.log("there was an error", error);
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

const getUserPosts = async (req, res) => {
  const { userId } = req.query;

  try {
    const userPosts = await Post.find({ authorId: userId });
    res.status(StatusCodes.OK).json({ userPosts });
  } catch (error) {
    console.log("there was an error", error);
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

const editAllPostsByUser = async (req, res) => {
  const { userId, update } = req.body;

  console.log(update.profileImageUrl);
  try {
    const userPosts = await Post.updateMany(
      { authorId: userId },
      { authorImageUrl: update.profileImageUrl }
    );
    console.log(userPosts);
    res.status(StatusCodes.OK).json({ message: "posts by user updated" });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

const createComment = async (req, res) => {
  const { postId, authorId, text, authorImageUrl, authorName } = req.body;

  try {
    const newComment = await Comment.create({
      postId,
      authorId,
      text,
      authorImageUrl,
      authorName,
    });
    console.log("success", newComment);
    res
      .status(StatusCodes.CREATED)
      .json({ content: newComment, message: "Successfully commented!" });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

const getComments = async (req, res) => {
  const { postId } = req.query;
  console.log("fetching comments");

  try {
    const comments = await Comment.find({ postId: postId });
    console.log("successfully found comments", comments);
    res
      .status(StatusCodes.OK)
      .json({ content: comments, message: "Successfully retrieved comments!" });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

export {
  createPost,
  getPosts,
  editPost,
  getUserPosts,
  editAllPostsByUser,
  createComment,
  getComments,
};
