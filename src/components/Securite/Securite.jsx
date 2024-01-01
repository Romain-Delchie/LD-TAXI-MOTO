import React from "react";
import "./Securite.css";

export default function Securite() {
  return (
    <div id="securite">
      <section className="securite-container">
        <h2 className="securite-title">
          LD TAXI MOTO met à votre disposition divers équipements pour garantir
          votre confort et votre sécurité pendant la course :
        </h2>
        <ul>
          <li>Un casque de marque Shoei Neotec intercom connecté.</li>
          <li>Charlottes interne pour l’hygiène.</li>
          <li>Gants de protection en cuir et gel hydroalcoolique.</li>
          <li>Blouson et pantalon avec renfort qui protège de la pluie.</li>
          <li>Tablier intégré à la moto qui couvrira vos jambes.</li>
          <li>Gilet airbag spécialisé pour la moto.</li>
        </ul>
        <h2 className="securite-title">
          Entretien Rigoureux pour une Sécurité Optimale
        </h2>
        <p>
          Nous mettons en place des assurances spécifiques pour garantir la
          sécurité dans le secteur des transports publics particuliers de
          personnes. Chaque année, une attestation d'entretien atteste du suivi
          méticuleux de la maintenance de nos véhicules. Cela comprend l'examen
          des systèmes de freinage, de direction, de suspension (roues,
          pneumatiques, état du châssis) et de visibilité
          (éclairage-signalisation et rétroviseurs).
        </p>
      </section>
    </div>
  );
}
