const express = require("express");

const UserActionRouter = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");
const {
  likeVideo,
  dislikeVideo,
} = require("../controllers/userAction.controller");

// like and dislike a video
UserActionRouter.route("/like/:id")
  .put(isAuthenticatedUser, likeVideo)
  .put(isAuthenticatedUser, dislikeVideo);

//comment on a video
UserActionRouter.route("/comment/:id").put(isAuthenticatedUser, commentVideo);

//reply to a comment
UserActionRouter.route("/reply/:id").put(isAuthenticatedUser, replyComment);

module.exports = UserActionRouter;
