import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Header.css";
import Hero from "../Hero/Hero";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header id="main">
      <NavBar />
      <section className="hero">
        <motion.div
          className="hero-title"
          animate={{ opacity: 1, marginBottom: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="hero-slogan">
            "Rapidité, Confort, Sécurité : Votre Destination, Notre Mission!"
          </span>
          <h1 className="hero-name">
            LD TAXI MOTO <span>24h/24 7j/7 Paris et sa banlieue</span>
          </h1>
          <p className="hero-description">
            Embarquez pour un voyage d'élégance et de rapidité avec nos
            chauffeurs de taxi moto dédiés. L'expérience d'une conduite sûre,
            rapide et confortable vous attend. Réservez votre trajet dès
            maintenant et découvrez le luxe d'une mobilité sans compromis.
          </p>
        </motion.div>
        <Hero />
      </section>
    </header>
  );
}
