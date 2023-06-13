import { StatusCodes } from "http-status-codes";
import "express-async-errors";
import { BadRequestError, UnauthenticatedError } from "../Errors/index.js";
import User from "../models/userModel.js";

const getProfiles = async (req, res) => {
  const { distance, coordinates } = req.query;
  const coordinatesArray = coordinates.split(",");
  const newCoords = [];
  coordinatesArray.map((coord) => newCoords.push(Number(coord)));
  try {
    const matches = await User.find({
      location: {
        $near: {
          $geometry: { type: "Point", coordinates: newCoords },
          $maxDistance: distance,
        },
      },
    });
    res.status(StatusCodes.OK).json({ matches });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    console.log(error);
  }
};

export { getProfiles };
