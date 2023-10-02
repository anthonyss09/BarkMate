import { StatusCodes } from "http-status-codes";
import "express-async-errors";
import { BadRequestError, UnauthenticatedError } from "../Errors/index.js";
import Post from "../models/postsModel.js";
import {
  cloudinaryUpload,
  getAssetInfo,
  createImageTag,
} from "../utils/cloudinary_upload.js";

const uploadPic = async (req, res) => {
  //   console.log(req.file);
  console.log("uploading pic controller");

  try {
    const result = await cloudinaryUpload(imagePath);
    // const publicId = result.public_id;
    // const imageUrl = result.secure_url;

    res.status(StatusCodes.CREATED).json({ result });
  } catch (error) {
    console.log(error);
  }
};

export { uploadPic };
