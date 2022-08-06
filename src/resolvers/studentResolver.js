const Student = require("../models/StudentModel");

const studentResolver = {
  Query: {
    async allStudents() {
      return await Student.find().clone();
    },
    student(_, { id }) {
      return Student.findById(id);
    },
  },
  Mutation: {
    createStudent(_, { student }) {
      const newStudent = new Student(student);
      return newStudent.save();
    },
    async updateStudent(_, { id, student }) {
      return await Student.findByIdAndUpdate(id, student, {
        new: true,
        useFindAndModify: false,
      });
    },
    async deleteStudent(_, { id }) {
      return await Student.findByIdAndRemove(id, {
        useFindAndModify: false,
      });
    },
  },
};

module.exports = studentResolver;
