import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";

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

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please provide first name."],
  },
  lastName: {
    type: String,
    required: [true, "Please provide last name."],
  },
  address: {
    type: String,
    required: [true, "Please provide adress."],
  },
  city: { type: String },
  location: {
    type: PointSchema,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email."],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
      unique: true,
    },
  },
  password: {
    type: String,
    required: [true, "Please provide password."],
    select: false,
  },
  dogName: {
    type: String,
    required: [true, "Please provide pup's name."],
  },
  breed: {
    type: String,
    required: [true, "Please provide pup's breed."],
  },
  weight: {
    type: String,
    required: [true, "Please provide pup's weight."],
  },
  energyLevel: {
    type: String,
    required: [true, "Please provide pup's energy level."],
  },
  aboutUs: {
    type: String,
    required: [true, "Please tell us about you and pup."],
  },
  timeAvailable: {
    type: [{ type: String }],
    required: [true, "Please provide your availability."],
  },
  timeNeeded: {
    type: [{ type: String }],
    required: [true, "Please provide your availability."],
  },
  profileImageUrl: { type: String },
  profileImageName: {
    type: String,
  },
  profileName: { type: String },
  friends: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Friends" }],
  },
  friendIds: {
    typ: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  sample: {
    type: Boolean,
    default: false,
  },
});

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

export default mongoose.model("User", UserSchema);
