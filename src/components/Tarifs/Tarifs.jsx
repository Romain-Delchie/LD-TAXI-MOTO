import React from "react";
import "./Tarifs.css";

export default function Tarifs() {
  return (
    <div id="tarifs">
      <h2 className="tarifs-title">Notre tarification</h2>
      <section className="tarifs-container">
        <table>
          <thead>
            <tr>
              <th>De</th>
              <th>Tarif</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Paris - Paris</td>
              <td>55€</td>
            </tr>
            <tr>
              <td>Paris - Orly</td>
              <td>70€</td>
            </tr>
            <tr>
              <td>Paris - CDG</td>
              <td>90€</td>
            </tr>
            <tr>
              <td>Orly - CDG</td>
              <td>120€</td>
            </tr>
            <tr>
              <td>Paris - Bourget</td>
              <td>90€</td>
            </tr>
            <tr>
              <td>Paris - La Défense</td>
              <td>65€</td>
            </tr>
            <tr>
              <td>La Défense - CDG</td>
              <td>115€</td>
            </tr>
            <tr>
              <td>La Défense - Orly</td>
              <td>80€</td>
            </tr>
          </tbody>
        </table>
        <section className="tarifs-other">
          <div>
            <h3 className="tarifs-subtitle">Mise à disposition</h3>
            <p>1h = 90€</p>
            <p>1 journée (8h) = 550€</p>
            <p>Demi-journée (4h) = 300€</p>
          </div>
          <div>
            <h3 className="tarifs-subtitle">Trajets à la carte</h3>
            <p>30€ de prise en charge + 2€/km</p>
          </div>
        </section>
      </section>
    </div>
  );
}
