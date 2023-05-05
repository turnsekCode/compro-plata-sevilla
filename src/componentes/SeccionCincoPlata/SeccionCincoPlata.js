import React from "react";
import styles from "./seccionCincoPlata.module.css";
import BloquePrecioPlata from "../ConversorPlata/BloquePrecioPlata";

const SeccionCincoPlata = ({ ciudad }) => {
  return (
    <section className={styles.contendorSectionDos}>
      <div className={styles.contendorBloques}>
        <div className={styles.bloqueIzq}>
          <figure>
            <img src="/logoPlata.png" alt="Logo Plata" />
          </figure>
          <div className={styles.contenedorInfo}>
            <h2>Compro plata Sevilla</h2>
            <p>
              Información sobre el precio de la plata, <br></br>siempre
              actualizado en Sevilla.
            </p>
          </div>
        </div>
        <BloquePrecioPlata ciudad={ciudad} />
      </div>
    </section>
  );
};

export default SeccionCincoPlata;
