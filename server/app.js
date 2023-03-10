const express = require("express");
const app = express();
const UserRouter = require("./routes/user.route");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", UserRouter);

module.exports = app;
