const { json } = require("express");
const express = require("express");
const cors = require("cors");
const connection = require("./database/database");
const app = express();
// ### Models ###
const Pergunta = require("./model/Pergunta");
const Resposta = require("./model/Resposta");

// ### Database ###
connection.authenticate().then(() => {
  console.log("Conexão com o Banco de Dados realizada.");
});

app.listen(8711, () => console.log("Server working"));

app.use(json());
app.use(cors());

// ### Rotas ###
app.get("/", (req, res) => res.send("backend rodando"));

app.post("/perguntar", (req, res) => res.send("Pergunta enviada."));

app.post("/salvarpergunta", async (req, res) => {
  const { titulo, descricao } = req.body;
  if (!descricao && !titulo)
    return res.send("Os campos: 'Título' e 'Descrição' não podem estar vazios");
  if (!titulo) return res.send("O campo: 'Título' não pode estar vazio");
  if (!descricao) return res.send("O campo: 'Descrição' não pode estar vazio");
  /*
  ### Outra forma de fazer tratamento de erros menos verbosa ###

  const requiredFields = ["titulo", "descricao"];
  for (const fields of requiredFields) {
    if (!req.body[fields]) {
      return res.send(`O campo ${fields} precisa ser inserido`);
    }
  */
  await Pergunta.create({
    titulo: titulo,
    descricao: descricao,
  });
  res.send("Pergunta salva com sucesso.");
});

app.get("/perguntas", async (req, res) => {
  const response = await Pergunta.findAll({
    order: [
      // rece 2 campos: campo da tabela, tipo de ordenação
      ["created_at", "DESC"], // ASC = crescente || DESC = decrescente
    ],
  });
  res.send(response);
});

app.get("/perguntaid/:id", async (req, res) => {
  const id = req.params.id;
  const response = await Pergunta.findOne({
    where: { id },
  });
  res.send(response);
});

app.post("/salvarresposta", async (req, res) => {
  const { corpo, perguntaId } = req.body;
  if (!corpo) return res.send("Os campos: 'Resposta' não pode estar vazio");
  await Resposta.create({
    corpo: corpo,
    perguntaId: perguntaId,
  });
  res.send("Resposta salva com sucesso.");
});

app.get("/resposta/:id", async (req, res) => {
  const id = req.params.id;
  const response = await Resposta.findAll({
    where: { id },
    order: [
      // rece 2 campos: campo da tabela, tipo de ordenação
      ["created_at", "DESC"], // ASC = crescente || DESC = decrescente
    ],
  });
  res.send(response);
});
