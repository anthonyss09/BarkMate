import "express-async-errors";
import { BadRequestError, UnauthenticatedError } from "../Errors/index.js";
import { StatusCodes } from "http-status-codes";
import Event from "../models/eventModel.js";

const getEvents = async (req, res) => {
  const { userId } = req.query;

  console.log(req.query);

  try {
    const events = await Event.find({ userId });

    res.status(StatusCodes.OK).json({ events });
  } catch (error) {
    console.log(error);
  }
};

const createEvent = async (req, res) => {
  const { userId, eventDate, eventTime, eventOccurrence, eventNote } = req.body;
  const { dayOfWeek, dateString } = eventDate;

  try {
    const newEvent = await Event.create({
      dayOfWeek,
      dateString,
      eventTime,
      userId,
      eventOccurrence,
      eventNote,
    });
    console.log("new event is ", newEvent);
    res.status(StatusCodes.CREATED).json({ newEvent });
  } catch (error) {
    console.log(error);
  }
};

export { getEvents, createEvent };
