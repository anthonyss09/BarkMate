import express from "express";
const router = express.Router();
import {
  createNotification,
  getNotifications,
} from "../controllers/notificationsController.js";

router.route("/get-notifications").get(getNotifications);
router.route("/create-notification").post(createNotification);

export default router;
