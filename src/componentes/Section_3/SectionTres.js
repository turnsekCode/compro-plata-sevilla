import React from "react";
import styles from "./sectionTres.module.css";

const SectionTres = () => {
  return (
    <section className={styles.contenedorSectionTres}>
      <div className={styles.contenedorContenidoUno}>
        <div className={styles.bloqueIzq}>
          <h2>
            ¿Cómo puedo vender oro en
            <span className={styles.linea}> Sevilla?</span>
          </h2>
          <p>
            <span>
              Actualmente tenemos 2 tiendas compro oro en Sevilla para ofrecerte
              el mejor servicio para vender tus joyas de toda la ciudad.{" "}
            </span>
            El proceso para vender oro es muy sencillo y cómodo. Realizamos una
            tasación a la vista y pesamos todas las piezas. Según el kilataje de
            cada una de ellas, te indicaremos el dinero en efectivo que te
            entregamos.
          </p>
        </div>
        <div className={styles.bloqueDer}>
          <h2>¿Cuál es el precio del oro en Sevilla?</h2>
          <p>
            Conoce el precio del oro siempre actualizado en nuestras tiendas
            Quickgold en Sevilla o en esta página web. En función del peso,
            quilates de las piezas y características, obtendrás un importe u
            otro, siempre en efectivo y al momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionTres;
