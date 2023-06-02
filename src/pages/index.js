import Head from "next/head";
//import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "@/styles/Home.module.css";
import Breadcrumbs from "@/componentes/Breadcrumbs/Breadcrumbs";
import Section_uno from "@/componentes/Section_1/Section_uno";
import SectionDos from "@/componentes/Section_2/SectionDos";
import SectionTres from "@/componentes/Section_3/SectionTres";
import SectionCuatro from "@/componentes/Section_4/SectionCuatro";
//import Mapa from "@/componentes/Mapa/Mapa";
import Layout from "@/componentes/Layout/Layout";
import { useInView } from "react-intersection-observer";
import SeccionCincoPlata from "@/componentes/SeccionCincoPlata/SeccionCincoPlata.js";

const DynamicMapa = dynamic(() =>
  import(/*componente del mapa script*/ "../componentes/Mapa/Mapa.js")
);

export default function Home({ markers, menu_list, ciudad }) {
  const { ref: myRef, inView, entry } = useInView();
  return (
    <>
      <Head>
        <title>Compro Plata Madrid | Vender Plata Madrid</title>
        <meta
          name="description"
          content="Vende tus piezas de plata y oro en nuestro compro plata en Madrid. Tasación a la
vista y precios siempre actualizados."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout menu_list={menu_list}>
        <div className={styles.main}>
          <Breadcrumbs />
          <Section_uno />
          <SectionDos ciudad={ciudad} />
          <SectionTres />
          <SectionCuatro />
          <div
            id="contenedorMapa"
            className={styles.contenedorMapaVisible}
            ref={myRef}
          >
            {inView ? <DynamicMapa markers={markers} /> : null}
          </div>
          {/*<Mapa markers={markers} />*/}
        </div>
      </Layout>
    </>
  );
}
const idTienda = "madrid";
const idPaginaWp = "468";
//const idWp = "13848";
export async function getStaticProps() {
  const ciudad1 = await fetch(
    `https://quickgold.es/wp-json/acf/v3/pages/${idPaginaWp}`
  );
  const ciudad = await ciudad1.json();

  const marker = await fetch(`https://quickgold.es/markers${idTienda}.json`);
  const markers = await marker.json();

  const menu = await fetch(
    `https://admin.quickgold.es/wp-json/menus/v1/menus/2`
  );
  const menu_list = await menu.json();

  // Pass data to the page via props
  return {
    props: {
      markers,
      menu_list,
      ciudad,
    },
    revalidate: 1,
  };
}
