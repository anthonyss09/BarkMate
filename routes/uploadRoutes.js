import express from "express";
const router = express.Router();

import { uploadPic } from "../controllers/uploadsController.js";

router.route("/upload-pic").post(uploadPic);

export default router;
