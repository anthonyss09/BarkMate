import { StatusCodes } from "http-status-codes";
import "express-async-errors";
import { BadRequestError, UnauthenticatedError } from "../Errors/index.js";
import User from "../models/userModel.js";

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password, location } = req.body;

  const coordinates = location.split(",");
  const newCoords = [Number(coordinates[0]), Number(coordinates[1])];

  const newUser = { ...req.body };
  newUser.location = { type: "Point", coordinates: newCoords };

  try {
    const emailInUse = await User.findOne({ email });
    if (emailInUse) {
      throw new BadRequestError("Email already in use.");
    }
    if (!firstName || !lastName || !password || !email) {
      throw new BadRequestError("Please provide all values.");
    }
    const user = await User.create(newUser);
    user.password = undefined;
    const token = user.createJWT();
    console.log("registered user", { user, token });
    res.status(StatusCodes.OK).json({ user, token });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide all values.");
  }
  try {
    const user = await User.findOne({ email }).select("+password");
    const passwordIsValid = user.comparePassword(password);
    if (!passwordIsValid) {
      throw new UnauthenticatedError("Invalid credentials.");
    }
    user.password = undefined;
    const token = user.createJWT();
    console.log({ user, token });
    res.status(StatusCodes.OK).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
};

export { registerUser, loginUser };
