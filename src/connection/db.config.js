require("dotenv").config();
const mongoose = require("mongoose");
let mongoURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@apicluster.bje3h.mongodb.net/api-graphql?retryWrites=true&w=majority`;

const connectDatabase = async () => {
  await mongoose.connect(mongoURL, { useNewUrlParser: true }, (error) => {
    if (error) {
      console.log(mongoURL);
      return console.log("Erro ao se conectar com o banco", error);
    }
    //console.log(mongoURL);
    return console.log("Conexão com o banco bem sucedida!");
  });
};

module.exports = connectDatabase;
