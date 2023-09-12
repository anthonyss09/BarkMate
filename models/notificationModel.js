import mongoose from "mongoose";

const NotificationsSchema = new mongoose.Schema(
  {
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    chatId: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
    friendId: { type: mongoose.Schema.Types.ObjectId, ref: "Friends" },
    notificationPath: {
      type: String,
      enum: ["chats", "posts", "friendRequests"],
    },
    notificationType: {
      type: String,
      enum: ["comment", "friendRequest", "like", "message"],
    },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    senderProfileImageName: {
      type: String,
    },
    senderProfileImageUrl: { type: String },
    senderProfileName: {
      type: String,
    },
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

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
