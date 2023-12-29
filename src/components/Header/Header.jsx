import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Header.css'
import Hero from '../Hero/Hero'
import { motion } from 'framer-motion'

export default function Header() {
    return (
        <header id='main'>
            <NavBar />
            <section className='hero'>
                <motion.div className="hero-title" animate={{ opacity: 1, marginBottom: 0 }} transition={{ duration: 0.5 }}>
                    <span className='hero-slogan'>"Rapidité, Confort, Sécurité : Votre Destination, Notre Mission !"</span>
                    <span className='hero-name'>LD TAXI MOTO</span>
                    <h1>Embarquez pour un voyage d'élégance et de rapidité avec nos chauffeurs de taxi moto dédiés. L'expérience d'une conduite sûre, rapide et confortable vous attend. Réservez votre trajet dès maintenant et découvrez le luxe d'une mobilité sans compromis.</h1>
                </motion.div>
                <Hero />
            </section>
        </header>

    )
}
