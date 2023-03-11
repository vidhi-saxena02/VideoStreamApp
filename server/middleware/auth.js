const catchAsyncErrors = require("./catchAsyncError");
const Errorhandler = require("../utils/errorhandler");
const jwt = require("jsonwebtoken");
const UserDatabase = require("../model/user.schema");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  // This is a middleware function that checks if the user is logged in or not and then passes the request to the next function in the route
  const { token } = req.cookies;

  if (!token) {
    // If the user is not logged in, then the token will not be present in the cookies and hence the user will not be able to access the protected routes
    return next(new Errorhandler("Login first to access this resource", 401));
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await UserDatabase.findById(decodedData.id);

  next();
});
