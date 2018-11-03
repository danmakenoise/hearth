const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Bookmark = new Schema({
  name: {
    type: "string"
  },
  href: {
    type: "string"
  }
});

module.exports = mongoose.model("Bookmark", Bookmark);
