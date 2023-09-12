import mongoose from "mongoose";

const participantSchema = new mongoose.Schema({
  participantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  participantProfileName: {
    type: String,
  },
  participantProfileImageName: {
    type: String,
  },
  participantProfileImageUrl: {
    type: String,
  },
});

const FriendsSchema = new mongoose.Schema(
  {
    requester: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    // requesterProfileName: {
    //   type: String,
    // },
    // requesterProfileImageName: {
    //   type: String,
    // },
    recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    // recipientProfileName: {
    //   type: String,
    // },
    // recipientProfileImageName: {
    //   type: String,
    // },
    participants: [participantSchema],
    requesterStatus: {
      type: String,
      enum: ["pending", "requested", "friends"],
      default: "pending",
    },
    recipientStatus: {
      type: String,
      enum: ["pending", "requested", "friends"],
      default: "requested",
    },
  },
  { timeStamps: true }
);

export default mongoose.model("Friends", FriendsSchema);
