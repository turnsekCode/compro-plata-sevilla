import React, { useState } from "react";
import styles from "./section_2.module.css";
import BloquePrecioPlata from "../ConversorPlata/BloquePrecioPlata";

const SectionDos = ({ ciudad }) => {
  const [switched, setSwitched] = useState(null);
  return (
    <section className={styles.contendorSectionDos}>
      <div className={styles.contendorBloques}>
        <div className={styles.bloqueIzq}>
          <figure>
            <img src="/logoOro.png" alt="Logo Plata" />
          </figure>
          <div className={styles.contenedorInfo}>
            <h2>Comprar Plata en Sevilla</h2>
            <p>
              Utiliza nuestra calculadora para conocer<br></br> el precio de
              vender plata en Sevilla.
            </p>
          </div>
        </div>
        <BloquePrecioPlata ciudad={ciudad} />
      </div>
    </section>
  );
};

export default SectionDos;
