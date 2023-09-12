import { StatusCodes } from "http-status-codes";
import "express-async-errors";
import { BadRequestError, UnauthenticatedError } from "../Errors/index.js";
import User from "../models/userModel.js";
import Friends from "../models/friendsModel.js";

const requestFriend = async (req, res) => {
  const request = req.body;
  console.log("friend requesting");

  try {
    // const friendRequestExists = await Friends.find({
    //   $and: [{ requester, recipient }],
    // });
    // if (friendRequestExists) {
    //   console.log("friend requested already");
    //   throw new BadRequestError("friend requested already");
    // }
    const friends = await Friends.create({
      ...request,
    });

    // console.log("new friend", friends);

    const updatedUser = await User.findOneAndUpdate(
      { _id: request.requester },
      { $push: { friends: friends._id } }
    );

    await User.findOneAndUpdate(
      { _id: request.recipient },
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
      { requesterStatus: "friends", recipientStatus: "friends" }
    );
    console.log(response);
    console.log("we are friends");
    res.status(StatusCodes.OK).json({ response });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error });
    console.log(error);
  }
};

const declineFriend = async (req, res) => {
  const { requestId } = req.body;
  console.log("declinging");

  try {
    await Friends.findOneAndRemove({ _id: requestId });
    res.status(StatusCodes.OK).json({ response: "Request denied." });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};

const getFriends = async (req, res) => {
  // const { friendIds } = req.query;
  // const parsedIds = JSON.parse(friendIds);
  const { userId } = req.query;

  try {
    // const friends = await Friends.find({ _id: { $in: parsedIds } });
    // res.status(StatusCodes.OK).json({ friends });
    const friends = await Friends.find({
      $or: [{ requester: userId }, { recipient: userId }],
    });
    console.log("first friends", friends);
    res.status(StatusCodes.OK).json({ friends });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};

export { requestFriend, acceptFriend, declineFriend, getFriends };
