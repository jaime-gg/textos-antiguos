import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

import FilterMenu from "../FilterMenu";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="">
          <li className="">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="">
          <li className="">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          TEXTOS ANTIGUOS 
        </Link>
      </h1>

      <nav>
        {showNavigation()}
        <FilterMenu />
      </nav>

    </header>
  );
}

export default Nav;
