const { json } = require("express");
const express = require("express");
const app = express();

app.listen(8080, () => console.log("Server working"));
app.use(json());

app.get("/", (req, res) => res.send("backend rodando"));

app.post("/perguntar", (req, res) => res.send("Pergunta enviada."));
""