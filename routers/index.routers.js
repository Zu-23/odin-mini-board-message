const { Router } = require("express");
const { restart } = require("nodemon");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini message board", messages: messages });
});
//router for messages
indexRouter.get("/messages/:user", (req, res) => {
  messages.filter((obj) => {
    if (req.params.user === obj.user) {
      res.render("messages", { obj });
    }
  });
});
module.exports = { indexRouter, messages };
