import { StatusCodes } from "http-status-codes";
import "express-async-errors";
import { BadRequestError, UnauthenticatedError } from "../Errors/index.js";
import Post from "../models/postsModel.js";

const createPost = async (req, res) => {
  const {
    imageName,
    text,
    userId,
    coordinates,
    userImageName,
    userName,
    userDogName,
  } = req.body;

  const coordsArray = coordinates.split(",");

  let newCoords = [];
  coordsArray.map((coord) => newCoords.push(Number(coord)));

  const location = { type: "Point", coordinates: newCoords };

  if (!imageName && !text) {
    throw new BadRequestError("Add text or pic to your post.");
  }

  try {
    const post = await Post.create({
      imageName,
      text,
      userId,
      location,
      userImageName,
      userName,
      userDogName,
    });
    console.log(post);
    res.status(StatusCodes.CREATED).json({ post });
  } catch (error) {
    console.log(error);
  }
};

const getPosts = async (req, res) => {
  //get user coords
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
    console.log(posts);
    res.status(StatusCodes.OK).json({ posts });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    console.log(error);
  }
};

export { createPost, getPosts };
