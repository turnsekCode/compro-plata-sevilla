import React from "react";
import styles from "./sectionTres.module.css";

const SectionTres = () => {
  return (
    <section className={styles.contenedorSectionTres}>
      <div className={styles.contenedorContenidoUno}>
        <div className={styles.bloqueIzq}>
          <h2>
            ¿Cómo puedo vender oro en
            <span className={styles.linea}> Bilbao?</span>
          </h2>
          <p>
            <span>
              Ven a nuestra tienda compro en Bilbao y trae tus piezas de oro que
              ya no quieres, o no utilizas. Nuestro equipo tasará tus joyas
              delante de ti, y te indicará el precio del oro en Bilbao en ese
              momento.{" "}
            </span>
            Tú decides si quieres vender o prefieres quedártelas. En el momento,
            te llevas tu dinero en efectivo. Sin papeleos, sin esperas.
          </p>
        </div>
        <div className={styles.bloqueDer}>
          <h2>¿Cuál es el precio del oro en Bilbao?</h2>
          <p>
            Tanto en nuestra calculadora de precios online como en nuestra
            tienda compro oro puedes ver el precio del oro siempre actualizado.
            Llámanos sin compromiso para consultar el precio que puedes
            conseguir por tus piezas de oro o si tienes cualquier duda del
            procedimiento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionTres;
