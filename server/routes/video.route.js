const express = require("express");
const VideoRouter = express.Router();
const {
  addVideo,
  getSingleVideo,
  updateVideo,
  deleteVideo,
  addView,
} = require("../controllers/video.controller");

const { isAuthenticatedUser } = require("../middleware/auth");

// add a new video

VideoRouter.route("/video/new").post(isAuthenticatedUser, addVideo);
VideoRouter.route("/video/:id")
  .get(getSingleVideo)
  .put(isAuthenticatedUser, updateVideo)
  .delete(isAuthenticatedUser, deleteVideo);

VideoRouter.route("/video/view/:id").put(addView);

module.exports = VideoRouter;
