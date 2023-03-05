import React from "react";
import navLogo from "../assets/images/Logo/BrainFlix-logo.svg";
import avatarImage from "..//assets/images/Mohan-muruge.jpg";
import searchIcon from '../assets/images/Icons/search.svg';

export default function NavBar() {


  return (
    <nav className="nav">
        <div class="nav__content">
            <img className="nav__logo" src={navLogo} alt="logo" />
            <div className="nav__input--container">
            <input className="nav__input-el" type="text" placeholder="Search" id="shearch video" />
            <img className="nav__avatar" src={avatarImage} alt="Avatar" />
            </div>
            <button className="nav__button"> UPLOAD </button>
        </div>
    </nav>
  );
}