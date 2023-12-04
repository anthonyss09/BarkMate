import { StatusCodes } from "http-status-codes";
import "express-async-errors";
import { BadRequestError, UnauthenticatedError } from "../Errors/index.js";
import User from "../models/userModel.js";

const getProfiles = async (req, res) => {
  const { distance, coordinates, currentUserName } = req.query;
  console.log(currentUserName);
  const distanceInMeters = distance * 1609.34;
  const coordinatesArray = coordinates.split(",");
  const newCoords = [];
  coordinatesArray.map((coord) => newCoords.push(Number(coord)));
  try {
    const matches = await User.find({
      location: {
        $near: {
          $geometry: { type: "Point", coordinates: newCoords },
          $maxDistance: distanceInMeters,
        },
      },
    });
    const samples = await User.find({ sample: true });
    matches.concat(samples);
    const filteredMatches = matches.filter(
      (match) => match.firstName !== currentUserName
    );

    res.status(StatusCodes.OK).json({ filteredMatches });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    console.log(error);
  }
};

const getProfileById = async (req, res) => {
  const { userId } = req.query;
  try {
    const user = await User.findOne({ _id: userId });
    res.status(StatusCodes.OK).json({ user });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};

export { getProfiles, getProfileById };
