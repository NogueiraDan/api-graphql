const { gql } = require("apollo-server");

const query = gql`
  type Query {
    allStudents: [Student]
    student(id: ID!): Student
  }
`;

module.exports = query;
