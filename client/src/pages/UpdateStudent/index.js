import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useParams, Link, useNavigate } from "react-router-dom";
import { GET_STUDENT_BY_ID } from "../ReadStudent";

const UPDATE_STUDENT = gql`
  mutation UpdateStudent(
    $id: String!
    $name: String
    $email: String
    $phone: String
    $gender: String
  ) {
    updateStudent(
      id: $id
      student: { name: $name, email: $email, phone: $phone, gender: $gender }
    ) {
      id
      name
      email
      phone
      gender
    }
  }
`;

const UpdateStudent = () => {
  let nameInput;
  let emailInput;
  let phoneInput;
  let genderInput;

  const { id } = useParams();
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_STUDENT_BY_ID, {
    variables: { id },
  });
  const [updateStudent, { error: mutationError }] = useMutation(
    UPDATE_STUDENT,
    {
      onCompleted() {
        navigate(`/`);
      },
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error || mutationError) return <p>Error :(</p>;

  return (
    <div>
      <form
        className="App-viewbox"
        onSubmit={(e) => {
          e.preventDefault();

          updateStudent({
            variables: {
              id: data.student.id,
              name: nameInput.value,
              email: emailInput.value,
              phone: phoneInput.value,
              gender: genderInput.value,
            },
          });
        }}
      >
        <p>
          <label>
            Nome
            <br />
            <input
              type="text"
              name="name"
              defaultValue={data.student.name}
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
              name="name"
              defaultValue={data.student.email}
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
              name="name"
              defaultValue={data.student.gender}
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
              name="name"
              defaultValue={data.student.name}
              ref={(node) => {
                genderInput = node;
              }}
            />
          </label>
        </p>

        <p className="App-close-btn">
          <Link to="/">
            <button type="button">✖</button>
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

export default UpdateStudent;
