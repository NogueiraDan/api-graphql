import React from "react";
import { gql, useMutation } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import { GET_STUDENTS } from "../Students";

const CREATE_STUDENT = gql`
  mutation UpdateStudent(
    $name: String!
    $email: String!
    $phone: String!
    $gender: String!
  ) {
    createStudent(
      student: { name: $name, email: $email, phone: $phone, gender: $gender }
    ) {
      name
    }
  }
`;

const AddStudent = () => {
  //Variaveis de controle, input
  let nameInput;
  let emailInput;
  let phoneInput;
  let genderInput;

  const navigate = useNavigate();
  const [createStudent, { loading, error }] = useMutation(CREATE_STUDENT, {
    refetchQueries: [{ query: GET_STUDENTS }, "allStudents"],
    // redirecionando para a página inicial
    onCompleted() {
      navigate(`/`);
    },
  });

  if (loading) return <p>Loading &#8987;...</p>;
  if (error) return <p>Parece que algo deu errado &#128546;</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    createStudent({
      variables: {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        gender: genderInput.value,
      },
    });
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    genderInput.value = "";
  };

  return (
    <div>
      <form
        className="App-viewbox"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <p>
          <label>
            Nome
            <br />
            <input
              type="text"
              name="name"
              ref={(node) => {
                nameInput = node;
              }}
            />
          </label>
        </p>

        <p>
          <label>
            Email
            <br />
            <input
              type="text"
              name="email"
              ref={(node) => {
                emailInput = node;
              }}
            />
          </label>
        </p>

        <p>
          <label>
            Telefone
            <br />
            <input
              type="text"
              name="phone"
              ref={(node) => {
                phoneInput = node;
              }}
            />
          </label>
        </p>

        <p>
          <label>
            Genero
            <br />
            <input
              type="text"
              name="gender"
              ref={(node) => {
                genderInput = node;
              }}
            />
          </label>
        </p>

        <p className="App-close-btn">
          <Link to="/">
            <button>✖</button>
          </Link>
        </p>

        <p>
          <button className="App-btn" type="submit">
            Salvar
          </button>
        </p>
      </form>
    </div>
  );
};

export default AddStudent;
