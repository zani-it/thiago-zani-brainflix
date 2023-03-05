import React from "react";
import navLogo from "../assets/images/Logo/BrainFlix-logo.svg";
import avatarImage from "..//assets/images/Mohan-muruge.jpg";

export default function NavBar() {


  return (
    <nav>
        <div>
            <img className="nav__logo" src={navLogo} alt="logo" />
            <div className="nad__input--container">
            <input type="text" />
            <img className="nav__avatar" src={avatarImage} alt="Avatar" />
            </div>
            <button className="nav__upload-button"> UPLOAD </button>
        </div>

    </nav>
  );
}