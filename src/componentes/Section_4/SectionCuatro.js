import React from "react";
//import Image from "next/image";
import styles from "./sectionCuatro.module.css";

const SectionCuatro = () => {
  return (
    <section className={styles.contenedorSectionCuatro}>
      <div className={styles.bloqueIzq}>
        <h2>
          ¿Cuánto dinero recibo por vender plata en{" "}
          <span className={styles.linea}>Sevilla?</span>
        </h2>
        <p>
          A diferencia del precio del oro, el precio de la plata se fija por
          kilos. Llámanos para consultar cuál es el precio de la plata en
          Sevilla en ese momento y si te interesa vender tus piezas de plata. El
          proceso es muy sencillo: se pesan las piezas y se comprueban, te
          indicamos el importe a pagar y, tras firmar un recibo, procedemos al
          pago de la venta en efectivo.
        </p>
      </div>
      <div className={styles.bloqueDer}>
        <img
          loading="lazy"
          src="/compro-oro-sevilla.webp"
          alt="Compro oro sevilla"
          className={styles.Image}
          width={480}
          height={390}
        />
      </div>
    </section>
  );
};

export default SectionCuatro;
