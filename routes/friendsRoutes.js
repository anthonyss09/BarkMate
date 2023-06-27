import express from "express";
const router = express.Router();
import {
  requestFriend,
  acceptFriend,
  declineFriend,
} from "../controllers/friendsController.js";

router.route("/request").post(requestFriend);
router.route("/accept").put(acceptFriend);
router.route("/decline").delete(declineFriend);

export default router;
