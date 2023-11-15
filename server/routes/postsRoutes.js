import express from "express";
const router = express.Router();
import {
  createPost,
  getPosts,
  getPost,
  editPost,
  getUserPosts,
  editAllPostsByUser,
  createComment,
  getComments,
  editAllCommentsByUser,
} from "../controllers/postsController.js";

router.route("/create-post").post(createPost);
router.route("/get-posts").get(getPosts);
router.route("/edit-post").post(editPost);
router.route("/get-user-posts").get(getUserPosts);
router.route("/edit-all-posts-by-user").post(editAllPostsByUser);
router.route("/create-comment").post(createComment);
router.route("/get-comments").get(getComments);
router.route("/edit-all-comments-by-user").post(editAllCommentsByUser);
router.route("/get-post").get(getPost);

export default router;
