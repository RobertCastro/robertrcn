import React from 'react'
import Header from '../../components/Home/Header/Index';
import Listing from '../../components/Home/Listing/Index';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'

const Home = () => {

  const api = 'https://test.canalrcndigital.com/notas.json';

  const [datos, setDatos] = useState([]);

  const getData = async () => {

    const response = await fetch(api);
    const responseJSON = await response.json();
    setDatos(responseJSON);

  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Helmet>
        <title>Canal RCN | Nuestra Tele - Televisión y Entretenimiento</title>
        <meta name="description" content="En canalrcn.com encontrarás los capítulos completos de tus novelas favoritas, contenido exclusivo de nuestras producciones y lo último en noticias" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Canal RCN | Nuestra Tele - Televisión y Entretenimiento" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="https://imagenes.canalrcn.com/CanalRCN/imagen-compartir-canal.jpg" />
        <meta property="og:description" content="En canalrcn.com encontrarás los capítulos completos de tus novelas favoritas, contenido exclusivo de nuestras producciones y lo último en noticias de entretenimiento." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Header />
      <Listing datos={datos}/>

    </>
    
  );
}

export default Home