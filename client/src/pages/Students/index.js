import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import "./student.css";

// Apollo Client Queries
export const GET_STUDENTS = gql`
  {
    allStudents {
      id
      name
      email
    }
  }
`;

const Students = () => {
  // captando o estado da nossa Query
  const { loading, error, data } = useQuery(GET_STUDENTS);

  if (loading) return <p>Loading &#8987;...</p>;
  if (error) return <p>Parece que algo deu errado &#128546;</p>;

  return (
    <>
      <ul>
        {data.allStudents &&
          data.allStudents.map(({ id, name, email }) => (
            <li key={id}>
              <span>{name}</span>

              <div className="App-item-actions">
                <Link to={`/student/${id}`}>
                  <span role="img" aria-label="visualizar">
                    &#128172;
                  </span>
                </Link>
                <Link to={`/editStudent/${id}`}>
                  <span role="img" aria-label="editar">
                    &#9997;
                  </span>
                </Link>
                <Link to={`/deleteStudent/${id}`}>
                  <span role="img" aria-label="excluir">
                    &#10060;
                  </span>
                </Link>
              </div>
            </li>
          ))}
      </ul>

      <p>
        <Link to="/createStudent">
          <button>Adicionar Aluno</button>
        </Link>
      </p>
    </>
  );
};

export default Students;
