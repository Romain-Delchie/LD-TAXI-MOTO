import React, { useRef } from "react";
import "./Services.css";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Services() {
  const servicesRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: servicesRef,
    offset: ["start center", "end start"],
  });
  console.log(window.innerWidth);
  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    window.innerWidth <= 1200 ? ["-100%", "50%", "100%"] : ["0%", "75%", "150%"]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const xInverse = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    window.innerWidth <= 1200
      ? ["100%", "-50%", "-100%"]
      : ["100%", "25%", "-50%"]
  );

  return (
    <div ref={servicesRef} id="services">
      <section className="services-container">
        {/* <h2 className='services-title'>Services</h2>
                <h3>LD TAXI MOTO C’est la garantie de ne jamais manquer son avion, son train, ses réunions de travail...</h3> */}
        <motion.div
          className="services-section services-section-first"
          style={{ x, opacity }}
        >
          <p>
            LD Taxi Moto est à votre disposition 24h/24, 7j/7, assurant une
            ponctualité rigoureuse. Nous vous garantissons efficacité, gain de
            temps, sécurité, flexibilité, hygiène, confort et ponctualité lors
            de vos déplacements. <span>Ces aspects sont devenus essentiels dans notre
            magnifique capitale constamment saturée par le trafic.</span>
          </p>
          <img
            className="services-image"
            src="/Calque 1.png"
            alt="photo d'une moto"
          />
        </motion.div>
        <motion.div
          className="services-section services-section-second"
          style={{ x: xInverse, opacity }}
        >
          <img
            className="services-image"
            src="/Calque 2.png"
            alt="photo d'une moto"
          />
          <p>
            Nos chauffeurs sont titulaires de tous les permis depuis plus de 10
            ans, avec une expérience confirmée en conduite de deux-roues depuis
            2017. La route n'a aucun secret pour nous, garantissant ainsi votre
            sécurité et votre tranquillité tout au long de votre trajet.
          </p>
        </motion.div>
        <motion.div
          className="services-section services-section-third"
          style={{ x, opacity }}
        >
          <p>
            Profitez de notre service rapide, évitant les embouteillages. La
            moto offre la solution idéale pour nos clients et les professionnels
            qui souhaitent se déplacer en toute rapidité et tranquilité à Paris
            et dans sa banlieue.
          </p>
          <img
            className="services-image"
            src="/Calque 1.png"
            alt="photo d'une moto"
          />
        </motion.div>
      </section>
    </div>
  );
}
