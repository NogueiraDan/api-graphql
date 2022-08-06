const { gql } = require("apollo-server");

const types = gql`
  type Student {
    id: ID!
    name: String
    notes: Notes
  }
  type Notes {
    note: String
  }
`;
module.exports = types;
