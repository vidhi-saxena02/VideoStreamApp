const express = require("express");

const UserActionRouter = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");
const {
  commentVideo,
  replyComment,
  getAllComments,
} = require("../controllers/userAction.controller");

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
