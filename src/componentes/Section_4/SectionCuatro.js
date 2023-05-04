import React from "react";
//import Image from "next/image";
import styles from "./sectionCuatro.module.css";

const SectionCuatro = () => {
  return (
    <section className={styles.contenedorSectionCuatro}>
      <div className={styles.bloqueIzq}>
        <h2>
          ¿Cuánto dinero recibo por vender plata en
          {""}
          <span className={styles.linea}>Tarragona?</span>
        </h2>
        <p>
          Consulta el precio por kilo de la plata en la parte superior y
          acércate a nuestra tienda Quickgold en Tarragona para obtener tu
          dinero en efectivo, al instante. Puedes vender la cubertería que ya no
          utilizas, las piezas de plata que has heredado, monedas que antes te
          gustaba coleccionar y hasta lingotes de plata, si tienes. Tasaremos
          todas las piezas delante de ti para que, con total transparencia,
          puedas conocer el importe que puedes recibir por ellas.
        </p>
      </div>
      <div className={styles.bloqueDer}>
        <img
          loading="lazy"
          src="/compro-oro-tarragona.webp"
          alt="Compro oro Tarragona"
          className={styles.Image}
          width={480}
          height={390}
        />
      </div>
    </section>
  );
};

export default SectionCuatro;
