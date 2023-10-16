import express from "express";
const router = express.Router();
import {
  requestFriend,
  acceptFriend,
  declineFriend,
  getFriends,
} from "../controllers/friendsController.js";

router.route("/request").post(requestFriend);
router.route("/accept").post(acceptFriend);
router.route("/decline").post(declineFriend);
router.route("/get-friends").get(getFriends);

export default router;
