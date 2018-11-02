/* eslint-disable no-console */
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

const bookmarksRouter = require("./routes/bookmarks");
const config = require("./db");

mongoose
  .connect(config.DB)
  .then(
    () => console.log("Database is connected..."),
    error => console.log("Could not connect to database...", error)
  );

const app = express();

app.use(bodyParser.json());

app.use("/bookmarks", bookmarksRouter);

app.listen(4000, () => {
  console.log("Hearth is running on localhost:4000...");
});
