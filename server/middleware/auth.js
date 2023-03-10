const catchAsyncErrors = require("./catchAsyncError");
const UserDatabase = require("../model/user.schema");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");

// Check if user is authenticated or not
exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Login first to access this resource", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await UserDatabase.findById(decoded.id);

  next();
});
