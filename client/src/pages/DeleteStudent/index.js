import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useParams, Link, useNavigate } from "react-router-dom";
import { GET_STUDENTS } from "../Students";
import { GET_STUDENT_BY_ID } from "../ReadStudent";

const DELETE_STUDENT = gql`
  mutation DeleteStudent($id: String) {
    deleteStudent(id: $id) {
      id
      name
      email
      phone
      gender
    }
  }
`;

const DeleteFruit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_STUDENT_BY_ID, {
    variables: { id },
  });

  const [deleteStudent, { error: mutationError }] = useMutation(
    DELETE_STUDENT,
    {
      refetchQueries: [{ query: GET_STUDENTS }, "allStudents"],
      // redirecionando para a página inicial
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

          deleteStudent({
            variables: { id },
          });
        }}
      >
        <p>
          Excluir <strong>{data.student.name}</strong>?
        </p>
        <p className="App-close-btn">
          <Link to="/">
            <button>✖</button>
          </Link>
        </p>
        <p>
          <button className="App-btn" type="submit">
            Excluir
          </button>
        </p>
      </form>
    </div>
  );
};

export default DeleteFruit;
