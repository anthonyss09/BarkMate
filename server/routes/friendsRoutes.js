import express from "express";
const router = express.Router();
import {
  requestFriend,
  acceptFriend,
  declineFriend,
  getFriends,
  editAllFriendsByUser,
} from "../controllers/friendsController.js";

router.route("/request").post(requestFriend);
router.route("/accept").post(acceptFriend);
router.route("/decline").post(declineFriend);
router.route("/get-friends").get(getFriends);
router.route("/edit-all-friends-by-user").post(editAllFriendsByUser);

export default router;
