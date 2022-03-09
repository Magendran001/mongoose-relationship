const author = require("../models/authormodel");
const book = require("../models/bookmodel");
const express = require("express");
const router = express.Router();

router.get("", async (req, res) => {
  try {
    let Author = await author.find().lean().exec();

    return res.send(Author);
  } catch (e) {
    return res.send({ message: e.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let Author = await book.find({ author_id: req.params.id }).lean().exec();
    console.log(Author);
    return res.send(Author);
  } catch (e) {
    return res.send(e.message);
  }
});
router.post("", async (req, res) => {
  try {
    let Author = await author.create(req.body);

    return res.send(Author);
  } catch (e) {
    return res.send({ message: e.message });
  }
});

module.exports = router;
