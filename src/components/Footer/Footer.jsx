import React, { useState } from "react";
import "./Footer.css";
import LegalTerms from "../LegalTerms/LegalTerms";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";

export default function Footer() {
  const [modalIsOpen, setModalIsOpen] = useState({
    mentions: false,
    politique: false,
  });

  const openModal = (key) => {
    setModalIsOpen({ [key]: true });
  };

  return (
    <footer className="footer">
      <button onClick={() => openModal("mentions")} className="footer__button">
        Mentions légales
      </button>
      <button onClick={() => openModal("politique")} className="footer__button">
        Politique de confidentialité
      </button>
      {modalIsOpen.mentions && (
        <LegalTerms
          closeModal={() => setModalIsOpen({ ...modalIsOpen, mentions: false })}
        />
      )}
      {modalIsOpen.politique && (
        <PrivacyPolicy
          closeModal={() =>
            setModalIsOpen({ ...modalIsOpen, politique: false })
          }
        />
      )}
    </footer>
  );
}
