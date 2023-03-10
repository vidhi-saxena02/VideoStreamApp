const express = require("express");
const UserRouter = express.Router();
const {
  registerUser,
  LoginUser,
  Logout,
} = require("../controllers/user.controller");

UserRouter.route("/register").post(registerUser);
UserRouter.route("/login").post(LoginUser);
UserRouter.route("/logout").get(Logout);

module.exports = UserRouter;
