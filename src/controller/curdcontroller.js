app.get("", async (req, res) => {
  try {
    let x = await model.find().lean().exec();

    return res.send(x);
  } catch (e) {
    return res.send({ message: e.message });
  }
});
app.post("", async (req, res) => {
  try {
    let x = await model.create(req.body);

    return res.send(x);
  } catch (e) {
    return res.send({ message: e.message });
  }
});
