const express = require("express");
const UserRouter = express.Router();
const { registerUser } = require("../controllers/user.controller");

UserRouter.route("/register").post(registerUser);

module.exports = UserRouter;
