const query = require("./query");
const types = require("./types");
const mutation = require("./mutation");

const typeDefs = [query, mutation, types];
module.exports = typeDefs;
