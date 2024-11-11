const { Router } = require("express");
const express = require("express");
const newRouter = Router();
const { messages } = require("./index.routers");

newRouter.get("/", (req, res) => {
  res.render("new");
});
newRouter.post("/", (req, res) => {
  const { authorName, message } = req.body;
  messages.push({ text: message, user: authorName, added: new Date() });
  res.redirect("/");
});
module.exports = newRouter;
