const db_connection = require("./connection/db.config");
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers/studentResolver");

// Conectando com o Banco de dados
db_connection();
const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen()
  .then(({ url }) => console.log(`Servidor rodando em: ${url}`))
  .catch((error) => console.log("Server failed: ", error));
