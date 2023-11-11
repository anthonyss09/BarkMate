import express from "express";
const router = express.Router();
import { forwardEmail } from "../controllers/transportsController.js";

router.route("/forward-email").post(forwardEmail);

export default router;
