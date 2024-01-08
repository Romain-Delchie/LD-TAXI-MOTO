import React from "react";
import "./Reservation.css";
import AddressInput from "../AddressInput/AddressInput";

export default function Reservation() {
  return (
    <div id="reservation">
      <section className="reservation-container">
        <h2>Reservation</h2>

        <AddressInput />
      </section>
    </div>
  );
}
