const catchAsyncErrors = require("../middleware/catchAsyncError");

exports.likeVideo = catchAsyncErrors(async (req, res, next) => {});
exports.dislikeVideo = catchAsyncErrors(async (req, res, next) => {});
