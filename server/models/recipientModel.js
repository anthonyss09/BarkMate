import mongoose, { Schema } from "mongoose";
import validator from "validator";

const recipientSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    emailAddress: {
      type: String,
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email",
        unique: true,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Recipient", recipientSchema);
