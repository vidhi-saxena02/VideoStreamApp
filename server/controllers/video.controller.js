const catchAsyncErrors = require("../middleware/catchAsyncError");
const VideoDatabase = require("../model/video.schema");
const ErrorHandler = require("../utils/errorHandler");

exports.addVideo = catchAsyncErrors(async (req, res, next) => {
  console.log(req.body);
  req.body.user = req.user.id;
  const newVideo = await VideoDatabase.create(req.body);
  res.status(201).json({
    success: true,
    newVideo,
  });
});

exports.getSingleVideo = catchAsyncErrors(async (req, res, next) => {
  const video = await VideoDatabase.findById(req.params.id);
  if (!video) {
    return next(new ErrorHandler("Video not found", 404));
  }
  res.status(200).json({
    success: true,
    video,
  });
});

exports.deleteVideo = catchAsyncErrors(async (req, res, next) => {
  const video = await VideoDatabase.findById(req.params.id);
  if (!video) {
    return next(new ErrorHandler("Video not found", 404));
  }
  if (video.user.toString() !== req.user._id.toString()) {
    return next(
      new ErrorHandler("You are not allowed to delete this video", 403)
    );
  }
  await VideoDatabase.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    message: "Video deleted successfully",
  });
});

exports.updateVideo = catchAsyncErrors(async (req, res, next) => {
  const video = await VideoDatabase.findById(req.params.id);
  if (!video) {
    return next(new ErrorHandler("Video not found", 404));
  }
  if (video.user.toString() !== req.user._id.toString()) {
    return next(
      new ErrorHandler("You are not allowed to update this video", 403)
    );
  }

  const updatedVideo = await VideoDatabase.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );
  res.status(200).json({
    success: true,
    updatedVideo,
  });
});

exports.addView = catchAsyncErrors(async (req, res, next) => {
  const video = await VideoDatabase.findById(req.params.id);
  if (!video) {
    return next(new ErrorHandler("Video not found", 404));
  }
  video.views += 1;
  await video.save();
  res.status(200).json({
    success: true,
    video,
  });
});

exports.likeVideo = catchAsyncErrors(async (req, res, next) => {
  const video = await VideoDatabase.findById(req.params.id);
  if (!video) {
    return next(new ErrorHandler("Video not found", 404));
  }

  // console.log(req.user._id);

  const likeVideo = await VideoDatabase.findByIdAndUpdate(
    req.params.id,
    {
      $addToSet: { likes: req.user._id },
      $pull: { dislikes: req.user._id },
    },
    {
      returnDocument: "after",
    }
  );

  // console.log(likeVideo);
  likeVideo.likeCount += 1;
  if (likeVideo.dislikeCount > 0) {
    likeVideo.dislikeCount -= 1;
  }
  res.status(200).json({
    success: true,
    likeVideo,
    message: "Video liked successfully",
  });
});
exports.dislikeVideo = catchAsyncErrors(async (req, res, next) => {
  // console.log(typeof req.user._id);
  const video = await VideoDatabase.findById(req.params.id);
  if (!video) {
    return next(new ErrorHandler("Video not found", 404));
  }

  const dislikeVideo = await VideoDatabase.findByIdAndUpdate(
    req.params.id,
    {
      $addToSet: { dislikes: req.user._id },
      $pull: { likes: req.user._id },
    },
    {
      returnDocument: "after",
    }
  );
  // console.log(dislikeVideo);
  dislikeVideo.dislikeCount += 1;
  if (dislikeVideo.likeCount > 0) {
    dislikeVideo.likeCount -= 1;
  }
  res.status(200).json({
    success: true,
    dislikeVideo,
    message: "Video disliked successfully",
  });
});

exports.getVideos = catchAsyncErrors(async (req, res, next) => {
  const videos = await VideoDatabase.find();
  res.status(200).json({
    success: true,
    videos,
  });
});
