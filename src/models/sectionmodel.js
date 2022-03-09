const { default: mongoose } = require("mongoose");

const section = new mongoose.Schema({
  section: { type: String, required: true },
});
module.exports = mongoose.model("section", section);
