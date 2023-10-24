import "express-async-errors";
import { BadRequestError, UnauthenticatedError } from "../Errors/index.js";
import Chat from "../models/chatsModel.js";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

const createChat = async (req, res) => {
  const authorization = req.headers.authorization;
  const token = authorization.split(" ")[1];

  const { participants, message } = req.body;
  const participantIds = participants.map(
    (participant) => participant.participantId
  );

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

    const existingChat = await Chat.findOne({
      "participants.participantId": { $all: participantIds },
    });
    if (existingChat) {
      const updatedChat = await Chat.findByIdAndUpdate(
        { _id: existingChat._id },
        {
          messages: [...existingChat.messages, message],
        },
        { new: true }
      );
      res
        .status(StatusCodes.OK)
        .json({ message: "Message sent successfully!" });
      return;
    }
    const newChat = await Chat.create({
      participants,
      messages: [message],
    });
    console.log(newChat);
    res
      .status(StatusCodes.CREATED)
      .json({ message: "Message sent successfully!" });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

const getChats = async (req, res) => {
  const { userId } = req.query;

  try {
    const chats = await Chat.find({
      "participants.participantId": userId,
    });
    res.status(StatusCodes.OK).json({ chats });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};
export { createChat, getChats };
