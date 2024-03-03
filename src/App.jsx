import React from "react";
import { Routes as Router, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Container1 from "./containers/Container1";
import Container2 from "./containers/Container2";
import Container3 from "./containers/Container3";
import Container4 from "./containers/Container4";
import Container5 from "./containers/Container5";
import Container6 from "./containers/Container6";
import Container7 from "./containers/Container7";
import ModalPopUp from "./containers/ModalPopUp";

function App() {
  return (
    <Router>
      <Route
        path="/"
        element={
          <main>
            <Navbar />
            <div className="Conteudo">
              <Container1 />
              <Container2 />
              <Container3 />
              {/* <Container4 /> */}
              <Container5 />
              <Container6 />
              <Container7 />
              {/* <ModalPopUp /> */}
            </div>
          </main>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Router>
  );
}

export default App;
