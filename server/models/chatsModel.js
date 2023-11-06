import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      required: [true, "Enter your message."],
    },
  },
  { timestamps: true }
);

export const ParticipantSchema = new mongoose.Schema({
  participantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  participantProfileName: {
    type: String,
  },
  participantProfileImageUrl: {
    type: String,
  },
});

const ChatSchema = new mongoose.Schema(
  {
    participants: [ParticipantSchema],
    messages: [MessageSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Chat", ChatSchema);
