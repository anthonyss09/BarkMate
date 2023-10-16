import { v2 as cloudinary } from "cloudinary";
import * as dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const cloudinaryUpload = async (imagePath) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
    eager: { effect: "upscale" },
    dpr: "auto",
    transformation: [{ dpr: "auto", q: 80 }],
  };

  try {
    const result = await cloudinary.uploader.upload(imagePath, options);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getAssetInfo = async (publicId) => {
  const options = {
    colors: true,
  };

  try {
    const result = await cloudinary.api.resource(publicId, options);
    console.log("asset info is", result);
    return result.colors;
  } catch (error) {
    console.log("asset error", error);
  }
};

const createImageTag = (publicId, ...colors) => {
  const [effectColor, backgroundColor] = colors;

  let imageTag = cloudinary.image(publicId, {
    transformation: [
      { width: 150, height: 150, gravity: "faces", crop: "thumb" },
      { radius: "max" },
      { effect: "outline:10", color: effectColor },
      { background: backgroundColor },
    ],
  });
  return imageTag;
};

export { cloudinaryUpload, getAssetInfo, createImageTag };
