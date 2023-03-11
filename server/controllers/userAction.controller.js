const catchAsyncErrors = require("../middleware/catchAsyncError");
const VideoDatabase = require("../model/video.schema");
const ErrorHandler = require("../utils/errorHandler");
const commentDatabase = require("../model/comments.schema");

exports.likeComment = catchAsyncErrors(async (req, res, next) => {});
exports.dislikeComment = catchAsyncErrors(async (req, res, next) => {});

exports.commentVideo = catchAsyncErrors(async (req, res, next) => {
  const video = await VideoDatabase.findById(req.params.id);
  if (!video) {
    return next(new ErrorHandler("Video not found", 404));
  }

  const newComment = new commentDatabase({
    user: req.user._id,
    video: req.params.id,
    comment: req.body.comment,
  });
  const savedComment = await newComment.save();
  res.status(201).json({
    success: true,
    message: "Comment added successfully",
    savedComment,
  });
});

exports.replyComment = catchAsyncErrors(async (req, res, next) => {});

exports.getAllComments = catchAsyncErrors(async (req, res, next) => {
  const video = await VideoDatabase.findById(req.params.id);

  if (!video) {
    return next(new ErrorHandler("Video not found", 404));
  }

  const comments = await commentDatabase.find({ video: req.params.id });

  res.status(200).json({
    success: true,
    comments,
  });
});
