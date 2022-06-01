import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ValidarSesion from "./validate";
import Home from "./home";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/inicsec">Iniciar Sesion</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/inicsec" element={<ValidarSesion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
