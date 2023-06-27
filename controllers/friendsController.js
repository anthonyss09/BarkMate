import { StatusCodes } from "http-status-codes";
import "express-async-errors";
import { BadRequestError, UnauthenticatedError } from "../Errors/index.js";
import User from "../models/userModel.js";
import Friends from "../models/friendsModel.js";

const requestFriend = async (req, res) => {
  const { requester, recipient } = req.body;

  try {
    const friends = await Friends.create({
      requester,
      recipient,
      requesterStatus: 2,
      recipientStatus: 1,
    });

    const updatedUser = await User.findOneAndUpdate(
      { _id: requester },
      { $push: { friends: friends._id } }
    );

    await User.findOneAndUpdate(
      { _id: recipient },
      { $push: { friends: friends._id } }
    );

    const response = { friends, updatedUser };

    res.status(StatusCodes.CREATED).json(response);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};

const acceptFriend = async (req, res) => {
  const { requestId, recipient, requester } = req.body;

  try {
    const response = await Friends.findOneAndUpdate(
      { _id: requestId },
      { requesterStatus: 3, recipientStatus: 3 }
    );

    res.status(StatusCodes.OK).json({ response });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};

const declineFriend = async (req, res) => {
  const { requestId } = req.body;

  try {
    await Friends.findOneAndRemove({ _id: requestId });
    res.status(StatusCodes.OK).json({ response: "Request denied." });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};

export { requestFriend, acceptFriend, declineFriend };
