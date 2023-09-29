import "express-async-errors";
import { BadRequestError, UnauthenticatedError } from "../Errors/index.js";
import { StatusCodes } from "http-status-codes";
import Event from "../models/eventModel.js";
import jwt from "jsonwebtoken";

const getEvents = async (req, res) => {
  const { userId } = req.query;

  console.log(req.query);

  try {
    const events = await Event.find({ userId });

    res.status(StatusCodes.OK).json({ events });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

const createEvent = async (req, res) => {
  const authorization = req.headers.authorization;
  const token = authorization.split(" ")[1];

  const { userId, eventDate, eventTime, eventOccurrence, eventNote } = req.body;
  const { dayOfWeek, dateString } = eventDate;

  try {
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) {
        console.log(err);
        res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "Invalid credentials." });
        throw new BadRequestError({ message: "Invalid credentials." });
      }
    });
    const newEvent = await Event.create({
      dayOfWeek,
      dateString,
      eventTime,
      userId,
      eventOccurrence,
      eventNote,
    });
    console.log("new event is ", newEvent);
    res
      .status(StatusCodes.CREATED)
      .json({ message: "Event successfully added!" });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

const updateEvents = async (req, res) => {
  const { eventsCopy } = req.body;

  eventsCopy.map(async (event, index) => {
    if (event.isMutated) {
      try {
        if (event.deletEvent) {
          const response = await Event.findOneAndDelete({
            _id: event._id,
          });
          console.log("deleted", response);
        } else {
          const response = await Event.findOneAndReplace(
            { _id: event._id },
            { ...event }
          );
          console.log("replaced", response);
        }
      } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
      }
    }
  });

  res.status(StatusCodes.OK).json({ message: "Events have been updated." });
};

export { getEvents, createEvent, updateEvents };
