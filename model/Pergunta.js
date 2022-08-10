const Sequelize = require("sequelize");
const connection = require("../database/database");

const Pergunta = connection.define("pergunta", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  titulo: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  descricao: {
    type: Sequelize.STRING(500),
    allowNull: false,
  },
});

Pergunta.sync({ force: false }).then(() => {
  console.log('Tabela "Pergunta" criada.');
});

module.exports = Pergunta;
// cria tabela caso não exista | 'force' se existe, não força a criação da tabela.
