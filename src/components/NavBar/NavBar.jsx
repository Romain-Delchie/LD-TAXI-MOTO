import React, { useState, useEffect } from "react";
import { Link, Events } from "react-scroll";
import "./NavBar.css";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("main");
  const handleSetActive = (to) => {
    setActiveLink(to);
  };
  console.log();

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
      <a className="navbar-tel" href={`tel:+33629980981`}>
        <p>Tel: +33(6) 29 98 09 81</p>
      </a>

      <div className="menu-container">
        <Link
          onClick={() => handleSetActive("main")}
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
        <Link
          onClick={() => handleSetActive("services")}
          className={`logo-link ${activeLink === "services" ? "isActive" : ""}`}
          to="services"
          active={activeLink === "services"}
          onSetActive={() => handleSetActive("services")}
          spy={true}
          smooth={true}
          duration={1000}
        >
          Nos services
        </Link>
        <Link
          onClick={() => handleSetActive("securite")}
          className={`logo-link ${activeLink === "securite" ? "isActive" : ""}`}
          to="securite"
          active={activeLink === "securite"}
          onSetActive={() => handleSetActive("securite")}
          spy={true}
          smooth={true}
          duration={1000}
        >
          Sécutité et équipements
        </Link>
        <Link
          onClick={() => handleSetActive("tarifs")}
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
        <Link
          onClick={() => handleSetActive("reservation")}
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
      </div>
    </nav>
  );
}
