import mongoose from "mongoose";

const NotificationsSchema = new mongoose.Schema(
  {
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    chatId: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
    friendId: { type: mongoose.Schema.Types.ObjectId, ref: "Friends" },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    senderProfileImageName: {
      type: String,
    },
    senderProfileName: {
      type: String,
    },
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    type: {
      type: String,
    },
    is_read: {
      type: Boolean,
      default: false,
    },
    is_viewed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Notifications", NotificationsSchema);
