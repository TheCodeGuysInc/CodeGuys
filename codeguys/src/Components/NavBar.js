import React, { useEffect, useRef } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useHistory,
  Redirect,
  Link,
} from "react-router-dom";

import "./NavBar.scss";

const NavBar = (props) => {
  console.log(props);

  return (
    <>
      <div className="navbar-container flex justify-between">
        <div className="logo-icon-text">
          <p>{props.logoIcon}</p>
        </div>

        <div className="nav-links">
          {props.links.map((link, index) => {
            return (
              <>
                <Link key={index} className="link" to={link.linkRoute}>
                  {link.linkName}
                </Link>
              </>
            );
          })}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
