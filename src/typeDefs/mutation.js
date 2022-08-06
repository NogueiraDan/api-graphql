const { gql } = require("apollo-server");

const mutation = gql`
  type Mutation {
    createStudent(student: StudentInput): Student
    updateStudent(id: String, student: StudentInput): Student
    deleteStudent(id: String): Student
  }

  input StudentInput {
    name: String
    email: String
    phone: String
    gender: String
  }
`;

module.exports = mutation;
