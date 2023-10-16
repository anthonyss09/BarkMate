import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    dateString: {
      type: String,
    },
    eventTime: {
      type: String,
    },
    eventNote: {
      type: String,
    },
    eventOccurrence: {
      type: String,
    },
    dayOfWeek: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("event", EventSchema);
