const express = require("express");
const app = express();
const { indexRouter } = require("./routers/index.routers");
const newRouter = require("./routers/new.router");
require("dotenv").config();
const PORT = process.env.PORT;
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
//index router
app.use("/", indexRouter);
app.use("/new", newRouter);
//new router

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
