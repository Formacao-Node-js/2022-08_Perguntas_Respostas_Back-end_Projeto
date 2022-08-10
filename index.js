const { json } = require("express");
const express = require("express");
const app = express();
const connection = require("./database/database");
// Models
const perguntaModel = require("./model/Pergunta");

// ### Database ###
connection.authenticate().then(() => {
  console.log("Conexão com o Banco de Dados realizada.");
});

app.listen(8080, () => console.log("Server working"));
app.use(json());

app.get("/", (req, res) => res.send("backend rodando"));

app.post("/perguntar", (req, res) => res.send("Pergunta enviada."));
