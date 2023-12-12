import express from "express";
const router = express.Router();
import {
  forwardEmail,
  addRecipient,
  removeRecipient,
} from "../controllers/transportsController.js";

router.route("/forward-email").post(forwardEmail);
router.route("/add-recipient").post(addRecipient);
router.route("/remove-recipient").post(removeRecipient);

export default router;
