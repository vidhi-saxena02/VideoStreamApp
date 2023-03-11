const express = require("express");

const UserActionRouter = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");
const {
  likeComment,
  dislikeComment,
  commentVideo,
  replyComment,
  getAllComments,
} = require("../controllers/userAction.controller");

// like and dislike a video
UserActionRouter.route("/comment/:id")
  .put(isAuthenticatedUser, likeComment)
  .put(isAuthenticatedUser, dislikeComment);

//comment on a video
UserActionRouter.route("/video/comment/:id")
  .post(isAuthenticatedUser, commentVideo)
  .get(getAllComments);

// //reply to a comment
UserActionRouter.route("/video/comment/reply/:id").post(
  isAuthenticatedUser,
  replyComment
);

module.exports = UserActionRouter;
