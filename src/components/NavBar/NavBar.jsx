import React from "react";
import navLogo from "../../assets/images/Logo/BrainFlix-logo.svg";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="nav__content">
        <NavLink to="/">
          <img className="nav__logo" src={navLogo} alt="logo" />
        </NavLink>
        <div className="nav__input--container">
          <input
            className="nav__input-el"
            type="text"
            placeholder="Search"
            id="shearch video"
          />
          <NavLink to="/upload" className="nav__button--horizontal">UPLOAD</NavLink>
          <div className="nav__avatar" />
        </div>
        <NavLink to="/upload" className="nav__button">UPLOAD</NavLink>
      </div>
    </nav>
  );
}
