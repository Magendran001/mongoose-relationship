const book = require("../models/bookmodel");
const express = require("express");
const router = express.Router();

router.get("", async (req, res) => {
  try {
    let Book = await book.find().lean().exec();

    return res.send(Book);
  } catch (e) {
    return res.send({ message: e.message });
  }
});
router.post("", async (req, res) => {
  try {
    let Book = await book.create(req.body);

    return res.send(Book);
  } catch (e) {
    return res.send({ message: e.message });
  }
});

module.exports = router;
