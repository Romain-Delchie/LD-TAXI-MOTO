import React from 'react'
import { motion } from "framer-motion"
import './Hero.css'

export default function Hero() {
    return (
        <div className="hero-image-container">
            <motion.div className="rectangle rectangle-left" animate={{ x: 140, y: 0, opacity: 1 }} transition={{ duration: 1 }}>
                <img src="moto.jpeg" alt="photo de moto" />
            </motion.div>
            <motion.div className="rectangle rectangle-bottom" animate={{ x: 140, y: 0, opacity: 1 }} transition={{ duration: 1 }}>
                <img src="louvre.jpeg" alt="photo de Paris" />
            </motion.div>
            <motion.div className="rectangle rectangle-right" animate={{ x: -140, y: 0, opacity: 1 }} transition={{ duration: 1 }}>
                <img src="moto1.jpeg" alt="photo de moto" />
            </motion.div>
            <motion.div className="rectangle rectangle-top" animate={{ x: -140, y: 0, opacity: 1 }} transition={{ duration: 1 }}>
                <img src="avion2.jpeg" alt="photo de moto" />
            </motion.div>
        </div >
    )
}
