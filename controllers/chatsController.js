import "express-async-errors";
import { BadRequestError, UnauthenticatedError } from "../Errors/index.js";
import Chat from "../models/chatsModel.js";
import { StatusCodes } from "http-status-codes";

const createChat = async (req, res) => {
  const { participants, message } = req.body;
  // console.log(participants, message);
  const participantIds = participants.map(
    (participant) => participant.participantId
  );

  try {
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
      // console.log(updatedChat);
      res.status(StatusCodes.OK).json({ updatedChat });
      return;
    }
    const newChat = await Chat.create({
      participants,
      messages: [message],
    });
    console.log(newChat);
    res.status(StatusCodes.CREATED).json({ newChat });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};

const getChats = async (req, res) => {
  const { userId } = req.query;
  // console.log(userId);

  try {
    const chats = await Chat.find({ "participants.participantId": userId });
    // console.log("chats are", chats);
    res.status(StatusCodes.OK).json({ chats });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};
export { createChat, getChats };
