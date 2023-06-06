import React from "react";
import styles from "./sectionTres.module.css";

const SectionTres = () => {
  return (
    <section className={styles.contenedorSectionTres}>
      <div className={styles.contenedorContenidoUno}>
        <div className={styles.bloqueIzq}>
          <h2>
            ¿Cómo puedo vender plata en
            <span className={styles.linea}> Sevilla?</span>
          </h2>
          <p>
            <span>
              Ven a nuestra tienda compro plata en sevilla y trae tus piezas de
              plata que ya no quieres, o no utilizas. Nuestro equipo tasará tus
              joyas delante de ti, y te indicará el precio de la plata en
              sevilla en ese momento.{" "}
            </span>
            Tú decides si quieres vender o prefieres quedártelas. En el momento,
            te llevas tu dinero en efectivo. Sin papeleos, sin esperas.
          </p>
        </div>
        <div className={styles.bloqueDer}>
          <h2>¿Cuál es el precio de la plata en Sevilla?</h2>
          <p>
            Tanto en nuestra calculadora de precios online como en nuestra
            tienda compro plata puedes ver el precio de la plata siempre
            actualizado. Llámanos sin compromiso para consultar el precio que
            puedes conseguir por tus piezas de plata o si tienes cualquier duda
            del procedimiento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionTres;
