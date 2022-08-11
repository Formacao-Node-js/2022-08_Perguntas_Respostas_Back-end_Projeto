const { json } = require("express");
const express = require("express");
const cors = require("cors");
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
app.use(cors());

app.get("/", (req, res) => res.send("backend rodando"));

app.post("/perguntar", (req, res) => res.send("Pergunta enviada."));

app.post("/salvarpergunta", async (req, res) => {
  const { titulo, descricao } = req.body;
  if (!descricao && !titulo) return res.send("Os campos: 'Título' e 'Descrição' não podem estar vazios");
  if (!titulo) return res.send("O campo: 'Título' não pode estar vazio");
  if (!descricao) return res.send("O campo: 'Descrição' não pode estar vazio");
  await Pergunta.create({
    titulo: titulo,
    descricao: descricao,
  });
  res.send("Pergunta salva com sucesso.");
});
