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
    userProfileImageUrl: { type: String },
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
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    authorName: {
      type: String,
    },
    authorDogName: {
      type: String,
    },
    authorImageName: {
      type: String,
    },
    authorImageUrl: {
      type: String,
    },
    authorProfileName: { type: String },
    text: {
      type: String,
    },
    postImageName: {
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
    postImageUrl: { type: String },
    imageObject: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostsSchema);
