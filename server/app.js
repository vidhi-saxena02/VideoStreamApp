const express = require("express");
const app = express();
const UserRouter = require("./routes/user.route");
const bodyParser = require("body-parser");
const ErrorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", UserRouter);
app.use(ErrorMiddleware);

module.exports = app;
