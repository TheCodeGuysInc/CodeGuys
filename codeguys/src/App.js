import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useRef } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useHistory,
  Redirect,
  Link,
} from "react-router-dom";

import About from "./Pages/About";
import HomePage from "./Pages/Home";
import MatrixBackground from "./Components/MatrixBackground";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="header-container">
          <MatrixBackground />
          <div className="code-guys-text">
            <p>Code Guys Inc</p>
          </div>

          <div className="nav-links">
            <div>
              <Link className="link" to="/CodeGuys">
                Home
              </Link>
            </div>

            <div>
              <Link className="link" to="/about">
                About
              </Link>
            </div>
            <div>
              <Link className="link" to="/projects">
                Projects
              </Link>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/CodeGuys" element={<HomePage />}></Route>
          {/* <Route path="/projects">
            <Projects />
          </Route> */}
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
