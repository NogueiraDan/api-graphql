const { gql } = require("apollo-server");

const types = gql`
  type Student {
    name: String!
    email: String!
    phone: String!
    gender: String!
  }
`;
module.exports = types;
