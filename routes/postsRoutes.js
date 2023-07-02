import express from "express";
const router = express.Router();
import {
  createPost,
  getPosts,
  editPost,
} from "../controllers/postsController.js";

router.route("/create-post").post(createPost);
router.route("/get-posts").get(getPosts);
router.route("/edit-post").post(editPost);

export default router;
