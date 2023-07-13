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

const ParticipantSchema = new mongoose.Schema({
  participantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  participantProfileName: {
    type: String,
  },
  participantImageName: {
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

export default mongoose.model("chat", ChatSchema);
