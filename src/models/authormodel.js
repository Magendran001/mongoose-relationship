const { default: mongoose } = require("mongoose");

const author = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
});
module.exports = mongoose.model("author", author);
