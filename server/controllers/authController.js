import { BAD_REQUEST, StatusCodes } from "http-status-codes";
import "express-async-errors";
import { BadRequestError, UnauthenticatedError } from "../Errors/index.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password, location } = req.body;

  // const coordinates = location.split(",");
  // const newCoords = [Number(coordinates[0]), Number(coordinates[1])];

  const newUser = { ...req.body };
  newUser.location = { type: "Point", coordinates: location };

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

  let passwordIsValid;

  if (!email || !password) {
    res.status(BAD_REQUEST).json({ message: "Please provide all values." });
    throw new BadRequestError({ message: "Please provide all values." });
  }
  try {
    const user = await User.findOne({ email }).select("+password");
    if (user) {
      passwordIsValid = await user.comparePassword(password);
      console.log("validity", passwordIsValid);
    }

    if (!user || !passwordIsValid) {
      res.status(StatusCodes.UNAUTHORIZED).json({
        message: "We can't find that combination of email and password.",
      });
      // throw new UnauthenticatedError("Invalid credentials.");
    }
    user.password = undefined;
    const token = user.createJWT();
    // console.log({ user, token });
    res.status(StatusCodes.OK).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  const {
    userId,
    profileImageUrl,
    address,
    location,
    aboutUs,
    timeNeeded,
    timeAvailable,
  } = req.body;

  // console.log("authis ", req.headers.authorization);

  console.log(location);

  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      {
        $set: {
          profileImageUrl,
          address,
          location,
          aboutUs,
          timeNeeded,
          timeAvailable,
        },
      },
      { returnOriginal: false }
    );
    // console.log("updated user is", updatedUser);
    res.status(StatusCodes.OK).json({ updatedUser });
  } catch (error) {
    console.log(error);
  }
};

const getAuthorization = async (req, res) => {
  const { token } = req.body;

  let authorization;

  try {
    jwt.verify(token, process.env.JWT_SECRET, (err, pay) => {
      if (err) {
        authorization = false;
      } else {
        authorization = true;
      }
    });
    console.log("authy", authorization);
    res.status(StatusCodes.OK).json({ authorization });
  } catch (error) {}
};

export { registerUser, loginUser, updateUser, getAuthorization };
