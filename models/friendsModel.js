import mongoose from "mongoose";

const FriendsSchema = new mongoose.Schema(
  {
    requester: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    requesterStatus: {
      type: Number,
      enum: [1, 2, 3],
    },
    recipientStatus: {
      type: Number,
      enum: [1, 2, 3],
    },
  },
  { timeStamps: true }
);

export default mongoose.model("Friends", FriendsSchema);
