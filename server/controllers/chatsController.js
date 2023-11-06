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

const editAllChatsByUser = async (req, res) => {
  console.log("edidting all chats");

  const { userId, update } = req.body;
  const { profileImageUrl } = update;

  try {
    const updatedChats = await Chat.find({
      participants: { $elemMatch: { participantId: userId } },
    });

    updatedChats.map(async (chat, index) => {
      const participantsCopy = chat.participants.slice();
      const targetIndex = participantsCopy.findIndex(
        (part) => part.participantId == userId
      );
      const targetParticipant = participantsCopy[targetIndex];
      targetParticipant.participantProfileImageUrl = profileImageUrl;
      participantsCopy.splice(targetIndex, 1, targetParticipant);

      await Chat.findOneAndUpdate(
        { _id: chat._id },
        { participants: participantsCopy }
      );
    });

    console.log("chats updated");
    res.status(StatusCodes.OK).json({
      message: "Chat images updated succesfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

export { createChat, getChats, editAllChatsByUser };
