const { json } = require("express");
const express = require("express");
const app = express();

app.listen(8080, () => console.log("Server working"));
app.use(json());

app.get("/", (req, res) => res.send("funcionou"));

app.get("/teste/:nome?/:linguagem?", (req, res) => {
    let nome = req.params.nome
    let linguagem = req.params.linguagem

    if(nome && linguagem){
        res.send('Dev: ' + nome + ' | Linguagem: ' + linguagem)
    } else if(nome && linguagem == null){
        res.send('Dev: ' + nome + ' | Linguagem: Não há dados disponíveis')
    }else {
        res.send('Nada há dados disponíveis')
    }

});

app.post("/", (req, res) => {
  const { a, b } = req.body;

  res.json({ message: a + b });
});
