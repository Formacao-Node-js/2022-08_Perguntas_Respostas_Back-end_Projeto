module.exports = {
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "vinicius2304",
  database: "perguntas_respostas",
  define: {
    timestamps: true,
    underscored: true,
  },
};

/*

timestamp => cria e preenche automaticamente os campos created_at, updated_at
underscored => define o nome das colunas em snake case por padrão || Ex: usuario_nome | usuario_senha

*/