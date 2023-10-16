import express from "express";
const router = express.Router();
import {
  createPost,
  getPosts,
  editPost,
  getUserPosts,
} from "../controllers/postsController.js";

router.route("/create-post").post(createPost);
router.route("/get-posts").get(getPosts);
router.route("/edit-post").post(editPost);
router.route("/get-user-posts").get(getUserPosts);

export default router;
