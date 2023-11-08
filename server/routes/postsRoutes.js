import express from "express";
const router = express.Router();
import {
  createPost,
  getPosts,
  editPost,
  getUserPosts,
  editAllPostsByUser,
  createComment,
  getComments,
} from "../controllers/postsController.js";

router.route("/create-post").post(createPost);
router.route("/get-posts").get(getPosts);
router.route("/edit-post").post(editPost);
router.route("/get-user-posts").get(getUserPosts);
router.route("/edit-all-posts-by-user").post(editAllPostsByUser);
router.route("/create-comment").post(createComment);
router.route("/get-comments").get(getComments);

export default router;
