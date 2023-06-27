import express from "express";
const router = express.Router();
import { createPost, getPosts } from "../controllers/postsController.js";

router.route("/create-post").post(createPost);
router.route("/get-posts").get(getPosts);

export default router;
