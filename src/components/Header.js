import React from "react";

const Header = () => {
  return (
    <div class="header">
      <nav class="navbar shadow-sm">
        <div class="navbar__logo">
          <span>Tattoo</span>finder
        </div>
        <ul class="navbar__list">
          <li class="navbar__item">
            <a href="#">Home</a>
          </li>
          <li class="navbar__item">Favorites</li>
          <li class="navbar__item">Vote</li>
          <li class="navbar__item">Book Session</li>
        </ul>
        <button class="btn btn__primary shadow-sm">Login</button>
      </nav>
    </div>
  );
};

export default Header;
