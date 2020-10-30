import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

function NavBar(props) {
  return (
    <nav>
      <div className="nav-wrapper #1b5e20 green darken-4 z-depth-3">
        <a href="/#" className="brand-logo center">
          OurHarvest
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/farms">Our farms</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(NavBar);
