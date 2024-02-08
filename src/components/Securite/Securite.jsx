import React from "react";
import "./Securite.css";
import { Autoplay, Pagination, Navigation, EffectCube } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
import "swiper/css/autoplay";

export default function Securite() {
  const photos = ["casque", "gant", "gilet", "pantalon", "veste"];
  const slides = photos.map((photo) => {
    return (
      <SwiperSlide key={photo}>
        <img
          src={`/equipements/${photo}.jpeg`}
          alt={`photo de ${photo}`}
          className="securite-photo"
        />
      </SwiperSlide>
    );
  });

  return (
    <div id="securite">
      <section className="securite-container">
        <h2 className="securite-title">
          LD TAXI MOTO met à votre disposition divers équipements pour garantir
          votre confort et votre sécurité pendant la course :
        </h2>
        <div className="securite-equipment">
          <ul className="securite-list">
            <li>Un casque de marque Shoei Neotec intercom connecté.</li>
            <li>Charlottes interne pour l’hygiène.</li>
            <li>Gants de protection en cuir et gel hydroalcoolique.</li>
            <li>Blouson et pantalon avec renfort qui protège de la pluie.</li>
            <li>Tablier intégré à la moto qui couvrira vos jambes.</li>
            <li>Gilet airbag spécialisé pour la moto.</li>
          </ul>
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.5,
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, EffectCube]}
            className="mySwiper"
          >
            {slides}
          </Swiper>
        </div>
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
