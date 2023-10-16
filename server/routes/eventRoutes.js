import express from "express";
const router = express.Router();
import {
  getEvents,
  createEvent,
  updateEvents,
} from "../controllers/eventController.js";

router.route("/get-events").get(getEvents);
router.route("/create-event").post(createEvent);
router.route("/update-events").post(updateEvents);

export default router;
