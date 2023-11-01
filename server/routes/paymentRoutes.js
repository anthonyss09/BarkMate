import express from "express";
const router = express.Router();
import { checkout } from "../controllers/paymentController.js";

router.route("/checkout").post(checkout);

export default router;
