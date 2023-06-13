import express from "express";
const router = express.Router();
import { getProfiles } from "../controllers/usersController.js";

router.route("/profiles").get(getProfiles);

export default router;
