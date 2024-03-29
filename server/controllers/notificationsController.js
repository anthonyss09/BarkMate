import { StatusCodes } from "http-status-codes";
import "express-async-errors";
import { BadRequestError, UnauthenticatedError } from "../Errors/index.js";
import Notifications from "../models/notificationModel.js";
// import { wss } from "../server.js";

const getNotifications = async (req, res) => {
  const { userId, limit } = req.query;
  try {
    const notifications = await Notifications.find({ recipient: userId })
      .sort({
        createdAt: -1,
      })
      .limit(limit);
    res.status(StatusCodes.OK).json({ notifications });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};

const createNotification = async (req, res) => {
  const notification = req.body;
  try {
    const newNotification = await Notifications.create({
      ...notification,
    });
    console.log(newNotification);
    res.status(StatusCodes.CREATED).json({ newNotification });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};

const markAllNotificationsRead = async (req, res) => {
  try {
    const response = await Notifications.updateMany(
      { is_read: false },
      { $set: { is_read: true } }
    );
    console.log(response);
    res.status(StatusCodes.OK).json({ response });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};

const markNotificationViewed = async (req, res) => {
  const { notificationId } = req.body;

  try {
    const updatedNotification = await Notifications.findOneAndUpdate(
      { _id: notificationId },
      { is_viewed: true },
      { new: true }
    );
    console.log(updatedNotification);
    res.status(StatusCodes.OK).json({ updatedNotification });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};

const editAllNotificationsByUser = async (req, res) => {
  console.log("eidting notifications");
  const { userId, update } = req.body;

  try {
    const updatedNotifications = await Notifications.updateMany(
      { sender: userId },
      { senderProfileImageUrl: update.profileImageUrl }
    );

    res.status(StatusCodes.OK).json({
      content: updatedNotifications,
      message: "Updated all notifications by user.",
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

export {
  createNotification,
  getNotifications,
  markAllNotificationsRead,
  markNotificationViewed,
  editAllNotificationsByUser,
};
