import { StatusCodes } from "http-status-codes";
import "express-async-errors";
import { BadRequestError, UnauthenticatedError } from "../Errors/index.js";
import Post from "../models/postsModel.js";
import jwt from "jsonwebtoken";

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
    res.status(StatusCodes.CREATED).json({ content: post, message: "Posted!" });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

const getPosts = async (req, res) => {
  //get user coords
  console.log("getting posts");
  const { coordinates } = req.query;
  console.log(coordinates);
  //posts within 5 miles
  const distanceInMeters = 8046.7;

  const coordinatesArray = coordinates.split(",");
  const newCoords = [];
  coordinatesArray.map((coord) => newCoords.push(Number(coord)));

  try {
    const posts = await Post.find({
      location: {
        $near: {
          $geometry: { type: "Point", coordinates: newCoords },
          $maxDistance: distanceInMeters,
        },
      },
    }).sort({ createdAt: -1 });

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

export { createPost, getPosts, editPost };
