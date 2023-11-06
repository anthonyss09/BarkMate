import express from "express";
const router = express.Router();
import {
  createChat,
  getChats,
  editAllChatsByUser,
} from "../controllers/chatsController.js";

router.route("/create-chat").post(createChat);
router.route("/get-chats").get(getChats);
router.route("/edit-all-chats-by-user").post(editAllChatsByUser);

export default router;
