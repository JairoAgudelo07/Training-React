import "../assets/styles/Navbar.css";
import logo from "../assets/images/logo.png";
import iconoPlus from "../assets/images/+.png";
import buttonMenu from "../assets/images/button_menu.svg";
import { useState } from "react";

export const Navbar = () => {
  const [activeButton, setActiveButton] = useState("");
  console.log(activeButton);

  return (
    <>
      <header className="header">
        <a
          className="header__logo-link"
          href="/"
          aria-label="Logo Contact app que redirije a la pagina principal"
        >
          <img
            className="header__logo"
            src={logo}
            alt="Logo Contact app"
            title="Logo"
          />
        </a>
        <input
          type="checkbox"
          className="header__checkbox"
          id="open-menu"
        ></input>
        <label
          htmlFor="open-menu"
          className="header__open-nav-button"
          role="button"
        >
          <img className="header__open-nav-button-img" src={buttonMenu} />
        </label>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a
                id="overview"
                className={`header__nav-link ${
                  activeButton === "overview" ? "activeButton" : ""
                }`}
                aria-label="Enlace que redirije a Overview"
                href="#"
                onClick={(e) => {
                  setActiveButton(e.target.id);
                }}
              >
                Overview
              </a>
            </li>
            <li className="header__nav-item">
              <a
                id="contacts"
                className={`header__nav-link ${
                  activeButton === "contacts" ? "activeButton" : ""
                }`}
                aria-label="Enlace que redirije a contacts"
                href="contact"
                onClick={(e) => {
                  setActiveButton(e.target.id);
                }}
              >
                Contacts
              </a>
            </li>
            <li className="header__nav-item">
              <a
                id="favorites"
                className={`header__nav-link ${
                  activeButton === "favorites" ? "activeButton" : ""
                }`}
                aria-label="Enlace que redirije a favoritos"
                href="#"
                onClick={(e) => {
                  setActiveButton(e.target.id);
                }}
              >
                Favorites
              </a>
            </li>
            <button
              className="header__nav-button"
              aria-label="Crear un nuevo favorito"
            >
              <img className="header__nav-button-img" src={iconoPlus} />
              NEW
            </button>
          </ul>
        </nav>
      </header>
    </>
  );
};
