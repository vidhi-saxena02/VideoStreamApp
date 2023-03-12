const catchAsyncErrors = require("../middleware/catchAsyncError");
const VideoDatabase = require("../model/video.schema");
const ErrorHandler = require("../utils/errorHandler");
const commentDatabase = require("../model/comments.schema");

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

exports.replyComment = catchAsyncErrors(async (req, res, next) => {
  const comment = await commentDatabase.findById(req.params.id);
  if (!comment) {
    return next(new ErrorHandler("Comment not found", 404));
  }
  const reply = {
    user: req.user.id,
    reply: req.body.reply,
  };

  comment.replies.push(reply);
  comment.replyCount = comment.replies.length;
  await comment.save({ validateBeforeSave: false });
  res.status(201).json({
    success: true,
    message: "Reply added successfully",
    comment,
  });
});

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
