const section = require("../models/sectionmodel");
const express = require("express");
const router = express.Router();
const book = require("../models/bookmodel");

router.get("", async (req, res) => {
  try {
    let Section = await section.find().lean().exec();

    return res.send(Section);
  } catch (e) {
    return res.send({ message: e.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let Section = await book.find({ section_id: req.params.id }).lean().exec();
    return res.send(Section);
  } catch (e) {
    return res.send({ message: e.message });
  }
});
router.post("", async (req, res) => {
  try {
    let Section = await section.create(req.body);

    return res.send(Section);
  } catch (e) {
    return res.send({ message: e.message });
  }
});

module.exports = router;
