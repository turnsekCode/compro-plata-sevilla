import React from "react";
//import Image from "next/image";
import styles from "./section_uno.module.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link } from "react-scroll";
import useScreenSize from "@/utilities/useScreenSize";

const Section_uno = () => {
  const { width } = useScreenSize();
  return (
    <section className={styles.contenedorSectionUno}>
      <div className={styles.bloqueIzq}>
        <h1>
          Compro oro <span className={styles.linea}>Tarragona</span>
        </h1>
        <p>
          Vender oro en Tarragona es muy fácil y rápido en Quickgold. Te
          esperamos en Plaça de Ponente número 7 (esquina con Avenida Prat de la
          Riba), en Tarragona. Trae tus joyas de oro y las tasaremos, pesaremos,
          revisamos sus quítales y en función de toda esa información, te
          indicamos el importe que te vamos a pagar.
        </p>
        <div className={styles.botones}>
          <Link
            to="contenedorMapa"
            smooth={true}
            offset={-110}
            spy={true}
            duration={500}
            title="texto"
            passive="true"
          >
            <LocationOnOutlinedIcon />
            encuentra tu tienda
          </Link>
          <a href="tel:900 373 629" title="Teléfono">
            llama gratis al 900 373 629
          </a>
        </div>
      </div>
      <div className={styles.bloqueDer}>
        {width <= 610 ? (
          <img
            src="/tarragona_mobil.webp"
            alt="Compro oro Tarragona"
            className={styles.madridMobil}
            width={290}
            height={220}
          />
        ) : (
          <img
            src="/tarragona.webp"
            alt="Compro oro Tarragona"
            className={styles.vector}
            width={480}
            height={364}
          />
        )}
      </div>
    </section>
  );
};

export default Section_uno;
