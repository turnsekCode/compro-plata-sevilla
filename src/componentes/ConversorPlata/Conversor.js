import Image from "next/image";
import styles from "./conversor.module.css";
import logoOro from "../../../public/assets/logoOro.png";
import logoPlata from "../../../public/assets/logoPlata.png";
import CalculadoraOro from "./CalculadoraOro";
import BloquePrecioPlata from "./BloquePrecioPlata";

const Conversor = ({ ciudad, data, loading }) => {
  return (
    <div className={styles.contenedorConversorBanderas}>
      <div className={styles.contenedorConversor}>
        <div className={styles.conversorTitulo}>
          <Image src={logoOro} width={50} height={50} alt="Logo Oro" />
          <div className={styles.conversorTexto}>
            <h2>Precio del Oro</h2>
            <p>Conoce el precio del oro</p>
          </div>
        </div>
        <CalculadoraOro ciudad={ciudad} data={data} loading={loading} />
      </div>
      <div className={styles.contenedorConversor}>
        <div className={styles.conversorTitulo}>
          <Image src={logoPlata} width={50} height={50} alt="Logo Plata" />
          <div className={styles.conversorTexto}>
            <h2>Precio de la Plata</h2>
            <p>Conoce el precio de la plata</p>
          </div>
        </div>
        <BloquePrecioPlata ciudad={ciudad} data={data} loading={loading} />
      </div>
    </div>
  );
};

export default Conversor;
