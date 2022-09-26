import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

export const GET_STUDENT_BY_ID = gql`
  query GetStudent($id: ID!) {
    student(id: $id) {
      name
      email
      phone
      gender
    }
  }
`;

const ReadStudent = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_STUDENT_BY_ID, {
    variables: { id },
  });

  if (loading) return <p>Loading &#8987;...</p>;
  if (error) return <p>Parece que algo deu errado &#128546;</p>;

  return (
    <div className="App-viewbox">
      <p>
        <strong>Nome: </strong>
        {data.student.name}
      </p>
      <p>
        <strong>Email: </strong>
        {data.student.email}
      </p>
      <p>
        <strong>Nome: </strong>
        {data.student.phone}
      </p>
      <p>
        <strong>Nome: </strong>
        {data.student.gender}
      </p>
      <p className="App-close-btn">
        <Link to="/">
          <button>Fechar</button>
        </Link>
      </p>
      {/* <p>
        <Link to={`/editFruit/${id}`}>
          <button>Editar</button>
        </Link>
      </p> */}
    </div>
  );
};

export default ReadStudent;
