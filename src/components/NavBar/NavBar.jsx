import React from "react";
import navLogo from "../../assets/images/Logo/BrainFlix-logo.svg";


export default function NavBar() {
  return (
    <nav className="nav">
      <div className="nav__content">
        <a href="/">
        <img className="nav__logo" src={navLogo} alt="logo" />
        </a>
        <div className="nav__input--container">
          <input
            className="nav__input-el"
            type="text"
            placeholder="Search"
            id="shearch video"
          />
          <button className="nav__button--horizontal"> UPLOAD </button>
          <div className="nav__avatar" />
        </div>
        <button className="nav__button"> UPLOAD </button>
      </div>
    </nav>
  );
}
