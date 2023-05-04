import React from "react";
import styles from "./sectionTres.module.css";

const SectionTres = () => {
  return (
    <section className={styles.contenedorSectionTres}>
      <div className={styles.contenedorContenidoUno}>
        <div className={styles.bloqueIzq}>
          <h2>
            ¿Cómo puedo vender oro en
            <span className={styles.linea}> Tarragona?</span>
          </h2>
          <p>
            <span>
              ¡Es muy fácil! Ven a Quickgold Tarragona con tus piezas de oro y,
              en el momento, te indicamos la pureza de las piezas y, en función
              de su peso, te indicamos el dinero que te vamos a dar en efectivo.{" "}
            </span>
            El importe siempre depende del precio del oro, que puedes comprobar
            online en nuestra web y en nuestra tienda.
          </p>
        </div>
        <div className={styles.bloqueDer}>
          <h2>¿Cuál es el precio del oro en Tarragona?</h2>
          <p>
            El precio del oro en Tarragona se actualiza constantemente para
            ofrecerte siempre las mejores condiciones y el mejor precio de toda
            la ciudad. Llámanos sin compromiso y fija tu precio, sin compromiso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionTres;
