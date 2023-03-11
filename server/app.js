const express = require("express");
const app = express();
const UserRouter = require("./routes/user.route");
const UserActionRouter = require("./routes/userAction.route");
const bodyParser = require("body-parser");
const ErrorMiddleware = require("./middleware/error");
const VideoRouter = require("./routes/video.route");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", UserRouter);
app.use("/api/v1", UserActionRouter);
app.use("/api/v1", VideoRouter);
app.use(ErrorMiddleware);

module.exports = app;
