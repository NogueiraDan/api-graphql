import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import ReadStudent from "./pages/ReadStudent";
import DeleteStudent from "./pages/DeleteStudent";
import UpdateStudent from "./pages/UpdateStudent";

const RoutesApplication = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Students />} />
        <Route exact path="/createStudent" element={<AddStudent />} />
        <Route exact path="/student/:id" element={<ReadStudent />} />
        <Route exact path="/deleteStudent/:id" element={<DeleteStudent />} />
        <Route exact path="/editStudent/:id" element={<UpdateStudent />} />
      </Routes>
    </Router>
  );
};
export default RoutesApplication;
