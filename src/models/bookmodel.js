const { default: mongoose } = require("mongoose");

const books = new mongoose.Schema({
  book_name: { type: String, required: true },
  book_desc: { type: String, required: true },
  section_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "section",
  },

  author_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "author",
    },
  ],
});
module.exports = mongoose.model("books", books);
