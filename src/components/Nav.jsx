import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Image (3).png";

function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={logo} className="home__logo" />
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link link__hover-effect">
                Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/Movies" className="nav__link link__hover-effect">
                Find your Movie
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;