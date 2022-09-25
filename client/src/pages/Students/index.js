import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import "./student.css";
export const GET_STUDENTS = gql`
  {
    allStudents {
      name
      email
    }
  }
`;

const Students = () => {
  const { loading, error, data } = useQuery(GET_STUDENTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <ul>
        {data.allStudents &&
          data.allStudents.map(({ name, email }) => (
            <li key={email}>
              <span>{name}</span>

              <div className="App-item-actions">
                <Link to={`/student/${email}`}>
                  <span role="img" aria-label="visualizar">
                    &#128172;
                  </span>
                </Link>
                <Link to={`/editStudent/${email}`}>
                  <span role="img" aria-label="editar">
                    &#9997;
                  </span>
                </Link>
                <Link to={`/deleteStudent/${email}`}>
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
