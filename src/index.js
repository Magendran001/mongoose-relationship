const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const authorcontroller = require("./controller/authorcontroller");
const bookcontroller = require("./controller/bookcontroller");
const sectioncontroller = require("./controller/sectioncontroller");

const connect = require("./confg/db");

app.use("/author", authorcontroller);
app.use("/books", bookcontroller);
app.use("/section", sectioncontroller);

app.listen(9301, async (req, res) => {
  try {
    console.log("listening on 9301 port");
    await connect;
  } catch (E) {
    console.log(E.message);
  }
});
