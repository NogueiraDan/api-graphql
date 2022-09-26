const { gql } = require("apollo-server");

const types = gql`
  type Student {
    id: ID!
    name: String!
    email: String!
    phone: String!
    gender: String!
  }
`;
module.exports = types;
