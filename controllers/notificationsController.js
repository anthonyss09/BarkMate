import { StatusCodes } from "http-status-codes";
import "express-async-errors";
import { BadRequestError, UnauthenticatedError } from "../Errors/index.js";
import Notifications from "../models/notificationModel.js";
import { STATES } from "mongoose";
import { wss } from "../server.js";

const getNotifications = async (req, res) => {
  const { userId } = req.query;
  try {
    const notifications = await Notifications.find({ recipient: userId });
    res.status(StatusCodes.OK).json({ notifications });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};

const createNotification = async (req, res) => {
  const { sender, recipient, type, is_read } = req.body;

  try {
    const newNotification = await Notifications.create({
      sender,
      recipient,
      type,
    });
    console.log(newNotification);
    res.status(StatusCodes.CREATED).json({ newNotification });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};

export { createNotification, getNotifications };
