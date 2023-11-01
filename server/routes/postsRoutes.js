import express from "express";
const router = express.Router();
import {
  createPost,
  getPosts,
  editPost,
  getUserPosts,
  editAllPostsByUser,
} from "../controllers/postsController.js";

router.route("/create-post").post(createPost);
router.route("/get-posts").get(getPosts);
router.route("/edit-post").post(editPost);
router.route("/get-user-posts").get(getUserPosts);
router.route("/edit-all-posts-by-user").post(editAllPostsByUser);

export default router;
