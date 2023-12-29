import React from 'react'
import { motion } from "framer-motion"
import './Hero.css'

export default function Hero() {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };
    return (
        <motion.ul
            className="hero-container"
            variants={container}
            initial="hidden"
            animate="visible"
        >

            <motion.li className="rectangle rectangle-left" variants={item}>
                <img src="moto.jpeg" alt="photo de moto" />
            </motion.li>
            <motion.li className="rectangle rectangle-bottom" variants={item}>
                <img src="louvre.jpeg" alt="photo de Paris" />
            </motion.li>
            <motion.li className="rectangle rectangle-right" variants={item}>
                <img src="moto1.jpeg" alt="photo de moto" />
            </motion.li>
            <motion.li className="rectangle rectangle-top" variants={item}>
                <img src="avion2.jpeg" alt="photo de moto" />
            </motion.li>

        </motion.ul>
    )
}
