import { StatusCodes } from "http-status-codes";
import "express-async-errors";
import { BadRequestError, UnauthenticatedError } from "../Errors/index.js";
import Post from "../models/postsModel.js";
import {
  cloudinaryUpload,
  getAssetInfo,
  createImageTag,
} from "../utils/cloudinary_upload.js";

const createPost = async (req, res) => {
  // console.log(req.file);
  const {
    postImageName,
    text,
    authorId,
    coordinates,
    authorImageName,
    authorName,
    authorDogName,
    imageUrl,
  } = req.body;

  // const colors = await getAssetInfo(publicId);
  // const imageTag = createImageTag({ publicId, ...colors });
  // const imageObject = JSON.stringify({ imageTag });
  // const imageUrl = imageTag.toString().split("'")[1];

  // const coordsArray = coordinates.split(",");

  // let newCoords = [];
  // coordsArray.map((coord) => newCoords.push(Number(coord)));

  const location = { type: "Point", coordinates: coordinates };

  if (!postImageName && !text) {
    throw new BadRequestError("Add text or pic to your post.");
  }

  try {
    // const result = await cloudinaryUpload(path);
    // const publicId = result.public_id;
    // const imageUrl = result.secure_url;
    const post = await Post.create({
      postImageName,
      text,
      authorId,
      location,
      authorImageName,
      authorName,
      authorDogName,
      imageUrl,
    });
    console.log(post);
    res.status(StatusCodes.CREATED).json({ post });
  } catch (error) {
    console.log(error);
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
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    console.log(error);
  }
};

const editPost = async (req, res) => {
  const { postId, update, currentUserCoords } = req.body;

  try {
    const editedPost = await Post.findByIdAndUpdate(
      { _id: postId },
      { ...update },
      { new: true }
    );
    res.status(StatusCodes.OK).json({ editedPost });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};

export { createPost, getPosts, editPost };
