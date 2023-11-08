import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  authorName: { type: String },
  authorImageUrl: { type: String },
  text: { type: String },
});

export default mongoose.model("Comment", commentSchema);
