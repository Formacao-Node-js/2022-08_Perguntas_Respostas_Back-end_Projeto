const { json } = require("express");
const express = require("express");
const app = express();
const connection = require("./database/database");
// Models
const Pergunta = require("./model/Pergunta");

// ### Database ###
connection.authenticate().then(() => {
  console.log("Conexão com o Banco de Dados realizada.");
});

app.listen(8711, () => console.log("Server working"));

app.use(json());

app.get("/", (req, res) => res.send("backend rodando"));

app.post("/perguntar", (req, res) => res.send("Pergunta enviada."));

app.post("/salvarpergunta", (req, res) => {
  const { titulo, descricao } = req.body;
  Pergunta.create({
    titulo: titulo,
    descricao: descricao,
  }).then(() => {
    console.log("Pergunta salva com sucesso.");
    res.send("Pergunta salva com sucesso.");
  });
});
