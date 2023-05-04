import React, { useState } from "react";
import styles from "./section_2.module.css";
import CalculadoraOro from "../ConversorPlata/CalculadoraOro";

const SectionDos = ({ ciudad }) => {
  const [switched, setSwitched] = useState(null);
  return (
    <section className={styles.contendorSectionDos}>
      <div className={styles.contendorBloques}>
        <div className={styles.bloqueIzq}>
          <figure>
            <img src="/imagen_calc.png" alt="Logo Divisa" />
          </figure>
          <div className={styles.contenedorInfo}>
            <h2>Comprar oro en Tarragona</h2>
            <p>
              Utiliza nuestra calculadora para conocer<br></br> el precio de
              vender oro en Tarragona.
            </p>
          </div>
        </div>
        <CalculadoraOro ciudad={ciudad} />
      </div>
    </section>
  );
};

export default SectionDos;
