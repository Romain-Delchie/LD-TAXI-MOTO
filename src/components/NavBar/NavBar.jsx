import React, { useState, useEffect } from "react";
import { Link, Events } from "react-scroll";
import "./NavBar.css";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("main");
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  function closeBurger() {
    setIsBurgerOpen(false);
  }

  return (
    <nav>
      <Link
        className="logo-link"
        to="main"
        active={activeLink === "main"}
        smooth={true}
        duration={1000}
      >
        <img src="/logo5.png" alt=" logo de LD taxi moto" />
      </Link>
      <a className="navbar-tel" href={`tel:+33670513649`}>
        <p>Tel: +33(6) 70 51 36 49</p>
      </a>

      <ul
        className={`navbar-links ${
          isBurgerOpen ? "show-navbar" : "hide-navbar"
        }`}
      >
        <li className="navbar-item slideInDown1">
          <Link
            onClick={() => {
              handleSetActive("main");
              closeBurger();
            }}
            className={`logo-link ${activeLink === "main" ? "isActive" : ""}`}
            to="main"
            active={activeLink === "main"}
            onSetActive={() => handleSetActive("main")}
            spy={true}
            smooth={true}
            duration={1000}
          >
            Accueil
          </Link>
        </li>
        <li className="navbar-item slideInDown2">
          <Link
            onClick={() => {
              handleSetActive("services");
              closeBurger();
            }}
            className={`logo-link ${
              activeLink === "services" ? "isActive" : ""
            }`}
            to="services"
            active={activeLink === "services"}
            onSetActive={() => handleSetActive("services")}
            spy={true}
            smooth={true}
            duration={1000}
          >
            Nos services
          </Link>
        </li>
        <li className="navbar-item slideInDown3">
          <Link
            onClick={() => {
              handleSetActive("securite");
              closeBurger();
            }}
            className={`logo-link ${
              activeLink === "securite" ? "isActive" : ""
            }`}
            to="securite"
            active={activeLink === "securite"}
            onSetActive={() => handleSetActive("securite")}
            spy={true}
            smooth={true}
            duration={1000}
          >
            Sécurité et équipements
          </Link>
        </li>
        <li className="navbar-item slideInDown4">
          <Link
            onClick={() => {
              handleSetActive("tarifs");
              closeBurger();
            }}
            className={`logo-link ${activeLink === "tarifs" ? "isActive" : ""}`}
            to="tarifs"
            active={activeLink === "tarifs"}
            spy={true}
            onSetActive={() => handleSetActive("tarifs")}
            smooth={true}
            duration={1000}
          >
            Tarifs
          </Link>
        </li>
        <li className="navbar-item slideInDown5">
          <Link
            onClick={() => {
              handleSetActive("reservation");
              closeBurger();
            }}
            className={`logo-link ${
              activeLink === "reservation" ? "isActive" : ""
            }`}
            to="reservation"
            active={activeLink === "reservation"}
            spy={true}
            smooth={true}
            onSetActive={() => handleSetActive("reservation")}
            duration={1000}
          >
            Réservation
          </Link>
        </li>
      </ul>
      <button
        onClick={() => setIsBurgerOpen(!isBurgerOpen)}
        className="navbar-burger"
      >
        <span className="burger-line"></span>
      </button>
    </nav>
  );
}
