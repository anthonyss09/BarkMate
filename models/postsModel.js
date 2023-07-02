import mongoose, { Schema } from "mongoose";

const LikesSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timeStamps: true }
);
const CommentsSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    firstName: {
      type: String,
    },
    dogName: {
      type: String,
    },
    userImageName: { type: String },
    text: {
      type: String,
    },
  },
  { timeStamps: true }
);

const PointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

const PostsSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    userName: {
      type: String,
    },
    userDogName: {
      type: String,
    },
    userImageName: {
      type: String,
    },
    text: {
      type: String,
    },
    imageName: {
      type: String,
    },
    likes: {
      type: [LikesSchema],
    },
    comments: {
      type: [CommentsSchema],
    },
    location: {
      type: PointSchema,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostsSchema);
