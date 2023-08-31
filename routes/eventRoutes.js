import express from "express";
const router = express.Router();
import { getEvents, createEvent } from "../controllers/eventController.js";

router.route("/get-events").get(getEvents);
router.route("/create-event").post(createEvent);
router.route("/delete-event").post();

export default router;
