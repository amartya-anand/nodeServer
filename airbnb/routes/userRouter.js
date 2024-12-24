//Core module
const path = require("path");

//External module
const express = require("express");
const userRouter = express.Router();

//Local module
const rootDir = require("../utils/pathUtils");

userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = userRouter;
