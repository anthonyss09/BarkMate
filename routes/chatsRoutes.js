import express from "express";
const router = express.Router();
import { createChat, getChats } from "../controllers/chatsController.js";

router.route("/create-chat").post(createChat);
router.route("/get-chats").get(getChats);

export default router;
