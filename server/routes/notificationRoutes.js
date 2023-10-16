import express from "express";
const router = express.Router();
import {
  createNotification,
  getNotifications,
  markAllNotificationsRead,
  markNotificationViewed,
} from "../controllers/notificationsController.js";

router.route("/get-notifications").get(getNotifications);
router.route("/create-notification").post(createNotification);
router.route("/mark-notifications-read").post(markAllNotificationsRead);
router.route("/mark-notification-viewed").post(markNotificationViewed);

export default router;
