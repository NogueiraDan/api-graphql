import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Students from "./pages/Students";

const RoutesApplication = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Students />} />
      </Routes>
    </Router>
  );
};
export default RoutesApplication;
