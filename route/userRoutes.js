const express = require("express");
const userRoute = express.Router();
const { signUpUser, signInUser } = require("../controller/userController");

userRoute.post("/signup", signUpUser);
userRoute.post("/signin", signInUser);

module.exports = userRoute;
