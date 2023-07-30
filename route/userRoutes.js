const express = require("express");
const userRoute = express.Router();
const signUpUser = require("../controller/userController");

userRoute.post("/signup", signUpUser);

module.exports = userRoute;
