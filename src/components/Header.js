import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar shadow-sm">
        <div className="navbar__logo">
          <span>Tattoo</span>finder
        </div>
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar__item">
            <Link to="/favorites">Favorites</Link>
          </li>
          <li className="navbar__item">
            <Link to="/vote">Vote</Link>
          </li>
          <li className="navbar__item">
            <Link to="/book">Book Session</Link>
          </li>
        </ul>
        <button className="btn btn__primary shadow-sm">Login</button>
      </nav>
    </div>
  );
};

export default Header;
