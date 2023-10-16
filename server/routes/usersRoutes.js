import express from "express";
const router = express.Router();
import { getProfiles, getProfileById } from "../controllers/usersController.js";

router.route("/profiles").get(getProfiles);
router.route("/single-profile").get(getProfileById);

export default router;
