import styles from "./conversor.module.css";
import { useState, useEffect } from "react";

const BloquePrecioPlata = ({ ciudad }) => {
  const nombreCiudad = ciudad.acf.ciudad_oro;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    fetch(`https://quickgold.es/archivos-cache/Fixing${nombreCiudad}.txt`, {
      cache: "no-cache",
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setLoading(true);
      });
  }, []);
  const precio999 =
    (data?.result?.Tarifas?.Plata[3].Productos[0].Precio).toFixed(2);
  const precio925 =
    (data?.result?.Tarifas?.Plata[2].Productos[0].Precio).toFixed(2);
  const precio800 =
    (data?.result?.Tarifas?.Plata[0].Productos[0].Precio).toFixed(2);
  const masDePlata = ciudad?.acf?.para_mas_de_plata;
  const PrecioMasPlata = ciudad?.acf?.precio_mas_de_plata;
  const precio999Suma = parseFloat(precio999) + parseFloat(PrecioMasPlata);
  const precio925Suma = parseFloat(precio925) + parseFloat(PrecioMasPlata);
  const precio800Suma = parseFloat(precio800) + parseFloat(PrecioMasPlata);
  return (
    <div className={styles.contenedorPrecioPlata}>
      <div className={styles.contenedorBloqueSuperiorPlata}>
        <div className={styles.contenedorPreciosPlata}>
          <div className={styles.contenedorprecioDestacadoPlata}>
            <div className={styles.precioDestacadoPlata}>
              <p className={styles.masde}>Más de {masDePlata}kg</p>
              {!loading ? (
                <p className={styles.precio18k}>Cargando</p>
              ) : (
                <p className={styles.precio18k}>
                  {precio999Suma.toFixed(2)}
                  <span>€/kg</span>
                </p>
              )}
              <p className={styles.kilates}>999</p>
            </div>
          </div>
          <div className={styles.contenedorOtrosPrecios}>
            <div className={styles.OtrosPrecios}>
              {!loading ? (
                <p className={styles.precio}>Cargando</p>
              ) : (
                <p className={styles.precio}>
                  {precio925Suma.toFixed(2)}
                  <span>€/kg</span>
                </p>
              )}
              <p className={styles.preciok}>925</p>
            </div>
            <div className={styles.OtrosPrecios}>
              {!loading ? (
                <p className={styles.precio}>Cargando</p>
              ) : (
                <p className={styles.precio}>
                  {precio800Suma}
                  <span>€/kg</span>
                </p>
              )}
              <p className={styles.preciok}>800</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contenedorBloqueSuperiorPlata}>
        <div className={styles.contenedorPreciosPlata}>
          <div className={styles.contenedorprecioDestacadoPlata}>
            <div className={styles.precioDestacadoPlata}>
              <p className={styles.masde}>Menos de {masDePlata}kg</p>
              {!data ? (
                <p className={styles.precio18k}>Cargando</p>
              ) : (
                <p className={styles.precio18k}>
                  {precio999}
                  <span>€/kg</span>
                </p>
              )}
              <p className={styles.kilates}>999</p>
            </div>
          </div>
          <div className={styles.contenedorOtrosPrecios}>
            <div className={styles.OtrosPrecios}>
              {!data ? (
                <p className={styles.precio}>Cargando</p>
              ) : (
                <p className={styles.precio}>
                  {precio925}
                  <span>€/kg</span>
                </p>
              )}
              <p className={styles.preciok}>925</p>
            </div>
            <div className={styles.OtrosPrecios}>
              {!data ? (
                <p className={styles.precio}>Cargando</p>
              ) : (
                <p className={styles.precio}>
                  {precio800}
                  <span>€/kg</span>
                </p>
              )}
              <p className={styles.preciok}>800</p>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.promocion}>
        <span className={styles.linea}>Promoción Online</span>
      </p>
      <a
        className={styles.botonLlamarTienda}
        href={`tel:${ciudad?.acf?.telefono}`}
      >
        LLAMA GRATIS AL 900 373 629
      </a>
    </div>
  );
};

export default BloquePrecioPlata;
