import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './NavBar.css'

export default function NavBar() {
    const [activeLink, setActiveLink] = useState('main');
    const handleSetActive = (to) => {
        setActiveLink(to);
    };
    return (
        <nav>
            <Link className='logo-link' to='main' active={activeLink === 'main'} smooth={true} duration={1000}>
                <img src="/logo5.png" alt=" logo de LD taxi moto" />
            </Link>
            <a className='navbar-tel' href={`tel:+33629980981`}><p>Tel: +33(6) 29 98 09 81</p></a>

            <div className='menu-container'>
                <Link onClick={() => handleSetActive("main")} className={activeLink === "main" ? "logo-link isActive" : "logo-link"} to='main' active={activeLink === 'main'} spy={true} smooth={true} duration={1000}>
                    Accueil
                </Link>
                <Link onClick={() => handleSetActive("services")} className={activeLink === "services" ? "logo-link isActive" : "logo-link"} to='services' active={activeLink === 'services'} spy={true} smooth={true} duration={1000}>Nos services</Link>
                <Link onClick={() => handleSetActive("securite")} className={activeLink === "securite" ? "logo-link isActive" : "logo-link"} to='securite' active={activeLink === 'securite'} spy={true} smooth={true} duration={1000}>Sécutité et équipements</Link>
                <Link onClick={() => handleSetActive("tarifs")} className={activeLink === "tarifs" ? "logo-link isActive" : "logo-link"} to='tarifs' active={activeLink === 'tarifs'} spy={true} smooth={true} duration={1000}>Tarifs</Link>
                <Link onClick={() => handleSetActive("reservation")} className={activeLink === "reservation" ? "logo-link isActive" : "logo-link"} to='reservation' active={activeLink === 'reservation'} spy={true} smooth={true} duration={1000}>Réservation</Link>
            </div>
        </nav>
    )
}