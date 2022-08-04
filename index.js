const { json } = require("express");
const express = require("express");
const app = express();

app.listen(8080, () => console.log("Server working"));
app.use(json());

app.get("/", (req, res) => res.send("funcionou"));

app.post("/", (req, res) => {
  const { a, b } = req.body;

  res.json({ message: a + b });
});
